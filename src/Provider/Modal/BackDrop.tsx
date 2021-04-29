import React from "react";
import Classes from "./Styles.module.css";



const BackDrop: React.FC<{ onClick: () => void}> = (props) =>{
  return <div onClick={props.onClick} className = {Classes.BackDrop}>{props.children}</div>
}

export default BackDrop;