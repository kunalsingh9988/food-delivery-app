import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./SingleProduct.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsArrowLeft, BsFillCartFill } from "react-icons/bs";
import Cart from "../../components/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { addItem, incrementItem, decrementItem } from "../../redux/cartSlice";
import { ToastContainer } from "react-toastify";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { items, singleCart } = useSelector((state) => state.cart);
  const [cart, setCart] = useState(false);
  const { id } = useParams();
  const selectedItem = items.find((item) => item.id === parseInt(id));
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    // Find the item's quantity in the cart when the component mounts
    const cartItem = singleCart.find((item) => item.id === selectedItem.id);
    if (cartItem) {
      setQuantity(cartItem.quantity);
    } else {
      setQuantity(0);
    }
  }, [singleCart, selectedItem]);

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  const { name, imageUrl, description, price } = selectedItem;

  const addToCart = (product) => {
    dispatch(addItem(product));
    setCart(!cart);
  };

    // Increment the quantity when the "plus" button is clicked
    const incrementQuantity = () => {
      setQuantity(quantity + 1);
      dispatch(incrementItem(selectedItem.id));
    };
  

  return (
    <div id="singlePage">
      <Link to="/products" className="backButtonLink">
        <button className="backButton">
          <BsArrowLeft />
        </button>
      </Link>
      <button className="cartBtn" onClick={() => setCart(!cart)}>
        <div className="cartIconValue">
          {quantity}
        </div>
        <BsFillCartFill className="cartIcon" />
      </button>
      <div className={cart ? "singlePageContainer singleBg" : "singlePageContainer "}>
        <img src={imageUrl} alt={name} />
        <h1>{name}</h1>
        <p>{description}</p>
        <b>
          Price : <span>${price}</span>
        </b>
      </div>
      <div className={cart ? "singlePrice singleBg" : "singlePrice "}>
        <div className="incdec">
          <button onClick={() => dispatch(decrementItem(selectedItem.id))}>
            <AiOutlineMinus />
          </button>
          <p>{quantity}</p>
          <button onClick={incrementQuantity}>
            <AiOutlinePlus />
          </button>
        </div>
        <button className="singleCartButton" onClick={() => addToCart(selectedItem)}>
          Add to Cart
        </button>
      </div>
      <ToastContainer/>
      <Cart cart={cart} setCart={setCart}/>
    </div>
  );
};

export default SingleProduct;
