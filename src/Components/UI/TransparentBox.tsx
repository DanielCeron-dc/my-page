import React, { useRef, useState } from 'react';
import Rectangle from '../../Animations/Rectangle';
import usePageDimension from '../../hooks/usePageDimensions';



const TransparentBox: React.FC = (props) => {

    const [hover, setHover] = useState(false);
    const transparentBoxref = useRef<HTMLDivElement>(null);
    const [height, width] = usePageDimension();

    //in case it is on a mobile, the box must have 650
    const transparentBoxHeight = width < 1000 ? 650 : height * 0.7;

    return <div
        ref={transparentBoxref}
        style={{
            width: "95%",
            height: transparentBoxHeight,
            background: "rgba(255,255,255,0.5)",
            borderRadius: 20,
            justifyContent: "center",
            position: "relative",
        }}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
    >


        {hover &&
            <Rectangle
                initialX={0}
                initialY={0}
                finalX={0}
                finalY={transparentBoxHeight - (transparentBoxHeight * 0.3)}
            />
        }

        <div style={{ position: "absolute", zIndex: 10, height: transparentBoxHeight, width: "100%", overflowX: "unset" }}>
            {props.children}
        </div>


    </div>
}
export default TransparentBox;