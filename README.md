# Free Market

Free Market is an e-commerce platform developed using technologies such as React and Firebase, among others.

The application allows users to view a list of gastronomic products on the main screen, filter them by category, and view the details of selected products. This includes the ability to increase or decrease the quantity of products according to their stock availability

Users can add products to their shopping cart and then fill out a checkout form that is fully validated before completing the transaction.

## Table of Contents

- [Demo](#demo)
- [Installation and Setup](#installation-and-setup)
- [Features](#features)
- [Technologies](#technologies)
- [UI demo video](#video)
- [Contributing](#contributing)

## Demo

A live demo of the application can be found at [https://free-market-ecommerce.vercel.app/](https://free-market-ecommerce.vercel.app/)

## Installation and Setup

1.  Clone the repository:
    `git clone https://github.com/andresbrice/free-market.git`

2.  Navigate to the project directory:
    `cd free-market`
3.  Install the required dependencies:
    `npm install`

4.  Create a Firebase project and set the environment variables by editing the firebase.js file in the /src/utils directory with the following variables:

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

## Features

The application includes the following features:

- Browse products by category
- Add items to cart
- Checkout
- Real-time product inventory updates
- Responsive design

## Technologies

The application was built with the following technologies:

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Firebase](https://firebase.google.com/)
- [Tailwind](https://tailwindcss.com/)
- [Toastify](https://fkhadra.github.io/react-toastify/)
- [Sweet Alert](https://sweetalert2.github.io/)

## UI Demo Video

<div style="position:relative; width:100%; padding-bottom:56.25%;">
  <video style="position:absolute; top:0; left:0; width:100%; height:100%;" controls muted>
    <source src="https://firebasestorage.googleapis.com/v0/b/free-market-929b7.appspot.com/o/freemarket.mp4?alt=media&token=6542fd01-0052-4d2f-98ad-6913bac9c5c3" type="video/mp4">
  </video>
</div>

## Contributing

If you would like to contribute to the project, you can fork the repository, make your changes, and submit a pull request. Please make sure to follow the coding conventions and best practices used in the project, and write clear commit messages and documentation.
