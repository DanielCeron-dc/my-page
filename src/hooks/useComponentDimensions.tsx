import { useState, useLayoutEffect, useCallback } from "react";

function useComponentDimensions(targetRef: React.RefObject<HTMLDivElement>) {

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const updateDimensions = useCallback(() => {
        if (targetRef.current == null) return;
        setHeight(targetRef.current.offsetHeight);
        setWidth(targetRef.current.offsetWidth);
    }, [targetRef])

    useLayoutEffect(() => {
        updateDimensions();
    }, [updateDimensions]);

    return [width, height, updateDimensions] as const;
}

export default useComponentDimensions;