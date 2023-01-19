import Item from "./Item";
import React from "react";
import { ToastContainer } from "react-toastify";
import "./ItemList.css";
import Item2 from "./Item2";
function ItemList({ list_Item, itemdeleter, vistrue, editsetter,visi_dele }) {
  return (
    <div>
      <div className="papagrid">
        <div className="headings">
          <div className="id top">ID</div>
          <div className="name top">NAME</div>
          <div className="quantity top">QUANTITY</div>
          <div className="unit top">UNIT</div>
          <div className="weight top">WEIGHT</div>
          {list_Item.length > 0 &&
            list_Item.map((x) => <Item key={x.id} {...x}></Item>)}
          <ToastContainer
            enableMultiContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>
        <div className="headings2">
          <div className="tp"></div>
          <div className="tp"></div>
          {list_Item.length > 0 &&
            list_Item.map((x) => (
              <Item2
                key={x.id}
                editsetter={editsetter}
                itemdeleter={itemdeleter}
                vistrue={vistrue}
                visi_dele={visi_dele}
                {...x}
              ></Item2>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ItemList;
