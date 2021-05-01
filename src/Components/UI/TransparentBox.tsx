import React, { useEffect, useRef, useState } from 'react';
import Rectangle from '../../Animations/Rectangle';
import useComponentDimensions from '../../hooks/useComponentDimensions';
import usePageDimension from '../../hooks/usePageDimensions';


const TransparentBox:React.FC = (props) => {
    
    const [ width] = usePageDimension(); 
    const [hover, setHover] = useState(false); 

    const transparentBoxref = useRef<HTMLDivElement>(null);
    const [componentWidth, componentHeight, updateComponentDimensions] = useComponentDimensions(transparentBoxref); 
    console.log("componentWidth: "  + componentWidth);
    
    useEffect(() => {
        setTimeout(() => {
            updateComponentDimensions(); 
            
        }, 400);
    }, [hover])


    const desktop:boolean = width > 1000; 

    return <div  
                ref = {transparentBoxref}
                style = {{
                    width: desktop ? "80%" : "95%", 
                    height: "500px", 
                    background: "rgba(255,255,255,0.5)", 
                    borderRadius: 20,
                    display: "block", 
                    position: "relative", 
                }}
                onMouseOver = {() => setHover(true)}
                onMouseLeave = {() => setHover(false)}  
           
            >

                {hover && 
                    [<Rectangle 
                    initialX = {0} 
                    initialY = {0}  
                    finalX = {0} 
                    finalY ={componentHeight-100}/> , 
                    <Rectangle 
                    initialX = {(componentWidth / 2) - 15} 
                    initialY = {0}  
                    finalX = {(componentWidth / 2) - 15} 
                    finalY ={componentHeight-100}/> , 
                    <Rectangle 
                    initialX = {componentWidth - 30} 
                    initialY = {0}  
                    finalX = {componentWidth - 30} 
                    finalY ={componentHeight-100}/> , 
                ]
                }
                <div style  = {{display: "block", zIndex: 30, position: "relative", height: 500,  width: "100%",}}>
                    {props.children}
                </div>

    </div>
}
export default TransparentBox; 