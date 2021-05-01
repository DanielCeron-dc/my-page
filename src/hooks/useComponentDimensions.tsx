import {useState,  useLayoutEffect}  from "react"; 

function useComponentDimensions(targetRef:React.RefObject<HTMLDivElement>){

    const [width, setWidth] = useState(0); 
    const [height, setHeight] = useState(0); 

    useLayoutEffect(() => {
            updateDimensions(); 
    }, [targetRef.current]);


    const updateDimensions = () => {
        console.log("HOLA");
        
        if(targetRef.current == null ) return;  
        setHeight(targetRef.current.offsetHeight);
        setWidth(targetRef.current.offsetWidth);
    } 

    return [ width, height, updateDimensions] as const; 
}

export default useComponentDimensions; 