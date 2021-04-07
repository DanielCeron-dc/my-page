import React from 'react';

type PictureBoxProps = {
    
};

const PictureBox:React.FC<PictureBoxProps> = () => {
    
    return <div 
        style = {{
            backgroundColor: "white",
            borderRadius: 20, 
            margin: "20px 10px", 
            textAlign: "center",
            width: 225,
            height: 200,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px dashed red",
            overflow: 'hidden'
            }}
    >
        <img src="https://codigoesports.com/wp-content/uploads/2020/05/VALORANT_Jett.jpg"  
        width ="225px"
        style = {{display: "grid" }}></img>
        <h4>tu puta madre</h4>
    </div>
}
export default PictureBox;