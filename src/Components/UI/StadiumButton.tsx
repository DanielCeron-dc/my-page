import React, { CSSProperties, useState } from 'react';

const style: CSSProperties = {  //StaiumButton 
    borderStyle: "groove",
    borderColor: "black",
    height: "auto",
    color: "black",
    fontSize: "15px",
    borderRadius: "30%",
    boxShadow: "0 2px 3px 0 rgba(0,0,0,0.3)",
    transition: "1s",
    backgroundColor: "white",
    margin: "20 0"
}

const hoverStyle:CSSProperties = {
    backgroundColor: "rgba(94,33,107.1)",
    boxShadow: "0 1px 5px 0 rgba(0,0,0,0.4)",
    cursor: "pointer"
}

type StadiumButtonProps = {
    onClick: () => void; 
};

const StadiumButton:React.FC<StadiumButtonProps> = (props) => {
    
    const [Hover, setHover] = useState(false);
    return <button
        style = {Hover ?   {...style, ...hoverStyle} : style }
        onMouseOver = {() => setHover(true)}
        onMouseLeave = {() => setHover(false)}
        >
        {props.children}
    </button>
}
export default StadiumButton;