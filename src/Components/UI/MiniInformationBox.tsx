import { motion } from 'framer-motion';
import React, { ReactNode, useState } from 'react';



type MiniInformationBoxProps = {
    children: ReactNode;
    onMouseOver?: () => void,
    onMouseLeave?: () => void,
    title: string,
    description: string,
    isMobile: boolean,
    onCLick: () => void
}
let timer: NodeJS.Timeout;

const MiniInformationBox: React.FC<MiniInformationBoxProps> = (props) => {
    const [activeTooltip, setActiveTooltip] = useState(false);



    const onMouseOverHandler = () => {
        timer = setTimeout(() => {
            setActiveTooltip(true);
        }, 500);
        if (props.onMouseOver) props.onMouseOver();
    }

    const onMouseLeaveHandler = () => {
        clearTimeout(timer);
        setActiveTooltip(false);
        if (props.onMouseLeave) props.onMouseLeave();
    }

    return (
        <motion.div
            className={activeTooltip ? "tooltip" : ""}
            style={{
                width: 50,
                padding: 0,
                margin: 5
            }}
            whileHover={{
                scale: 1.2,
                rotate: 360,
                transition: { duration: 0.5 }
            }}
            whileTap={{
                scale: 0.8,
                rotate: -90,
            }}
            onHoverStart={() => {
                onMouseOverHandler();
            }}
            onHoverEnd={(e) => {
                onMouseLeaveHandler();
            }}

            onClick={props.onCLick}
        >
            {!props.isMobile && activeTooltip && <div className="top" >
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <i></i>
            </div>}

            {props.children}
        </motion.div>


    )
}
export default MiniInformationBox;