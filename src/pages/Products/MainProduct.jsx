import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase_config";
import { useAuthState } from "react-firebase-hooks/auth";
import { addItem } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainProduct = ({
  side,
  allCategories,
  items,
  filterItems,
  searchItems,
}) => {
  const dispatch = useDispatch();

  const [user] = useAuthState(auth);

  const addToCart = (product) => {
    dispatch(addItem(product));
    toast.success("Item added to cart", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };



  return (
    <div
      className={
        side
          ? "rightProductContainer rightProductActive"
          : "rightProductContainer"
      }
    >
      <div className="productTitle">
        <h1>
          Good Morning <span>{user?.displayName}</span>{" "}
        </h1>
        <p>What delicious meal are you craving today?</p>

        <div className="searchContainer">
          <input
            className="searchInput"
            type="text"
            placeholder="search items"
        
            onChange={searchItems}
          />
          {items.length === 0 && <p>no items found!</p>}
        </div>

        <div className="productCategoryButtons">
          {allCategories.map((btn, index) => {
            return (
              <button
                type="button"
                className="categoryBtn"
                key={index}
                onClick={() => filterItems(btn)}
              >
                {btn}
              </button>
            );
          })}
        </div>
      </div>
      <div className="productItems">
        {items.map((data) => {
          const { id, name, imageUrl, description, price } = data;
          return (
            <div className={side ? "productItem side" : "productItem"} key={id}>
              <img className="productImg" src={imageUrl} alt={name} />
              <h3>{name}</h3>
              <p className="productDes">{description.slice(0, 45)}...</p>
              <div className="priceAndButton">
                <p>${price}</p>
                <Link to={`/singleproduct/${id}`}>
                  <button className="addToCart" onClick={() => addToCart(data)}>
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainProduct;
