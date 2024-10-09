import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "../../redux/cartSlice";
import { RootState, Product } from "../../types/Type";
import { Link } from "react-router-dom";
import "./Cart.css";
import EmptyCart from "../../assets/empty-cart.png"

const CartPage = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );

  const handleRemoveProduct = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container">
      <div className="cart-page">
        <h1>Your Cart</h1>
        {cartProducts.length === 0 ? (
          <img src={EmptyCart} alt="" />
        ) : (
          <div className="cart-product">
            {cartProducts.map((product: Product) => (
              <div className="cart-item" key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <img
                    width={290}
                    src={product.api_featured_image}
                    alt={product.name}
                  />
                </Link>
                <h3 className="cart-products-card-title">{product.name}</h3>
                <div className="cart-products-card-action-bar">
                  <p className="cart-products-card-price">
                    {product.price_sign}
                    {product.price}
                  </p>
                  <button
                    className="RemoveProduct"
                    onClick={() => handleRemoveProduct(product.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="Removeicon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.146 8.146a.5.5 0 0 1 .708 0L8 9.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 10l1.147 1.146a.5.5 0 0 1-.708.708L8 10.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 10 6.146 8.854a.5.5 0 0 1 0-.708"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {cartProducts.length > 0 && (
          <button className="RemoveProduct1" onClick={handleClearCart}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="RemoveIcon1"
              viewBox="0 0 16 16"
            >
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7.354 5.646 8.5 6.793l1.146-1.147a.5.5 0 0 1 .708.708L9.207 7.5l1.147 1.146a.5.5 0 0 1-.708.708L8.5 8.207 7.354 9.354a.5.5 0 1 1-.708-.708L7.793 7.5 6.646 6.354a.5.5 0 1 1 .708-.708" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default CartPage;
