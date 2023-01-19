import React from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
import "./Inpform.css";

function Inpform({ itemadder, init_item, visfalse,isadclickfalse }) {
  const [item_name, setitem_name] = useState(init_item.item_name);
  const [item_quantity, setitem_quantity] = useState(init_item.item_quantity);
  const [item_unit, setitem_unit] = useState(init_item.item_unit);
  const [item_weight, setitem_weight] = useState(init_item.item_weight);
  const submitHandler = (e) => {
    e.preventDefault();
    const n_id =
      init_item.id === "$"
        ? Math.floor(Math.random() * 1000 + 1)
        : init_item.id;
    try {
      itemadder({
        id: n_id,
        item_name,
        item_quantity,
        item_unit,
        item_weight,
      });
    } catch (err) {
      toast.error(err.message, {
        position: "top-center",
        containerId: "ERROR",
      });
      console.log(err.message);
      isadclickfalse();
      return;
    }
    toast.success("success", { position: "top-center" });
    console.log("Success");
    setitem_name("");
    setitem_quantity("");
    setitem_unit("");
    setitem_weight("");
    isadclickfalse();
    return;
  };
  const item_nameSubmitHandler = (e) => {
    setitem_name(e.target.value);
  };
  const item_quantitySubmitHandler = (e) => {
    setitem_quantity(e.target.value);
  };
  const item_unitSubmitHandler = (e) => {
    setitem_unit(e.target.value);
  };
  const item_weightSubmitHandler = (e) => {
    setitem_weight(e.target.value);
  };
  const cancelHandler = (e) => {
    e.preventDefault();
    setitem_name("");
    setitem_quantity("");
    setitem_unit("");
    setitem_weight("");
    visfalse();
    isadclickfalse();
    return;
  };
  const resetHandler = (e) => {
    e.preventDefault();
    setitem_name("");
    setitem_quantity("");
    setitem_unit("");
    setitem_weight("");
    return;
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="inp1">Item Name</label>
      <br />
      <input
        id="inp1"
        type="name"
        value={item_name}
        onChange={item_nameSubmitHandler}
      />
      <br />
      <label htmlFor="inp2">Quantity</label>
      <br />
      <input
        id="inp2"
        value={item_quantity}
        onChange={item_quantitySubmitHandler}
      />
      <br />
      <label htmlFor="inp3">Unit</label>
      <br />
      <input id="inp3" value={item_unit} onChange={item_unitSubmitHandler} />
      <br />
      <label htmlFor="inp4">Weight</label>
      <br />
      <input
        id="inp4"
        value={item_weight}
        onChange={item_weightSubmitHandler}
      />
      <span style={{margin: "0px 0px 0px -26px"}}>Kg</span>
      <div className="butt_cont">
        <button onClick={cancelHandler} className="butt">
          CANCEL
        </button>
        <button onClick={resetHandler} className="butt">
          RESET
        </button>
        <div>
          <button type="submit" className="butt buttsave">
            SAVE +
          </button>
          <ToastContainer enableMultiContainer containerId={"ERROR"} />
        </div>
      </div>
    </form>
  );
}
export default Inpform;
