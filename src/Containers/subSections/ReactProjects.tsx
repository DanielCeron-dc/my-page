import React from 'react';
import PictureBox from '../../Components/UI/PictureBox';

type ReactProjectsProps = {
    
};

const ReactProjects:React.FC<ReactProjectsProps> = () => {
    
    return <div style = {{display: "flex", alignItems: "center",justifyContent: "center", flexWrap: "wrap" , height: "100%", overflowY: "scroll" }}>
        <PictureBox/>
        <PictureBox/>
        <PictureBox/>
        <PictureBox/>
        <PictureBox/>
        <PictureBox/>
        <PictureBox/>
        <PictureBox/>
    </div>
}
export default ReactProjects;