// import { useSelector, useDispatch } from "react-redux";
// import { removeCart } from "../../redux/cartSlice";
// import { RootState } from "../../redux/store"; 
// import "./Cart.css";

// interface Product {
//   id: number;
//   api_featured_image: string;
//   name: string;
//   price_sign: string;
//   price: number;
// }

// const Cart = () => {
//   const dispatch = useDispatch();
  
  
//   const cartdata = useSelector((state: RootState) => state.cart.cart);

//   const removeFromCart = (id: number) => {
//     dispatch(removeCart(id));
//   };

//   return (
//     <div className="container">
//       {cartdata.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <div className="cart-product">
//           {cartdata.map((product: Product) => ( 
//             <div className="cart-products-card" key={product.id}>
//               <img
//                 src={product.api_featured_image}
//                 onError={(e) =>
//                   (e.currentTarget.src =
//                     "https://qph.cf2.quoracdn.net/main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq")
//                 }
//                 alt={product.name}
//                 width={"290px"}
//               />
//               <div className="cart-products-card-content">
//                 <h3 className="cart-products-card-title">{product.name}</h3>
//                 <div className="cart-products-card-action-bar">
//                   <span className="cart-products-card-price">
//                     {product.price_sign}
//                     {product.price}
//                   </span>
//                   <button onClick={() => removeFromCart(product.id)}>
//                     Remove from Cart
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

// export default Cart;
