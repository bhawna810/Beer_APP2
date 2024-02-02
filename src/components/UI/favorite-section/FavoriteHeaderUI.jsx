import React from "react";

import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { favoriteSliceUiActions } from "../../../store/favorite-page/favoriteUISlice";

import "../../../styles/favoriteHeaderUI.css";
import FavoriteItem from "./FavoriteItem";

const FavoriteHeaderUI = () => {

  const dispatch = useDispatch();
  const favroiteProducts = useSelector((state) => state.favorite.favoriteItems);
  const totalQuantity = useSelector((state) => state.favorite.favoriteTotalQuantity)

  const togglePage = () => {
    dispatch(favoriteSliceUiActions.toggle());
  };
  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={togglePage}>
            <i class="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart__item-list">
        {favroiteProducts.length === 0 ? (
            <h6 className="text-center mt-5">No item added to the Favorite Page</h6>
          ) : (
            favroiteProducts.map((item, index) => (
              <FavoriteItem item={item} key={index} />
            ))
          )} 
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Total Item <span>{totalQuantity}</span>
          </h6>
          <button>
            <Link to="/favorite" onClick={togglePage}>
              Favorite Page
            </Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default FavoriteHeaderUI;
