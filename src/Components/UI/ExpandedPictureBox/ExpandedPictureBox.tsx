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

    const [, pageWidth] = usePageDimension();



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
    return <motion.div style={backGroundStyle} layoutId={"background-" + selectedProject.id} onClick={(e) => { e.stopPropagation() }}>
        <motion.img src={selectedProject.link}
            style={imageStyle}
            alt=""
            layoutId={"img-" + selectedProject.id}
        />
        <motion.h1 layoutId={"title-" + selectedProject.id} style={{ margin: 10 }}>{selectedProject.title}</motion.h1>
        <div style={{ fontSize: 30, margin: 20 }}>
            {selectedProject.description}
        </div>


    </motion.div>
}
export default ExpandedPictureBox;