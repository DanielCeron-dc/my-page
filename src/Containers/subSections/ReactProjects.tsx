import React, { useContext } from 'react';
import ExpandedPictureBox from '../../Components/ExpandedPictureBox';
import PictureBox from '../../Components/UI/PictureBox';
import Spinner from '../../Components/UI/Spinner/Spinner';
import { ModalContext } from '../../Provider/Modal/Modal.context';
import { ProjectsContext } from '../../Provider/Projects/ProjectsContext';

type ReactProjectsProps = {
    
};

const ReactProjects:React.FC<ReactProjectsProps> = () => {
    
    const {Reactprojects, loading} = useContext(ProjectsContext);
    const {changeModalContent, changeModalState} = useContext(ModalContext);

    const activeModal = (index: number, type: string) => {
        changeModalContent(<ExpandedPictureBox  index= {index} type = {type}/>); 
        changeModalState(true); 
    }

    return loading ? <Spinner/>  : <div style = {{display: "flex", alignItems: "center",justifyContent: "center", flexWrap: "wrap" , height: "100%", overflowY: "scroll" }}>
        {
            Reactprojects.map((value, index) =>{
                return <PictureBox 
                    description = {value.description} 
                    link ={value.link}  
                    key = {value.description}
                    onClick = {() =>activeModal(index, "react")}
                    />
            })
        }
       
    </div>
}
export default ReactProjects;