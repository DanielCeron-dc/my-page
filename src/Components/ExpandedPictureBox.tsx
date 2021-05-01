import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';


import { ProjectsContext } from '../Provider/Projects/ProjectsContext';
import { IProjectInfo } from '../Provider/Projects/ProjectsReducer';

type ExpandedPictureBoxProps = {
    index: number;
    type: string; 
};

const ExpandedPictureBox:React.FC<ExpandedPictureBoxProps> = ({type, index}) => {
    let {id} = useParams <{id:string}>();
    console.log(id);
    
    const {FlutterProjects, Reactprojects} = useContext(ProjectsContext);
    const selectedProject:IProjectInfo = type === "react" ? Reactprojects[index] : FlutterProjects[index]; 

    return <div style = {{position: "absolute", display: "contents"}} >
        <motion.img src= {selectedProject.link}
            width = "100%"
            style = {{borderBottom: "10px", borderBottomStyle: "groove"}}
            alt = "si"
            layoutId = {id}
        />
        <motion.h1 layoutId = {"h1" + id}>{selectedProject.description}</motion.h1>
    </div>
}
export default ExpandedPictureBox;