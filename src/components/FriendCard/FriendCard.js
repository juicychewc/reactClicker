import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card col s3" onClick={() => props.selectOption(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default FriendCard;