import React, { ReactNode, useReducer } from 'react';
import ModalReducer, {initialState} from "./Modal.reducer"; 
import {ModalContext} from "./Modal.context";
import BackDrop from './BackDrop';
import classes from "./Styles.module.css"; 

const Index:React.FC = (props) => {
    const [state, dispatch] = useReducer(ModalReducer, initialState); 

    const changeModalContent = (content: ReactNode) => {
        dispatch({type: "CHANGE_MODAL_CONTENT", payload: {content}}); 
    }

    const changeModalState = (value?: boolean)=> {
        dispatch({type: "CHANGE_ACTIVE_STATE", payload: {value}}); 
    }

    const Modal:ReactNode = state.isActive?  <BackDrop onClick={()=>changeModalState(false)}>
        <div  className = {classes.ModalStyle}
        onClick = {e => {e.stopPropagation()}}
        
        >
            {state.content}
        </div>
    </BackDrop> : <></>;

    return <ModalContext.Provider
        value = {{
            changeModalContent,
            changeModalState,
            Modal
        }}
    >
        {props.children}
    </ModalContext.Provider>
}
export default Index;