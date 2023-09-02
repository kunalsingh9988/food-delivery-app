import React from "react";
import "./Cart.css";
import { MdClose } from "react-icons/md";
import { useSelector } from "react-redux";

const Cart = ({ cart, setCart }) => {
  const cartProducts = useSelector((state) => state.cart);

  console.log(cartProducts);

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
        {cartProducts.length === 0 && <h4 className="emptyAlert">Your Cart is Empty!</h4>}
        {cartProducts.map((product) => {
          return (
            <div className="singleCartProduct" key={product.id}>
              <div className="leftCartItem">
                <img src={product.imageUrl} alt="" />
                <div className="itemName">
                  <p>{product.name}</p>
                  <button>Remove</button>
                </div>
              </div>
              <div className="rightCartItem">
                <p>0</p>
                <p>${product.price}</p>
                <p>${product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
