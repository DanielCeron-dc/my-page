import React, { CSSProperties, useState } from 'react';

type PictureBoxProps = {
    description?: string; 
    link?: string;
    onClick?: () => void; 
};

const style: CSSProperties = {
    backgroundColor: "white",
    borderRadius: 20, 
    margin: "20px 10px", 
    textAlign: "center",
    width: 225,
    height: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px dashed black",
    overflow: 'hidden'
    }

const valorantImage_:string = "https://codigoesports.com/wp-content/uploads/2020/05/VALORANT_Jett.jpg" ; 

const PictureBox:React.FC<PictureBoxProps> = (props) => {
    
    const [Hover, setHover] = useState(false); 

    return <div 
        style = {Hover ? {...style,  backgroundColor: "grey", cursor: "pointer"} : style}
        onMouseOver = {() => setHover(true)}
        onMouseLeave = {() => setHover(false)}
        onClick = {props.onClick}
    >
        <img src= {props.link ? props.link : valorantImage_}
        width ="225px"
        height = "70%"
        style = {{display: "grid" }}
        alt = "sis"
        ></img>
        <h4>{props.description ? props.description : "Project Name"}</h4>
    </div>
}
export default PictureBox;