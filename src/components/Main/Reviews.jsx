import React from "react";
import Title from "./Title";

import newMessageIcon from "./../../assets/images/new-message-icon.png";

import "./main.css";

export default function Reviews({ ourReviews }) {
  const renderReviews = ourReviews.map((item, index) => (
    <div key={index} className="reviews__review">
      <div className="reviews__image">
        <img src={newMessageIcon} alt="newMessageIcon" />
      </div>
      <div className="reviews__screenshot">
        <img
          src={require(`./../../assets/images/reviews/${item}`)}
          alt={item}
        />
      </div>
    </div>
  ));

  return (
    <>
      <Title title="Отзывы о нашем сайте" />
      <div className="reviews">
        <div className="reviews__body">
          {renderReviews}
        </div>
      </div>
    </>
  );
}
