import React from 'react';
import styles from "./Grow.module.css"; 

type GrowProps = {
    color: string;
    onHover?: () => void; 
    onMouseLeave?: () => void; 
    TableCell?: boolean; 
};

const Grow:React.FC<GrowProps> = (props) => {

    return <div
        className = {styles.grow} 
        style = {{background: props.color, display: props.TableCell ? "table-cell" : "table-row"}} 
        onMouseOver ={props.onHover}
        onMouseLeave = {props.onMouseLeave}

    >
        {props.children}
    </div>
}
export default Grow;