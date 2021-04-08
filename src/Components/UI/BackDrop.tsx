import React, { CSSProperties, useContext, useState } from "react";


const style: CSSProperties = {
  width: "100%",
  height: "100%",
  position: "fixed",
  zIndex: 1100,
  left: 0,
  top: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
};


const BackDrop: React.FC<{ onClick: () => void}> = (props) =>{


   return <div onClick={props.onClick} style={style}>{props.children}</div>
 

}

export default BackDrop;