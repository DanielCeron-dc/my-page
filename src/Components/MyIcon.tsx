import { motion } from 'framer-motion';
import React from 'react';

import MyLogo from "../Assets/png/MiLogo.png";
import D from "../Assets/png/D.png";
import C from "../Assets/png/C.png";

export const MyIcon: React.FC = () => {

    return <motion.img
        style={{ width: 100, height: 100, }}
        src={MyLogo}
        layoutId="MiLogo"
    />
}

export const MyIcon2: React.FC = () => {

    return <motion.div layoutId="MiLogo" >
        <motion.img
            style={{ width: 20, alignSelf: "center", height: 20, justifySelf: "center", margin: 0 }}
            src={D}
        />
        aniel{" "}
        <motion.img
            style={{ width: 20, alignSelf: "center", height: 20, justifySelf: "center", margin: 0 }}
            src={C}
        />
        erón{" "}
    </motion.div>
}
