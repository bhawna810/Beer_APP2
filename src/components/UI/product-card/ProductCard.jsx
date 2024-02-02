import React from "react";

import "../../../styles/product-card.css";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";


const ProductCard = (props) => {
  const { id, name, image_url, ibu } = props.item;


  const addToCart = () => {
    
  };

  return (
    <div className="product__item">
      <div className="product__img">
      <Link to={`/beers/${id}`}>
        {<img src="" alt="product-img" className="w-50" />}
        </Link>
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/beers/${id}`}>{name}</Link>
        </h5>
        <div className=" d-flex align-items-center justify-content-between ">
          <span className="product__price">₹{ibu}</span>
          <button className="addTOCart__btn" onClick={addToCart}>
            Add to Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
