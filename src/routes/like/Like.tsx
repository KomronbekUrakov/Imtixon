// import { useSelector, useDispatch } from "react-redux";
// import { addProduct } from "../../redux/cartSlice";
// import { likedProduct } from "../../redux/likeSlice";
// import { RootState } from "../../redux/store"; // Import RootState
// import "./Like.css";

// type Product = {
//   id: number;
//   api_featured_image: string;
//   name: string;
//   price_sign: string;
//   price: string;
//   liked?: boolean;
// };

// const Like = () => {
//   const dispatch = useDispatch();
//   const likedata = useSelector((state: RootState) => state.like.likes); // Explicitly define the state type

//   const addToCart = (product: Product) => {
//     dispatch(addProduct(product));
//   };

//   const toggleLikeProduct = (product: Product) => {
//     dispatch(likedProduct(product));
//   };

//   return (
//     <div className="container">
//       {likedata.length === 0 ? (
//         <p>You haven't liked any products yet.</p>
//       ) : (
//         <div className="liked-product">
//           {likedata.map((product: Product) => (
//             <div className="liked-products-card" key={product.id}>
//               <img
//                 src={product.api_featured_image}
//                 onError={(e) =>
//                   (e.currentTarget.src =
//                     "https://qph.cf2.quoracdn.net/main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq")
//                 }
//                 alt={product.name}
//                 width={"290px"}
//               />
//               <div className="liked-products-card-content">
//                 <h3 className="liked-products-card-title">{product.name}</h3>
//                 <div className="liked-products-card-action-bar">
//                   <span className="liked-products-card-price">
//                     {product.price_sign}
//                     {product.price}
//                   </span>
//                   <button onClick={() => toggleLikeProduct(product)}>
//                     {product.liked ? "Unlike" : "Like"}
//                   </button>
//                   <button onClick={() => addToCart(product)}>
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Like;
