import React from "react";
import "./Orders.css";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {BsArrowLeft} from 'react-icons/bs';
import { removeToOrder } from "../../redux/cartSlice";

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.cart.orderList);

  return (
    <div id="orders">
      {orders.length === 0 ? (
        <>
          <h1>There are no Orders </h1>
          <Link className="buyItemLink" to="/products">Buy Items</Link>
        </>
      ) : (
        <>
          <h1>Your Orders</h1>
        </>
      )}
      <Link className="backLink" to="/products">
      <BsArrowLeft className="backIcon"/>
      </Link>
      <div className="orderContainer">
        {orders.map((order) => {
          const { id, name, imageUrl, price, quantity } = order;
          let randomNumber = Math.floor(Math.random() * 11) + 10;
          return (
            <div className="orderItem" key={id}>
              <div className="orderLeft">
                <img src={imageUrl} alt="" />
              </div>
              <div className="orderRight">
                <h3>{name} </h3>
                <p>Price : ${price} </p>
                <p>Quo : {quantity}</p>
                <div className="deliveryBtns">
                  <div className="delivery">  {randomNumber} mins</div>
                  <button onClick={()=> dispatch(removeToOrder(id))}>Cancel</button>
                
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
