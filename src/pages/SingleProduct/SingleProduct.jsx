import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FoodData } from '../../FoodData';
import './SingleProduct.css';
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'
import {BsArrowLeft} from 'react-icons/bs'


const SingleProduct = () => {
  const { id } = useParams();
  const selectedItem = FoodData.find(item => item.id === parseInt(id));

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  const { name, imageUrl, description, price } = selectedItem;

  return (
    <div id="singlePage">
        <Link to="/products" className='backButtonLink'>
        <button className='backButton'> <BsArrowLeft/> </button>
        </Link>
        <div className="singlePageContainer">
            <img src={imageUrl} alt={name} />
            <h1>{name}</h1>
            <p>{description}</p>
            <b>Price : <span>${price}</span>  </b>
        </div>
            <div className='singlePrice'>
               
                <div className='incdec'>
                    <button><AiOutlineMinus/> </button>
                    <p>0</p>
                    <button><AiOutlinePlus/> </button>
                </div>

                <button className='singleCartButton'>Add to Cart</button>
            </div>
  
    </div>
  );
};

export default SingleProduct;
