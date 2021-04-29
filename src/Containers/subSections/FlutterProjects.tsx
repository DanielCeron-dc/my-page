import React, { useContext } from 'react';
import ExpandedPictureBox from '../../Components/ExpandedPictureBox';
import PictureBox from '../../Components/UI/PictureBox';
import Spinner from '../../Components/UI/Spinner/Spinner';
import { ModalContext } from '../../Provider/Modal/Modal.context';
import { ProjectsContext } from '../../Provider/Projects/ProjectsContext';

type FlutterProjectsProps = {
    
};

const FlutterProjects:React.FC<FlutterProjectsProps> = () => {
    const {FlutterProjects, loading} = useContext(ProjectsContext);
    const {changeModalContent, changeModalState} = useContext(ModalContext);

    const activeModal = (index: number, type: string) => {
        changeModalContent(<ExpandedPictureBox  index= {index} type = {type}/>); 
        changeModalState(true); 
    }

    return loading ? <Spinner/>  : <div style = {{display: "flex", alignItems: "center",justifyContent: "center", flexWrap: "wrap" , height: "100%", overflowY: "scroll" }}>
        {
            FlutterProjects.map((value, index )=>{
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
export default FlutterProjects;