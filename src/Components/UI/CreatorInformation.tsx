import { motion } from 'framer-motion';
import React from 'react';



const CreatorInformation: React.FC = (props) => {

    return <motion.div
        style={{
            position: 'fixed',
            background: "rgba(0,0,0,0.4629202022605917)",
            bottom: 0,
            right: 0,
            margin: 20,
            width: 250,
            height: 50,
            borderRadius: 10,
            color: "white",

            zIndex: 30
        }}

        initial={{
            x: 300,
            y: 0
        }}

        animate={{
            x: 0,
            y: 0,
        }}

        exit={{
            x: 300,
            y: 0,
            transition: {
                delay: 3
            }
        }}

    >
        {props.children}
    </motion.div>
}
export default CreatorInformation;