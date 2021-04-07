import React from 'react';
import styles from "./Grow.module.css"; 

type GrowProps = {
    color: string;
    onHover?: () => void; 
    onMouseLeave?: () => void; 
};

const Grow:React.FC<GrowProps> = (props) => {

    return <div
        className = {styles.grow} 
        style = {{background: props.color}} 
        onMouseOver ={props.onHover}
        onMouseLeave = {props.onMouseLeave}
    >
        {props.children}
    </div>
}
export default Grow;