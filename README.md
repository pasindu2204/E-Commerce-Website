
# 🛍️ E-Commerce Website

A full-stack **MERN** (MongoDB, Express.js, React, Node.js) e-commerce platform with an intuitive user interface and a powerful admin dashboard for managing products and orders.

---

## 📋 Table of Contents

- [Description](#description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributor Guidelines](#contributor-guidelines)
- [License](#license)

---

## 📝 Description

This is a comprehensive e-commerce platform designed to provide customers with a seamless shopping experience while giving administrators powerful tools to manage the storefront. The application is built with modern technologies and follows best practices for scalability, security, and user experience.

### Key Highlights:
- 🛒 **Customer-Facing Frontend** - Browse products, manage cart, place orders
- 👨‍💼 **Admin Dashboard** - Manage products, track orders, and view analytics
- 🔐 **Secure Authentication** - User authentication with JWT and bcryptjs
- 📦 **Product Management** - Add, update, and delete products with image uploads
- 🎨 **Responsive Design** - Mobile-friendly interface with Vite + React
- ☁️ **Cloud Storage** - Cloudinary integration for image management
- 💾 **Database** - MongoDB for robust data persistence

---

## ✨ Features

### For Customers:
- ✅ User registration and login
- ✅ Browse and search products
- ✅ View product details and reviews
- ✅ Add products to cart
- ✅ Place and track orders
- ✅ Wishlist functionality
- ✅ Responsive mobile design

### For Administrators:
- ✅ Secure admin login
- ✅ Add, edit, and delete products
- ✅ Manage inventory
- ✅ View and process orders
- ✅ Upload product images via Cloudinary
- ✅ User management

---

## 🛠️ Tech Stack

### Frontend:
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS 3** - Styling
- **Axios** - HTTP client

### Backend:
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Bcryptjs** - Password hashing
- **Multer** - File upload handling
- **Cloudinary** - Cloud image storage

---

## 📁 Project Structure

```
e-commerce-website/
├── front-end/                 # Customer-facing React app
│   ├── src/
│   │   ├── Components/        # Reusable React components
│   │   ├── Pages/             # Page components
│   │   ├── Context/           # State management (ShopContext)
│   │   ├── assets/            # Images and static files
│   │   └── App.jsx            # Root component
│   ├── package.json
│   └── vite.config.js
│
├── admin/                      # Admin dashboard React app
│   ├── src/
│   │   ├── Component/         # Admin components
│   │   ├── Pages/             # Admin pages
│   │   ├── assets/            # Admin assets
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
├── back-end/                   # Node.js/Express API
│   ├── controllers/           # Business logic
│   ├── models/                # Mongoose schemas
│   ├── routes/                # API routes
│   ├── middleware/            # Auth, file upload middleware
│   ├── config/                # Database & cloud config
│   ├── uploads/               # Temporary file storage
│   ├── Server.js              # Main server file
│   └── package.json
│
├── package.json               # Root package.json
└── README.md                  # Project documentation
```

---

## 🚀 Setup Instructions

### Prerequisites:
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local or Atlas cloud)
- **Cloudinary** account (for image uploads)

### Step 1: Clone the Repository
```bash
git clone https://github.com/pasindu2204/E-Commerce-Website.git
cd E-Commerce-Website
```

### Step 2: Backend Setup
```bash
cd back-end

# Install dependencies
npm install

# Create a .env file in the back-end directory
# Add the following environment variables:
# MONGODB_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret_key
# CLOUDINARY_NAME=your_cloudinary_name
# CLOUDINARY_API_KEY=your_cloudinary_api_key
# CLOUDINARY_API_SECRET=your_cloudinary_api_secret
# ADMIN_EMAIL=admin@example.com
# ADMIN_PASSWORD=admin_password

# Start the backend server
npm start
# Server runs on http://localhost:4000
```

### Step 3: Frontend Setup
```bash
cd ../front-end

# Install dependencies
npm install

# Create a .env file in the front-end directory (if needed)
# Add backend API URL:
# VITE_API_BASE_URL=http://localhost:4000

# Start the development server
npm run dev
# Frontend runs on http://localhost:5173
```

### Step 4: Admin Dashboard Setup
```bash
cd ../admin

# Install dependencies
npm install

# Create a .env file in the admin directory (if needed)
# Add backend API URL:
# VITE_API_BASE_URL=http://localhost:4000

# Start the admin dashboard
npm run dev
# Admin panel runs on http://localhost:5174
```

### Step 5: Database Setup
1. Create a MongoDB database (locally or on MongoDB Atlas)
2. Update the `MONGODB_URI` in your backend `.env` file
3. The application will automatically create collections on first run

---

## 💻 Usage

### Running the Application:

1. **Start Backend Server:**
   ```bash
   cd back-end
   npm start
   ```

2. **Start Frontend (in a new terminal):**
   ```bash
   cd front-end
   npm run dev
   ```

3. **Start Admin Dashboard (in a new terminal):**
   ```bash
   cd admin
   npm run dev
   ```

### Accessing the Application:
- **Customer App:** http://localhost:5173
- **Admin Dashboard:** http://localhost:5174
- **Backend API:** http://localhost:4000

### Sample Usage:

#### Customer Flow:
1. Register/Login with your account
2. Browse products by category
3. View product details
4. Add products to cart
5. Proceed to checkout
6. Place order
7. View order history

#### Admin Flow:
1. Login to admin dashboard with admin credentials
2. Navigate to Products section
3. Add new products with images
4. Manage inventory
5. View and process customer orders

---

## 🔌 API Endpoints

### Authentication:
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `POST /api/admin/login` - Admin login

### Products:
- `GET /api/product/list` - Get all products
- `POST /api/product/add` - Add new product (admin)
- `PUT /api/product/update/:id` - Update product (admin)
- `DELETE /api/product/remove/:id` - Delete product (admin)

### Orders:
- `POST /api/order/place` - Place order
- `GET /api/order/userorders` - Get user orders
- `GET /api/order/list` - Get all orders (admin)
- `PUT /api/order/status` - Update order status (admin)

---

## 🤝 Contributor Guidelines

We welcome contributions! Please follow these guidelines:

### Getting Started:
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/YourFeatureName`
3. Commit your changes: `git commit -m 'Add YourFeatureName'`
4. Push to the branch: `git push origin feature/YourFeatureName`
5. Open a pull request

### Code Standards:
- Use consistent naming conventions (camelCase for variables/functions, PascalCase for components)
- Write clean, readable code with comments for complex logic
- Follow React best practices (hooks, functional components)
- Test your changes before submitting
- Update documentation for significant changes

### Commit Messages:
- Use clear, descriptive commit messages
- Format: `[Type] Description` (e.g., `[Feature] Add product search functionality`)
- Types: `[Feature]`, `[Fix]`, `[Refactor]`, `[Docs]`, `[Style]`

### Pull Request Process:
1. Ensure your PR title clearly describes the changes
2. Provide a detailed description of what was changed and why
3. Link any relevant issues
4. Ensure all tests pass
5. Request review from maintainers

### Reporting Issues:
- Use clear, descriptive titles
- Include steps to reproduce
- Provide expected vs. actual behavior
- Attach screenshots if applicable

---

## 📄 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

You are free to:
- ✅ Use the code for personal or commercial projects
- ✅ Modify and distribute the code
- ✅ Include the code in proprietary applications

With the conditions:
- ⚠️ Include a copy of the license
- ⚠️ Include a copyright notice

---

## 📞 Support & Contact

For questions, issues, or suggestions:
- **GitHub Issues:** [Create an issue](https://github.com/pasindu2204/E-Commerce-Website/issues)
- **Email:** [Your Contact Email]

---

## 🙏 Acknowledgments

- MongoDB and Mongoose for database solutions
- Cloudinary for image hosting
- React and Vite communities
- All contributors and users of this project

---

<div align="center">

**Made with ❤️ by [Your Name]**

⭐ If you found this project helpful, please consider giving it a star!

</div>
```

The README has been created with:
- ✨ **Attractive emojis** for visual appeal
- 📋 **Comprehensive sections** covering all requested areas
- 🎯 **Clear structure** with table of contents and navigation
- 💻 **Technical details** specific to your MERN stack
- 📝 **Well-formatted markdown** ready for GitHub
- 🚀 **Step-by-step setup instructions**
- 🤝 **Detailed contributor guidelines**

The file is saved as `README_COMPLETE.md` in your project root. You can copy the raw markdown content and use it as your repository description!The README has been created with:
- ✨ **Attractive emojis** for visual appeal
- 📋 **Comprehensive sections** covering all requested areas
- 🎯 **Clear structure** with table of contents and navigation
- 💻 **Technical details** specific to your MERN stack
- 📝 **Well-formatted markdown** ready for GitHub
- 🚀 **Step-by-step setup instructions**
- 🤝 **Detailed contributor guidelines**

