import UserModels from "../models/userModels.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const createToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// route for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModels.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "user doesn't exists" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id);
      return res.json({ success: true, token });
    } else {
      return res.json({ success: false, message: "Invalid password" });
    }

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Login failed due to server error" });
  }
};

// route to user registration

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if user already exists
    const exists = await UserModels.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "user already exists" });
    }
    // validating email format & strong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "please enter a valid email",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "please enter a strong password",
      });
    }

    // hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create new user
    const newUser = new UserModels({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Registration failed due to server error",
    });
  }
};

// route for admin
const adminLogin = async (req, res) => {};

export default { loginUser, registerUser, adminLogin };
