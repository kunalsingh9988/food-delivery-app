import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FoodData } from "../../FoodData";
import "./SingleProduct.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsArrowLeft, BsFillCartFill } from "react-icons/bs";
import Cart from "../../components/Cart/Cart";
import { useDispatch } from "react-redux";
import { add } from "../../redux/cartSlice";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const [cart, setCart] = useState(false);
  const { id } = useParams();
  const selectedItem = FoodData.find((item) => item.id === parseInt(id));

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  const { name, imageUrl, description, price } = selectedItem;

  const addToCart = (product) => {
    setCart(!cart);
    dispatch(add(product));
  };

  return (
    <div id="singlePage">
      <Link to="/products" className="backButtonLink">
        <button className="backButton">
          <BsArrowLeft />
        </button>
      </Link>
      <button className="cartBtn" onClick={() => setCart(!cart)}>
        <BsFillCartFill className="cartIcon"/>
      
      </button>
      <div
        className={
          cart ? "singlePageContainer singleBg" : "singlePageContainer "
        }
      >
        <img src={imageUrl} alt={name} />
        <h1>{name}</h1>
        <p>{description}</p>
        <b>
          Price : <span>${price}</span>
        </b>
      </div>
      <div className={cart ? "singlePrice singleBg" : "singlePrice "}>
        <div className="incdec">
          <button>
            <AiOutlineMinus />
          </button>
          <p>0</p>
          <button>
            <AiOutlinePlus />
          </button>
        </div>

        <button
          className="singleCartButton"
          onClick={() => addToCart(selectedItem)}
        >
          Add to Cart
        </button>
      </div>
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
};

export default SingleProduct;
