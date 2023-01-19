import React from "react";
import { toast } from "react-toastify";
import "./ConfirmationModal.css";
import Headerinp from "../Headerinp";
function ConfirmationModal({ visi_dele, itemdeleter, id }) {
  const deletehandler = () => {
    itemdeleter(id);
    toast.success("Item Successfully Deleted!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    visi_dele();
    return;
  };
  const cancelhandler = () => {
    visi_dele();
    return;
  };
  return (
    <div className={visi_dele ? "nav3-menu active" : "nav3-menu"}>
      <div>
        <div className="header2">
          <Headerinp message={"ARE YOU SURE?"} />
        </div>
        <div className="butts">
          <button onClick={deletehandler} className="conf butt_c">
            Confirm
          </button>
          <button onClick={cancelhandler} className="canc butt_c">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
export default ConfirmationModal;
