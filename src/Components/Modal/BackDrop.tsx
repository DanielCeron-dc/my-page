import React from "react";
import Classes from "./Styles.module.css";
import { motion } from "framer-motion";



const BackDrop: React.FC<{ onClick: React.MouseEventHandler<HTMLDivElement> | undefined }> = (props) => {
  return <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={props.onClick}
    className={Classes.BackDrop}
    style={{ zIndex: 30 }}
  >
    {props.children}
  </motion.div>
}

export default BackDrop;