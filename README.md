# Free Market

Free Market is a e-commerce web application built with React and Firebase. Users can browse products by category, add items to their cart, and checkout. The application also includes a responsive design and real-time product inventory updates.

## Table of Contents

- [Demo](#demo)
- [Technologies](#technologies)
- [Features](#features)
- [Installation and Setup](#installation-and-setup)
- [Contributing](#contributing)

## Demo

A live demo of the application can be found at [https://free-market-ecommerce.vercel.app/](https://free-market-ecommerce.vercel.app/)

## Technologies

The application was built with the following technologies:

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Firebase](https://firebase.google.com/)
- [Tailwind](https://tailwindcss.com/)
- [Toastify](https://fkhadra.github.io/react-toastify/)
- [Sweet Alert](https://sweetalert2.github.io/)

## Features

The application includes the following features:

- Browse products by category
- Add items to cart
- Checkout
- Real-time product inventory updates
- Responsive design

## Installation and Setup

1.  Clone the repository:
    `git clone https://github.com/andresbrice/free-market.git`
2.  Navigate to the project directory:
    `cd free-market`
3.  Install the required dependencies:
    `npm install`

4.  Create a Firebase project and configure the environment variables by creating a `.env` file in the root directory with the following variables:

    ```REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
    REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
    ```

5.  Start the development server:
    `npm run start`
    The application can be accessed at [http://localhost:3000](http://localhost:3000)

## Contributing

If you would like to contribute to the project, you can fork the repository, make your changes, and submit a pull request. Please make sure to follow the coding conventions and best practices used in the project, and write clear commit messages and documentation.
