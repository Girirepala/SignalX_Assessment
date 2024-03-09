import React from "react";

const Productcard = (props) => {
  return (
    <div className="card mydiv" style={{ width: "18" + "rem" }}>
      <img
        src={props.data.image}
        className="card-img-top"
        alt="ProductImage"
        width={50}
      />
      <div className="card-body">
        <h5 className="card-title">{props.data.title}</h5>
        <p>Price:{props.data.price}</p>
      </div>
    </div>
  );
};

export default Productcard;
