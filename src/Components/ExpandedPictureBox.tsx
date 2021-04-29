import React, { useContext } from 'react';
import { ProjectsContext } from '../Provider/Projects/ProjectsContext';
import { IProjectInfo } from '../Provider/Projects/ProjectsReducer';

type ExpandedPictureBoxProps = {
    index: number;
    type: string; 
};

const ExpandedPictureBox:React.FC<ExpandedPictureBoxProps> = ({type, index}) => {
    const {FlutterProjects, Reactprojects} = useContext(ProjectsContext);
    const selectedProject:IProjectInfo = type === "react" ? Reactprojects[index] : FlutterProjects[index]; 

    return <div style = {{position: "absolute", display: "contents"}}>
        <img src= {selectedProject.link}
            width = "100%"
            style = {{borderBottom: "10px", borderBottomStyle: "groove"}}
            alt = "si"
        />
        <h1>{selectedProject.description}</h1>
    </div>
}
export default ExpandedPictureBox;