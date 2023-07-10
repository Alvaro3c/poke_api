import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, url, id, image, typeOne, typeTwo }) => {
  const link = id ? `/pokemon/${id}` : `/pokemon/${url.split('/').at(-2)}`;
  return <div className="card">
    <Link to={link}><h4>{name}</h4></Link>
  </div>;
};

export default Card;
