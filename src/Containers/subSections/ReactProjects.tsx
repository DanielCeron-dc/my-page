import React, { useContext } from 'react';
import PictureBox from '../../Components/UI/PictureBox';
import Spinner from '../../Components/UI/Spinner/Spinner';
import { ProjectsContext } from '../../Provider/ProjectsContext';

type ReactProjectsProps = {
    
};

const ReactProjects:React.FC<ReactProjectsProps> = () => {
    
    const {Reactprojects, loading} = useContext(ProjectsContext);

    return loading ? <Spinner/>  : <div style = {{display: "flex", alignItems: "center",justifyContent: "center", flexWrap: "wrap" , height: "100%", overflowY: "scroll" }}>
        {
            Reactprojects.map(value =>{
                return <PictureBox description = {value.description} link ={value.link}  key = {value.description}/>
            })
        }
       
    </div>
}
export default ReactProjects;