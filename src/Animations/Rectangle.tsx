import React, { CSSProperties } from "react"; 
import {motion, Transition} from "framer-motion"; 

interface IProps {
    initialX: number,
    initialY:number,
    finalX: number, 
    finalY: number, 
    width: number, 
    height: number,
}

const bounceTransition: Transition | undefined= {
    y: {
      duration: 3,
      type: "spring", 
      yoyo: Infinity
    },
    backgroundColor: {
      duration: 6,
      yoyo: Infinity,
      ease: "easeOut",
      repeatDelay: 0.8,
    },
  }

const Rectanglestyle: CSSProperties  = {
   
    backgroundColor: "rgba(255, 255, 255, 0.5)" , 
    zIndex: 10, 
    position: "absolute", 
    left: 0 , 
    top: 0, 
    borderRadius: "20%", 
    filter: "blur(20px)"
}


const Rectangle:React.FC<IProps> = (props) => {
    return <motion.div 
        animate = {{
            x: [props.initialX, props.finalX], 
            y: [props.initialY, props.finalY],
          backgroundColor: ["rgba(255, 255, 255, 0.5)", "rgba(0,0 , 0, 0.2)"],
        } } 
        style= {{ ...Rectanglestyle , height: props.height , width: props.width, }}
        transition = {bounceTransition}
        
    >
    </motion.div>

}

export default React.memo(Rectangle); 