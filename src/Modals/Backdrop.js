import React from "react";
import "./Backdrop.css";
function Backdrop({ visfalse,vis_deltrue }) {
    const onClicker=()=>{
        visfalse();
        vis_deltrue()
    };
  return (
    <div onClick={onClicker} className="bdrop">
    </div>
  );
}
export default Backdrop;
