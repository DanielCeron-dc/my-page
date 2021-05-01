import React from "react"; 

interface IProps {
    y:number,
    x:number,
    show: boolean,
    percent?: boolean
}


const Move:React.FC<IProps> = (props) =>{

    const translateQuery = props.percent? "translate("+props.x+"%, " +props.y+"%)" : "translate("+props.x+"px, " +props.y+"px)";

    return <div style = {props.show ? {transform:"translate(40%, 90%)", transition: "1s",}: {transition: "1s",}}>
        {props.children}
    </div>
}

export default Move; 