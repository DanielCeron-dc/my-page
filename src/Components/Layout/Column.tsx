import React, { CSSProperties } from 'react';

type ColumnProps = {
    height?: string,
};

const style:CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
}

const Column:React.FC<ColumnProps> = (props) => {
    return <div style ={{...style, height: props.height}}>{props.children}</div>
}
export default Column;