import React from 'react';
import usePageDimension from '../../hooks/usePageDimensions';


const TransparentBox:React.FC = (props) => {
    
    const [ width] = usePageDimension(); 

    const desktop:boolean = width > 1000; 

    return <div  
    style = {{
        width: desktop ? "80%" : "95%", 
        height: "500px", 
        background: "rgba(255,255,255,0.5)", 
        borderRadius: 20,
    }}>
    {props.children}
    </div>
}
export default TransparentBox;