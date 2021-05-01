import React, { CSSProperties } from "react"; 
import {motion, Transition} from "framer-motion"; 

interface IProps {
    initialX: number,
    initialY:number,
    finalX: number, 
    finalY: number
}

const bounceTransition: Transition | undefined= {
    y: {
      duration: 1,
      type: "spring", 
     yoyo: Infinity
    },
    backgroundColor: {
      duration: 1,
      yoyo: Infinity,
      ease: "easeOut",
      repeatDelay: 0.8,
    },
  }

const Rectanglestyle: CSSProperties  = {
    height: 100 ,
    width: 30, 
    backgroundColor: "rgba(255, 255, 255, 0.5)" , 
    zIndex: 10, 
    position: "absolute", 
    left: 0 , 
    top: 0, 
    borderRadius: "20%", 
}


const Rectangle:React.FC<IProps> = (props) => {
    return <motion.div 
      
        animate = {{
            x: [props.initialX, props.finalX], 
            y: [props.initialY, props.finalY],
          backgroundColor: ["rgba(255, 255, 255, 0.5)", "rgba(255, 255, 0, 0.2)"],
        } } 
        style= {Rectanglestyle}
        transition = {bounceTransition}
        
    >
    </motion.div>

}

export default React.memo(Rectangle); 