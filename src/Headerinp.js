import Edit from './Images/Edit.svg'
import React from "react";
import './Headerinp.css'
function Headerinp({message}) {
  return (
    <div className="text">
            {message}
            
            {message==="ARE YOU SURE?" ?<></> :<img class="image" src={Edit} className="user5"/>}
    </div>
  );
}
export default Headerinp;

