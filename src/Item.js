import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
import "./Item.css";
function Item({
  id,
  item_name,
  item_quantity,
  item_unit,
  item_weight,
}) {
  return (
    <>
      <div className="item_id cs">{id}</div>
      <div className="item_name cs">{item_name}</div>
      <div className="item_quantity cs">{item_quantity}</div>
      <div className="item_unit cs">{item_unit}</div>
      <div className="item_weight cs">{item_weight}Kg</div>
    </>
  );
}

export default Item;
