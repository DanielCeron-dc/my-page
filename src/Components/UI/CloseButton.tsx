import { motion } from 'framer-motion';
import React, { CSSProperties, useState } from 'react';

type closeButtonProps = {
    onClick: () => void;
};

const buttonStyle: CSSProperties = {
    borderRadius: 50,
    backgroundColor: "rgba(168, 50, 58, 1)",
    borderColor: "black",
    cursor: "pointer",
    position: "absolute",
    right: 0,
    margin: 5,


}

const CloseButton: React.FC<closeButtonProps> = (props) => {
    const [hover, setHover] = useState(false);
    return <motion.button
        whileHover={{ scale: 1.2, rotate: 360 }}
        style={hover ? { ...buttonStyle, backgroundColor: "rgba(102, 30, 34)" } : buttonStyle}
        onClick={props.onClick}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
    >
        x
    </motion.button>
}
export default CloseButton;