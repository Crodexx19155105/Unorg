import Inpform from "./Inpform";
import React from "react";
import "./Modal.css";
import Headerinp from "./Headerinp";
function Modal({ itemadder, init_item, visfalse, visi,isadclick,isadclickfalse }) {
  const message=(isadclick)?"ADD ITEM":"EDIT ITEM";
  return (
    <div className={visi ? "nav2-menu active" : "nav2-menu"}>
      <div className="header">
        <Headerinp message={message}/>
      </div>
      <div className="inpform">
        <Inpform
          itemadder={itemadder}
          init_item={init_item}
          visfalse={visfalse}
          isadclickfalse={isadclickfalse}
        />
      </div>
    </div>
  );
}
export default Modal;
