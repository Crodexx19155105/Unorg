import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
import "./Item2.css";
import DeleteIcon from "./Images/Delete Icon.svg";
import EditIcon from "./Images/Edit Icon.svg";
function Item2({
  editsetter,
  itemdeleter,
  vistrue,
  visi_dele,
  id,
  item_name,
  item_quantity,
  item_unit,
  item_weight,
}) {
  const deletehandler = () => {
    visi_dele(id);
    return;
  };
  const edithandler = () => {
    const item = {
      id,
      item_name,
      item_quantity,
      item_unit,
      item_weight,
    };
    editsetter(item);
    vistrue();
  };
  return (
    <>
      <button onClick={edithandler} className="editb" ><img src={EditIcon} className="user3" /></button>
      <button onClick={deletehandler} className="deleteb"><img src={DeleteIcon}  className="user3"/></button>
      {/* ******Make these reltive***** */}
    </>
  );
}

export default Item2;
