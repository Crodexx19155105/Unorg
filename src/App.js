import { useEffect, useState } from "react";
import "./App.css";
import ItemList from "./ItemList";
import Modal from "./Modal";
import React from "react";
import Navbar from "./Navbar";
import RefreshIcon from "./Images/Refresh Icon.svg";
import Backdrop from "./Modals/Backdrop";
import ConfirmationModal from "./Modals/ConfirmationModal";
function App() {
  const [Item_Arr, setItem_Arr] = useState([
    {
      id: "5",
      item_name: "Rice",
      item_quantity: "5",
      item_unit: "pkt",
      item_weight: "230",
    },
    {
      id: "7",
      item_name: "Aata",
      item_quantity: "8",
      item_unit: "pkt",
      item_weight: "20",
    },
    {
      id: "9",
      item_name: "Chaawal",
      item_quantity: "13",
      item_unit: "pkt",
      item_weight: "15",
    },
  ]);
  const [visi, setvisi] = useState(false);
  const [visi_dele, setvisi_dele] = useState(false);
  const [del_id, setdel_id] = useState();
  const [isadclick, setisadclick] = useState(false);
  const [init_item, setinit_item] = useState({
    id: "$",
    item_name: "",
    item_quantity: "",
    item_unit: "",
    item_weight: "",
  });
  const [isDisabled, setIsDisabled] = useState(false);
  
  // useEffect(() => {
  //   fetch("https://www.onlinethela.online/assignment/api/items")
  //     .then((res) => {
  //       if (!res.ok) return;
  //       return res.json();
  //     })
  //     .then((dat) => setItem_Arr(dat.data));
  // }, []);
  const itemdeleter = (id) => {
    setItem_Arr((pre_arr) => {
      return pre_arr.filter((x) => x.id !== id);
    });
  };
  const itemadder = (item) => {
    if (item.item_name.trim().length === 0)
      throw Error("Please Enter a Valid Name");
    if (
      item.item_quantity === "" ||
      isNaN(Number(item.item_quantity)) === true ||
      Number(item.item_quantity) <= 0
    )
      throw Error("Please Enter Valid Quantity");
    if (item.item_weight === ""  || isNaN(Number(item.item_weight)) === true || Number(item.item_weight) < 0)
      throw Error("Please Enter Valid Weight");
    visfalse();
    setItem_Arr((pre_arr) => {
      const ind = pre_arr.findIndex((x) => x.id === item.id);
      console.log(ind);
      if (ind !== -1) {
        const n_arr = pre_arr;
        n_arr[ind] = item;
        return pre_arr;
      }
      setIsDisabled(true);
      setTimeout(() => setIsDisabled(false), 5000);
      return [...pre_arr, item];
    });
    return;
  };
  const vistrue = () => setvisi(true);
  const visfalse = () => setvisi(false);
  const isadclickfalse = () => setisadclick(false);
  const vis_delfalse = (id) =>{ setdel_id(id); setvisi_dele(true)};
  const vis_deltrue = () => setvisi_dele(false);
  const editsetter = (item) => setinit_item(item);
  const addItemHandler = () => {
    setinit_item({
      id: "$",
      item_name: "",
      item_quantity: "",
      item_unit: "",
      item_weight: "",
    });
    setisadclick(true);
    vistrue();
    return;
  };
  return (
    <div className="rel_body">
      {
        (visi || visi_dele) && <Backdrop visfalse={visfalse} vis_deltrue={vis_deltrue}/>
      }
      <Navbar />
      <div className="list_container">
        <div className="ekaur_container">
          <div className="bu">
            <div className="it">Items <img src={RefreshIcon} className="user4" /> </div>
            <button
              onClick={addItemHandler}
              disabled={isDisabled}
              className="addbutt"
            >
              Add Item +
            </button>
          </div>
          <ItemList
            editsetter={editsetter}
            list_Item={Item_Arr}
            itemdeleter={itemdeleter}
            vistrue={vistrue}
            visi_dele={vis_delfalse}
          />
        </div>
      </div>
      {visi && (
        <Modal
          itemadder={itemadder}
          init_item={init_item}
          visfalse={visfalse}
          visi={visi}
          isadclick={isadclick}
          isadclickfalse={isadclickfalse}
        />
      )}
      {
        visi_dele && <ConfirmationModal visi_dele={vis_deltrue} itemdeleter={itemdeleter} id={del_id} />
      }
    </div>
  );
}

export default App;
