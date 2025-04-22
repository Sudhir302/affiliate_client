# 🛍️ BAZZAR — E-commerce Admin Dashboard & Product Showcase
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

BAZZAR is a sleek, responsive web application designed for managing and showcasing affiliate products. It allows users to browse a curated selection of items and seamlessly navigate to external platforms like Amazon or Flipkart via dedicated product links — all from within the BAZZAR interface.


This fronted app works together with a Node.js + express backend.


You can find the backend source code here:
[affiliate-server (Backend Repo)](https://github.com/Sudhir302/affiliate_server.git)

## 🚀 Features
    - Responsive UI for desktop and mobile
    - Product search with real-time filtering
    - Category-based product listing
    - Admin panel for editing, updating, and deleting products
    - Backend-connected using **Axios** with cookies
    - Admin login with protected routes

## Screenshots

<p >
    <img src="./screenshots/desk4.png" width="450"/>
    <img src="./screenshots/desk3.png" width="450"/>
    <img src="./screenshots/desk1.png" width="450"/>
    <img src="./screenshots/desk2.png" width="450"/>
    <br />
    <img src="./screenshots/mob1.png" height="500"/>
    <img src="./screenshots/mob2.png" height="500"/>
    <img src="./screenshots/mob3.png" height="500"/>
    <img src="./screenshots/mob4.png" height="500"/>
</p>

## Tech Stack
### Frontend:
- React.js
- Axios
- CSS3
- Vite

### Backend (Expected):
- Node.js / Express.js
- MongoDB (Mongoose)
- JWT & Cookie-based Authentication

## 🚀 Getting Started

### Prerequisites
- node
- VS Code
- [affiliate-server (Backend Repo)](https://github.com/Sudhir302/affiliate_server.git)


### Installation

1. Clone the repository
    ```
    https://github.com/Sudhir302/affiliate_client.git

2. Navigate to the project directory
    ```
    cd affiliate_client

3. Install dependencies:
    ```
    npm install

4. Run the app
    ```
    npm run dev

## 📂 Folder Structure (Frontend)

src/
├── components/
|   ├── ComNav.jsx
|   ├── Footer.jsx
|   ├── Googlelogin.jsx
│   ├── Navbar.jsx
│   ├── Sameproduct.jsx
├── pages/
│   ├── CreateProduct.jsx
│   ├── EditProduct.jsx
│   ├── Login.jsx
|   ├── PageNotFound.jsx
│   ├── Productlist.jsx
│   ├── Products.jsx
├── styles/
|   ├── CompNav.css
│   ├── CreateProduct.css
│   ├── EditProduct.css
│   ├── Login.css
│   ├── Navbar.css
│   ├── Productlist.css
│   ├── Products.css
├──utils
|    ├── Protected.jsx
|


## 📄 License

This project is licensed under the MIT LICENSE - see the [MIT License](./LICENSE) for details.
## Contact
Sudhir Chaudhary - csudhir302@gmail.com