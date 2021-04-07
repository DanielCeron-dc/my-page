import React, { ReactNode } from 'react';
import styles from "./Grow.module.css"; 

type GrowContainerProps = {
    children: ReactNode
};

/** THIS ONLY WORKS WITH 3 GROW COMPONENTS  
 ** if u want more, u have to modify GrowModule.css*/ 
const GrowContainer:React.FC<GrowContainerProps> = (props) => {
    return <div className = {styles.growContainer}>{props.children}</div>
}
export default GrowContainer;