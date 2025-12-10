


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

See LICENSE file (if you add one) or include the following in your repo:

MIT License

Copyright (c) YEAR


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

cd ../front-end

# Install dependencies
npm install

# Create a .env file in the front-end directory (if needed)
# Add backend API URL:
# VITE_API_BASE_URL=http://localhost:4000

# Start the development server
npm run dev
# Frontend runs on http://localhost:5173

cd ../admin

# Install dependencies
npm install

# Create a .env file in the admin directory (if needed)
# Add backend API URL:
# VITE_API_BASE_URL=http://localhost:4000

# Start the admin dashboard
npm run dev
# Admin panel runs on http://localhost:5174

Permission is hereby granted, free of charge, to any person obtaining a copy...
```
cd back-end
npm start

cd front-end
npm run dev

cd admin
npm run dev

Accessing the Application:
Customer App: http://localhost:5173
Admin Dashboard: http://localhost:5174
Backend API: http://localhost:4000
Sample Usage:
Customer Flow:
Register/Login with your account
Browse products by category
View product details
Add products to cart
Proceed to checkout
Place order
View order history
Admin Flow:
Login to admin dashboard with admin credentials
Navigate to Products section
Add new products with images
Manage inventory
View and process customer orders
🔌 API Endpoints
Authentication:
POST /api/user/register - User registration
POST /api/user/login - User login
POST /api/admin/login - Admin login
Products:
GET /api/product/list - Get all products
POST /api/product/add - Add new product (admin)
PUT /api/product/update/:id - Update product (admin)
DELETE /api/product/remove/:id - Delete product (admin)
Orders:
POST /api/order/place - Place order
GET /api/order/userorders - Get user orders
GET /api/order/list - Get all orders (admin)
PUT /api/order/status - Update order status (admin)
🤝 Contributor Guidelines
We welcome contributions! Please follow these guidelines:

Getting Started:
Fork the repository
Create a feature branch: git checkout -b feature/YourFeatureName
Commit your changes: git commit -m 'Add YourFeatureName'
Push to the branch: git push origin feature/YourFeatureName
Open a pull request
Code Standards:
Use consistent naming conventions (camelCase for variables/functions, PascalCase for components)
Write clean, readable code with comments for complex logic
Follow React best practices (hooks, functional components)
Test your changes before submitting
Update documentation for significant changes
Commit Messages:
Use clear, descriptive commit messages
Format: [Type] Description (e.g., [Feature] Add product search functionality)
Types: [Feature], [Fix], [Refactor], [Docs], [Style]
Pull Request Process:
Ensure your PR title clearly describes the changes
Provide a detailed description of what was changed and why
Link any relevant issues
Ensure all tests pass
Request review from maintainers
Reporting Issues:
Use clear, descriptive titles
Include steps to reproduce
Provide expected vs. actual behavior
Attach screenshots if applicable
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

You are free to:

✅ Use the code for personal or commercial projects
✅ Modify and distribute the code
✅ Include the code in proprietary applications
With the conditions:

⚠️ Include a copy of the license
⚠️ Include a copyright notice
📞 Support & Contact
For questions, issues, or suggestions:

GitHub Issues: Create an issue
Email: [Your Contact Email]
🙏 Acknowledgments
MongoDB and Mongoose for database solutions
Cloudinary for image hosting
React and Vite communities
All contributors and users of this project
Made with ❤️ by [Your Name]

⭐ If you found this project helpful, please consider giving it a star!

The README has been created with:

✨ Attractive emojis for visual appeal
📋 Comprehensive sections covering all requested areas
🎯 Clear structure with table of contents and navigation
💻 Technical details specific to your MERN stack
📝 Well-formatted markdown ready for GitHub
🚀 Step-by-step setup instructions
🤝 Detailed contributor guidelines
The file is saved as README_COMPLETE.md in your project root. You can copy the raw markdown content and use it as your repository description!The README has been created with:

✨ Attractive emojis for visual appeal
📋 Comprehensive sections covering all requested areas
🎯 Clear structure with table of contents and navigation
💻 Technical details specific to your MERN stack
📝 Well-formatted markdown ready for GitHub
🚀 Step-by-step setup instructions
🤝 Detailed contributor guidelines
