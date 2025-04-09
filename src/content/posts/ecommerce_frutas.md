---
title: Ecommerce studies project
published: 2024-08-10
updated: 2025-04-09
description: 'Complete ecommerce enviroment'
image: ''
tags: [Projects, HTML, CSS, JS, NodeJS, React, Express, MongoDB]
category: Projects
draft: false

---

## GitHub Repository 
::github{repo="Kenjibercysec/E-commerce_Frutas"}

--- 

# Fruit Store E-commerce

A modern and responsive e-commerce platform specialized in fruits, developed with React, Node.js, and MongoDB.

## 🚀 Technologies Used

### Frontend
- **React** - JavaScript library for building user interfaces
- **React Context API** - Global state management
- **CSS3** - Styling with CSS variables and responsive design
- **HTML5** - Semantic application structure

### Backend
- **Node.js** - JavaScript runtime environment
- **Express** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication and authorization
- **Bcrypt** - Password encryption

### Tools and Services
- **GitHub Pages** - Frontend hosting
- **MongoDB Atlas** - Cloud database
- **Postman** - API testing
- **VS Code** - Development environment

## 📋 Features

### Authentication
- User registration
- JWT login
- Password recovery
- Profile updates

### Products
- Product listing
- Category filtering
- Name and price sorting
- Pagination
- Product details

### Shopping Cart
- Add/remove products
- Update quantities
- Total calculation
- Local persistence

### Interface
- Responsive design
- Smooth animations
- Light/dark themes
- Accessibility

## 🛠️ Environment Setup

1. **Prerequisites**
   ```bash
   Node.js >= 14.x
   MongoDB >= 4.x
   ```

2. **Installation**
   ```bash
   # Clone the repository
   git clone https://github.com/your-username/fruit-store.git

   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. **Configuration**
   - Create a `.env` file in the backend:
     ```
     MONGODB_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     PORT=3000
     ```

4. **Running**
   ```bash
   # Start the backend
   cd backend
   npm start

   # Start the frontend
   cd frontend
   npm start
   ```

## 🔒 Security

- JWT Authentication
- Password encryption
- XSS protection
- Input validation
- CORS configured
- Rate limiting
- Data sanitization

## 📁 Project Structure

```
fruit-store/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── pages/
│   │   └── styles/
│   └── package.json
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── package.json
└── README.md
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email support@example.com or open an issue on GitHub.

## 🙏 Acknowledgments

- Compass UOL for support
- Open source community
- All contributors 