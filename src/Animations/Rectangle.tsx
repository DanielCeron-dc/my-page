import React, { CSSProperties } from "react";
import { motion, Transition } from "framer-motion";

interface IProps {
  initialX: number,
  initialY: number,
  finalX: number,
  finalY: number,

}

const bounceTransition: Transition | undefined = {
  y: {
    duration: 3,
    type: "spring",
    repeat: Infinity,
    repeatType: "reverse"
  },
  backgroundColor: {
    duration: 6,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeOut",
    repeatDelay: 0.8,
  },
}

const Rectanglestyle: CSSProperties = {

  backgroundColor: "rgba(255, 255, 255, 0.5)",
  zIndex: 5,
  position: "absolute",
  left: 0,
  top: 0,
  borderRadius: "20%",
  filter: "blur(20px)",
  width: "100%",
  height: "20%"
}



const Rectangle: React.FC<IProps> = (props) => {
  return <motion.div
    animate={{
      x: [props.initialX, props.finalX],
      y: [props.initialY, props.finalY],
      backgroundColor: ["rgba(255, 255, 255, 0.5)", "rgba(0,0 , 0, 0.2)"],
    }}
    style={{ ...Rectanglestyle }}
    transition={bounceTransition}
  >
  </motion.div>

}

export default React.memo(Rectangle);