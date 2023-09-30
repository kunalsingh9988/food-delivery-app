//Cart.jsx
import React, { useEffect } from "react";
import "./Cart.css";
import { MdClose } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, totalItem } from "../../redux/cartSlice";

const Cart = ({ cart, setCart }) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.singleCart);
  const totalCartPrice = useSelector((state) => state.cart.totalPrice); // New selector

  const removeToCart = (id) => {
    dispatch(removeItem(id));
  };
  useEffect(() => {
    dispatch(totalItem());
  }, [cartProducts, dispatch]);

  return (
    <div className={cart ? "cart" : "cartActive"}>
      <button className="removeBtn" onClick={() => setCart(!cart)}>
        <MdClose />
      </button>

      <div className="cartProducts">
        <h1>Your Cart</h1>
        <div className="singleCartHeading">
          <p>Item</p>
          <div className="rightHeading">
            <p>Qty</p>
            <p>Unit Price</p>
            <p>Sub-total</p>
          </div>
        </div>
        {cartProducts.length === 0 && (
          <h4 className="emptyAlert">Your Cart is Empty!</h4>
        )}
        {cartProducts.map((product) => {
          return (
            <div className="singleCartProduct" key={product.id}>
              <div className="leftCartItem">
                <img src={product.imageUrl} alt="" />
                <div className="itemName">
                  <p>{product.name}</p>
                  <button onClick={() => removeToCart(product.id)}>
                    Remove
                  </button>
                </div>
              </div>
              <div className="rightCartItem">
                <p>{product.quantity}</p>

                <p>${product.price}</p>
                <p>${product.quantity * product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
      {cartProducts.length > 0 && (
        <div className="checkout">
          <p>
            total :<b> ${totalCartPrice.toFixed(2)}</b>{" "}
          </p>
          <button className="checkoutBtn">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
