import React from 'react';


const TransparentBox:React.FC = (props) => {
    
    return <div  style = {{width: "80%", height: "70%", background: "rgba(255,255,255,0.5)", borderRadius: 20}}>
    {props.children}
    </div>
}
export default TransparentBox;