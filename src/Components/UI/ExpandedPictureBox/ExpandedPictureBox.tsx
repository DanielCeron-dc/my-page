import React, { CSSProperties, useContext } from 'react';
import { motion } from 'framer-motion';


import { ProjectsContext } from '../../../Provider/Projects/ProjectsContext';
import { IProjectInfo } from '../../../Provider/Projects/ProjectsReducer';
import usePageDimension from '../../../hooks/usePageDimensions';
import { InflateRaw } from 'node:zlib';

type ExpandedPictureBoxProps = {
    projectInfo: IProjectInfo;
};

const imageStyle: CSSProperties = {
    borderBottom: "10px",
    borderBottomStyle: "groove",
    width: "100%",
    zIndex: 100,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,

}

const ExpandedPictureBox: React.FC<ExpandedPictureBoxProps> = ({ projectInfo }) => {

    const [, pageWidth] = usePageDimension();

    const backGroundStyle: CSSProperties = {
        position: "relative",
        display: "block",
        width: pageWidth < 1000 ? "90%" : "50%",
        backgroundColor: "white",
        zIndex: 100,
        borderRadius: 20,
    }

    return <motion.div style={backGroundStyle} layoutId={"background-" + projectInfo.id} onClick={(e) => { e.stopPropagation() }}>
        <motion.img src={projectInfo.link}
            style={imageStyle}
            alt=""
            layoutId={"img-" + projectInfo.id}
        />
        <motion.h1 layoutId={"title-" + projectInfo.id} style={{ margin: 10 }}>{projectInfo.title}</motion.h1>
        <div style={{ fontSize: 30, margin: 20 }}>
            {projectInfo.description}
        </div>
    </motion.div>
}
export default ExpandedPictureBox;