import React from "react";
import { Link } from "react-router-dom";
const MainProduct = ({side,allCategories,items,filterItems}) => {
  return (
    <div
      className={
        side
          ? "rightProductContainer rightProductActive"
          : "rightProductContainer"
      }
    >
      <div className="productTitle">
        <h1>Good Morning, [Account name]</h1>
        <p>What delicious meal are you craving today?</p>
        <b>Choose With Category</b>
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
            <div className={side?'productItem side':'productItem'} key={id}>
              <img className="productImg" src={imageUrl} alt={name} />
              <h3>{name}</h3>
              <p className="productDes">{description.slice(0, 45)}...</p>
              <div className="priceAndButton">
                <p>${price}</p>
                <Link to={`/singleproduct/${id}`}>
                  <button className="addToCart">Order Now</button>
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
