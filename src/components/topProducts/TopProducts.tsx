import { useDispatch, useSelector } from "react-redux";
import { likedProduct, removeLikedProduct } from "../../redux/likeSlice";
import { addToCart, removeFromCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../redux";
import { RootState, Product } from "../../types/Type";
import { useState, useEffect } from "react";
import "./TopProducts.css";

const TopProducts = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  const likedProducts = useSelector(
    (state: RootState) => state.like.likedProducts
  );
  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );

  const { data = [] } = useGetProductsQuery(undefined);

  useEffect(() => {
    if (data.length > 0) {
      setProducts(data.slice(80, 92));
      setIsLoading(false);
    }
  }, [data]);

  const handleLikeProduct = (product: Product) => {
    if (isLiked(product.id)) {
      dispatch(removeLikedProduct(product.id));
    } else {
      dispatch(likedProduct(product));
    }
  };

  const handleCartProduct = (product: Product) => {
    console.log("Adding/Removing from cart:", product);
    if (isInCart(product.id)) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(addToCart(product));
    }
  };

  const isLiked = (productId: number) =>
    likedProducts.some((product: Product) => product.id === productId);
  const isInCart = (productId: number) =>
    cartProducts.some((product: Product) => product.id === productId);

  return (
    <div className="top-products">
      <div className="container">
        <h1 className="top-products-title">FLYING OFF THE SHELVES</h1>
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          <div className="top-products-content">
            {products.map((product: Product) => (
              <div className="top-products-card" key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.api_featured_image}
                    onError={(e) =>
                      ((e.target as HTMLImageElement).src =
                        "fallback-image-url")
                    }
                    alt={product.name}
                    width={290}
                  />
                </Link>
                <div className="top-products-card-content">
                  <h3 className="top-products-card-title">{product.name}</h3>
                  <span className="top-products-card-price">
                    {product.price_sign}
                    {product.price}
                  </span>
                  <div className="top-products-card-action-bar">
                    <button onClick={() => handleLikeProduct(product)}>
                      <svg
                        height="36"
                        width="36"
                        fill={isLiked(product.id) ? "red" : "none"}
                        stroke="black"
                      >
                        <svg
                          height="36"
                          viewBox="0 0 36 36"
                          width="36"
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-wishlist"
                        >
                          <path
                            fill={isLiked(product.id) ? "red" : "none"}
                            stroke="black"
                            d="M25.9683552 9.21882515c3.2608181.80024215 5.5472476 3.70843205 5.5302621 7.02070785.0167706.8151169-.1192457 1.6262091-.4011081 2.3920749l-.0747211.2030295-12.8022428 9.8639172-12.75640108-9.9236157-.07145807-.2171752c-.24888993-.7564256-.38125398-1.5457388-.39268615-2.3532254.00533124-3.3241785 2.30112936-6.21297878 5.5578425-6.99897615 2.9473775-.7113402 5.994845.46537879 7.693908 2.88167155 1.7058655-2.42023178 4.7647874-3.59281834 7.7166047-2.86840855z"
                          ></path>
                        </svg>
                      </svg>
                    </button>
                    <button onClick={() => handleCartProduct(product)}>
                     
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill={isInCart(product.id) ? "green" : "black"}
                      >
                        <g>
                          <g>
                            <path d="M22.5 45C34.926 45 45 34.927 45 22.5S34.926 0 22.5 0 0 10.073 0 22.5 10.074 45 22.5 45z"></path>
                          </g>
                          <g>
                            <path
                              fill="#fff"
                              d="M23.389 13.833c-.859 0-1.556.697-1.556 1.556v1.944h3.111V15.39c0-.86-.696-1.556-1.555-1.556zm0-1.166a2.722 2.722 0 0 1 2.722 2.722v1.944h3.111v6.223l.346 1.555h-1.195l-.317-1.427V18.5H26.11v1.167h-1.167V18.5h-3.11v1.167h-1.167V18.5h-1.945v5.184l-1.268 5.705h7.88v1.167H16l1.556-7v-6.223h3.11V15.39a2.723 2.723 0 0 1 2.723-2.722zm7.389 14V29h2.333v1.556h-2.333v2.333h-1.556v-2.333H26.89V29h2.333v-2.333z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TopProducts;
