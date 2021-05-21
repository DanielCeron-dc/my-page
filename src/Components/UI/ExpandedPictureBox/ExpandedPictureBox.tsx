import React, { CSSProperties, useContext } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';


import { ProjectsContext } from '../../../Provider/Projects/ProjectsContext';
import { IProjectInfo } from '../../../Provider/Projects/ProjectsReducer';
import usePageDimension from '../../../hooks/usePageDimensions';

type ExpandedPictureBoxProps = {
    index: number;
    type: string;
};

const imageStyle: CSSProperties = {
    borderBottom: "10px",
    borderBottomStyle: "groove",
    width: "100%",
    zIndex: 100,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
}

const ExpandedPictureBox: React.FC<ExpandedPictureBoxProps> = ({ type, index }) => {
    let { id } = useParams<{ id: string }>();
    const [, pageWidth] = usePageDimension();
    console.log(id);

    const backGroundStyle: CSSProperties = {
        position: "relative",
        display: "block",
        width: pageWidth < 1000 ? "90%" : "50%",
        backgroundColor: "white",
        zIndex: 100,
        borderRadius: 20,
    }

    const { FlutterProjects, Reactprojects } = useContext(ProjectsContext);
    const selectedProject: IProjectInfo = type === "react" ? Reactprojects[index] : FlutterProjects[index];
    return <motion.div style={backGroundStyle} layoutId={"white" + id} onClick={(e) => { e.stopPropagation() }}>
        <motion.img src={selectedProject.link}
            style={imageStyle}
            alt=""
            layoutId={id}
        />
        <motion.h1 layoutId={"h1" + id}>{selectedProject.description}</motion.h1>
    </motion.div>
}
export default ExpandedPictureBox;