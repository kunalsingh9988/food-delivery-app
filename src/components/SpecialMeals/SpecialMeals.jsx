import React from "react";
import "./SpecialMeals.css";
import { FoodData } from "../../FoodData";
import { Link } from "react-router-dom";
const SpecialMeals = () => {


  return (
    <div id="specialMeals">
      <div className="firstMeal">
        <h3>Special Meals of the Day!</h3>
        <p>
          Check our specials of the day and get discounts on all our meals and
          swift delivery to what ever location within Ilorin.
        </p>
      </div>
      <div className="secondMeal">
        {FoodData.map((data) => {
          if (data.isSpecial) {
          
            return (
              <div className="specialMealContainer" key={data.id}>
                <img className="specialImg" src={data.imageUrl} alt={data.name} />
                <b>{data.name}</b>
                <p>{data.description.slice(0,50)}...</p>
                <Link to={`/singleproduct/${data.id}`}>
                <button>Read More!</button>
                </Link>
              </div>
            )
          }
          return <div key={data.id}></div>
        }
        )}
      </div>
    </div>
  );
};

export default SpecialMeals;
