import React, { useContext } from 'react';
import PictureBox from '../../Components/UI/PictureBox';
import Spinner from '../../Components/UI/Spinner/Spinner';
import { ProjectsContext } from '../../Provider/ProjectsContext';

type FlutterProjectsProps = {
    
};

const FlutterProjects:React.FC<FlutterProjectsProps> = () => {
    const {FlutterProjects, loading} = useContext(ProjectsContext);

    return loading ? <Spinner/>  : <div style = {{display: "flex", alignItems: "center",justifyContent: "center", flexWrap: "wrap" , height: "100%", overflowY: "scroll" }}>
        {
            FlutterProjects.map(value =>{
                return <PictureBox description = {value.description} link ={value.link} key = {value.description}/>
            })
        }
       
    </div>
}
export default FlutterProjects;