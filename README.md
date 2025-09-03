# 🛒 React Shopping Cart

A modern shopping cart application built with **React** and **Redux Toolkit**, showcasing advanced state management concepts such as **slices, thunks, selectors, action creators, and normalization**.  
The project also integrates **React Router** for seamless navigation and features a **clean, intuitive, and user-friendly UI**.

---

## 🚀 Features
- **Product Listing** – Browse products with images, details, and pricing.  
- **Cart Management** – Add, remove, and update product quantities.  
- **Advanced Redux Toolkit**:
  - Modular **slices** for clean separation of concerns.  
  - **Thunks** for async API calls (product fetching, checkout simulation, etc.).  
  - Optimized **selectors** for performance.  
  - Custom **action creators** for flexible state updates.  
- **React Router Integration** – Smooth navigation across pages.  
- **Persistent State** – Cart data remains intact on page refresh.  
- **Responsive UI** – Works seamlessly on desktop and mobile.

---

## 🛠️ Tech Stack
- **React 18** – Component-based UI.  
- **Redux Toolkit** – Advanced state management.  
- **React Router v6+** – Routing and navigation.  
- **CSS Modules / Tailwind (customizable)** – Clean, maintainable styling.  

---

## 📂 Project Structure

src/
├── app/ # Redux store setup
├── features/ # Redux slices (cart, products, users, etc.)
├── components/ # Reusable UI components
├── pages/ # Route-based pages (Home, Cart, Checkout)
├── hooks/ # Custom React hooks
├── utils/ # Helpers and utilities
├── routes/ # Centralized route configuration
└── index.tsx # App entry point
