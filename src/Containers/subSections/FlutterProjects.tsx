import React from 'react';
import PictureBox from '../../Components/UI/PictureBox';

type FlutterProjectsProps = {
    
};

const FlutterProjects:React.FC<FlutterProjectsProps> = () => {
    
    return <div style = {{display: "flex", alignItems: "center",justifyContent: "center", flexWrap: "wrap" , height: "100%", overflowY: "scroll" }}>
        <PictureBox/>
        <PictureBox/>
        <PictureBox/>
        <PictureBox/>
        <PictureBox/>
     
        
    </div>
}
export default FlutterProjects;