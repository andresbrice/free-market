import "./App.css";
import "react-toastify/dist/ReactToastify.css";

// COMPONENTS
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

// CONTEXT
import { AppRoutesProvider } from "../../context/AppRoutesContext.js";
import { CartProvider } from "../../context/CartContext";

// REACT ROUTER
import { BrowserRouter } from "react-router-dom";

// REACT TOASTIFY
import { ToastContainer } from "react-toastify";

// FIREBASE
import { getProducts } from "../../utils/firebase";

function App() {
  // loadDB();
  getProducts();
  return (
    <BrowserRouter>
      <AppRoutesProvider>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <Main />
            <Footer />
          </div>
        </CartProvider>
      </AppRoutesProvider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
