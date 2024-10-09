import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeLikedProduct } from "../../redux/likeSlice";
import { Link } from "react-router-dom";
import "./Like.css";
import { Product, RootState } from "../../types/Type";

const LikedProducts: React.FC = () => {
  const dispatch = useDispatch();
  const Like = useSelector((state: RootState) => state.like.likedProducts);

  const handleRemoveLikedProduct = (productId: number) => {
    dispatch(removeLikedProduct(productId));
  };

  return (
    <div className="container">
      <h1 className="liked-products-title">Your Liked Products</h1>
      <div className="liked-products">
        {Like.length === 0 ? (
          <p>No liked products yet!</p>
        ) : (
          <div className="liked-products-content">
            {Like.map((product: Product) => (
              <div className="liked-products-card" key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.api_featured_image}
                    alt={product.name}
                    width={290}
                  />
                </Link>
                <div className="liked-products-card-content">
                  <h3 className="liked-products-card-title">{product.name}</h3>
                  <div className="MiniWrap">
                    <span className="liked-products-card-price">
                      {product.price_sign}
                      {product.price}
                    </span>
                    <button
                      className="RemoveBtn"
                      onClick={() => handleRemoveLikedProduct(product.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-heartbreak-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.931.586 7 3l1.5 4-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586M7.358.77 5.5 3 7 7l-1.5 3 1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77" />
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

export default LikedProducts;
