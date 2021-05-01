import React, { useRef, useState, useLayoutEffect } from "react";
import useComponentDimensions from "../hooks/useComponentDimensions";
import Rectangle from "./Rectangle";

const ComponentWithDimensions:React.FC = () => {
  const targetRef= useRef<HTMLDivElement>(null);
  const [ width , height ] = useComponentDimensions(targetRef); 

  return (
    <div ref={targetRef} style = {{borderColor: "red", width: 500, border: "dotted", display: "block" , position: "relative" }}>
      <p>{width}</p>
      <p>{height}</p>
        { width !== 0 
          && <Rectangle 
                initialX = {0} 
                initialY = {0}  
                finalX = {width-50} 
                finalY ={100}/>
        }
    </div>
  );
};

export default ComponentWithDimensions;