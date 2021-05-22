import React, { useEffect, useRef, useState } from 'react';
import Rectangle from '../../Animations/Rectangle';
import useComponentDimensions from '../../hooks/useComponentDimensions';
import usePageDimension from '../../hooks/usePageDimensions';


const TransparentBox: React.FC = (props) => {

    const [width] = usePageDimension();
    const [hover, setHover] = useState(false);

    const transparentBoxref = useRef<HTMLDivElement>(null);
    const [componentWidth, componentHeight, updateComponentDimensions] = useComponentDimensions(transparentBoxref);

    useEffect(() => {
        setTimeout(() => {
            updateComponentDimensions();
        }, 400);
    }, [hover, updateComponentDimensions])


    const desktop: boolean = width > 1000;

    return <div
        ref={transparentBoxref}
        style={{
            width: desktop ? "80%" : "95%",
            height: "500px",
            background: "rgba(255,255,255,0.5)",
            borderRadius: 20,
            display: "block",
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
                finalY={componentHeight - (componentHeight * 0.3)}
                width={componentWidth}
                height={componentHeight * 0.3}
            />
        }
        <div style={{ display: "block", zIndex: 10, position: "relative", height: 500, width: "100%", overflowX: "unset" }}>
            {props.children}
        </div>

    </div>
}
export default TransparentBox;