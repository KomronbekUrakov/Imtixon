import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { likedProduct, removeLikedProduct } from "../../redux/likeSlice";
import { addToCart } from "../../redux/cartSlice";
import { RootState } from "../../redux/store"; 
import { Product } from "../../types/Type"; 
import "./SingleProduct.css";

const SingleProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const likedProducts = useSelector((state: RootState) => state.like.likedProducts);
  const isLiked = likedProducts.some((likedProduct: Product) => likedProduct.id === Number(id));

  useEffect(() => {
    // Fetch the product details
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  const handleLikeProduct = () => {
    if (product) {
      if (isLiked) {
        dispatch(removeLikedProduct(product.id)); 
      } else {
        dispatch(likedProduct(product)); 
      }
    }
  };

  if (isLoading) {
    return <div className="loader"></div>;
  }

  if (!product) {
    return <div>No product found.</div>;
  }

  return (
    <div className="single-product">
      <div className="container">
        <div className="single-product-wrapper">
          <div className="single-product-block">
            <img
              width={"500px"}
              height={"500px"}
              src={product.api_featured_image}
              alt={product.name}
              onError={(e) => (e.currentTarget.src = "https://qph.cf2.quoracdn.net/main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq")}
            />
          </div>
          <div className="single-product-block">
            <h1 className="single-product-title">{product.name}</h1>
            <p className="single-product-descr">{product.description}</p>
            <span className="single-product-price">
              {product.price_sign}
              {product.price}
            </span>
            <div className="single-product-action-bar">
              <button className="single-product-add-btn" onClick={handleAddToCart}>
                Add to cart
              </button>
              <button className="single-product-like-btn" onClick={handleLikeProduct}>
                {isLiked ? (
                  <svg
                    height="36"
                    viewBox="0 0 36 36"
                    width="36"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-wishlist"
                  >
                    <path
                      fill="red"
                      stroke="black"
                      d="M25.9683552 9.21882515c3.2608181.80024215 5.5472476 3.70843205 5.5302621 7.02070785.0167706.8151169-.1192457 1.6262091-.4011081 2.3920749l-.0747211.2030295-12.8022428 9.8639172-12.75640108-9.9236157-.07145807-.2171752c-.24888993-.7564256-.38125398-1.5457388-.39268615-2.3532254.00533124-3.3241785 2.30112936-6.21297878 5.5578425-6.99897615 2.9473775-.7113402 5.994845.46537879 7.693908 2.88167155 1.7058655-2.42023178 4.7647874-3.59281834 7.7166047-2.86840855z"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    height="36"
                    viewBox="0 0 36 36"
                    width="36"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-wishlist"
                  >
                    <path
                      fill="none"
                      stroke="black"
                      d="M25.9683552 9.21882515c3.2608181.80024215 5.5472476 3.70843205 5.5302621 7.02070785.0167706.8151169-.1192457 1.6262091-.4011081 2.3920749l-.0747211.2030295-12.8022428 9.8639172-12.75640108-9.9236157-.07145807-.2171752c-.24888993-.7564256-.38125398-1.5457388-.39268615-2.3532254.00533124-3.3241785 2.30112936-6.21297878 5.5578425-6.99897615 2.9473775-.7113402 5.994845.46537879 7.693908 2.88167155 1.7058655-2.42023178 4.7647874-3.59281834 7.7166047-2.86840855z"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
