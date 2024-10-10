import Header from "./components/header/Header";
import Homepage from "./routes/homepage/Homepage";
import Powder from "./routes/powder/Powder";
import Cream from "./routes/cream/Cream";
import Products from "./routes/products/Products";
import SingleProduct from "./routes/singleProduct/singleProduct";
import Pencil from "./routes/pencil/Pencil";
import Palette from "./routes/palette/Palettepage";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import LikedProducts from "./routes/like/LikedProducts"
import CartPage from "./routes/cart/CartPage";
import SearchResults from "./routes/search/SearchResults";
function App() {
  return (
    <>
        <Header />
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/wishlist" element={<LikedProducts />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/palette" element={<Palette />} />
        <Route path="/pencil" element={<Pencil />} />
        <Route path="/cream" element={<Cream />} />
        <Route path="/powder" element={<Powder />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/search" element={<SearchResults  />} />
      </Routes>
        <Footer />
    </>
  );
}

export default App;
