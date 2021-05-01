import { motion } from 'framer-motion';
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

    return <motion.div 
        layoutId = {"div" + props.description}
        style = {Hover ? {...style,  backgroundColor: "grey", cursor: "pointer"} : style}
        onMouseOver = {() => setHover(true)}
        onMouseLeave = {() => setHover(false)}
        onClick = {props.onClick}
    >
        <motion.img src= {props.link ? props.link : valorantImage_}
        width ="225px"
        height = "70%"
        style = {{display: "grid" }}
        alt = "sis"
        layoutId = {props.description}
        />
        <motion.h4  layoutId = {"h1" + props.description}>{props.description ? props.description : "Project Name"}</motion.h4>
    </motion.div>
}
export default PictureBox;