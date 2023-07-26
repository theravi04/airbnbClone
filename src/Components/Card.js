import React from "react";

export const Card = (props) => {
    console.log(props);
  return (
    <div className="card">
      <img src={`Images/${props.img}`} alt="img" className="card-img" />
      <div className="card-stats">

        <img src="Images/Star.png" alt="img" className="card-star" />

        <span>{props.rating}</span>

        <span className="grey">({props.reviewCount}) ~ </span>

        <span className="grey">{props.location}</span>

      </div>

      <p className="card-title">{props.title}</p>

      <p>
        <span className="bold">From ${props.price}</span>/Per Person
      </p>
    </div>
  );
};

export default Card;
