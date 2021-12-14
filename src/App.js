import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./components/About/About";
import CartContainer from "./components/Cart/CartContainer/CartContainer";
import { CartProvider } from "./context/CartContext";
import Checkout from "./components/Checkout/Checkout";
import Contact from "./components/Contact/Contact/Contact";
import Footer from "./components/GlobalComponents/Footer/Footer";
import Help from "./components/Help/Help/Help";
import ItemDetailContainer from "./components/Product/ItemDetailContainer/ItemDetailContainer";
import Main from "./components/Index/Main/Main";
import NavBar from "./components/GlobalComponents/NavBar/NavBar";

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<Main />}>
                        <Route path="category/:category" element={<Main />} />
                    </Route>
                    <Route path="/cart" element={<CartContainer />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/product/:id" element={<ItemDetailContainer />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/help" element={<Help />} />
                </Routes>
                <div className="expanding-div"></div>
                <Footer />
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
