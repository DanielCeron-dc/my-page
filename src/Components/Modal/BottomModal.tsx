import { motion } from 'framer-motion';
import React from 'react';
import CloseButton from '../UI/CloseButton';
import BackDrop from './BackDrop';

type BottomModalProps = {
    onClose: () => void,
    title: string,
    description: string
};

const BottomModal: React.FC<BottomModalProps> = (props) => {


    return <BackDrop onClick={props.onClose}>
        <motion.div
            style={{
                backgroundColor: "black",
                position: "fixed",

                zIndex: 110,
                bottom: 0,
                left: 0,
                width: "100%",
                height: "30%",
                color: "white",
                alignItems: "center",
                justifyContent: "center",

            }}

            initial={{
                y: 300
            }}
            animate={{
                y: 0,
                transition: {
                    duration: 0.5
                }
            }}
            exit={{
                y: 300,
                transition: {
                    duration: 1
                }
            }}
        >

            <h2>{props.title}</h2>
            {props.description}
            <div style={{ height: 10 }}></div>
            {props.children}
            <div style={{ position: "absolute", right: 5, top: 5 }}>
                <CloseButton onClick={props.onClose} />
            </div>



        </motion.div>
    </BackDrop>
}
export default BottomModal;