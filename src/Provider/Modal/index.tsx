import React, { ReactNode, useReducer } from 'react';
import {AnimatePresence, motion} from "framer-motion";

import ModalReducer, {initialState} from "./Modal.reducer"; 
import {ModalContext} from "./Modal.context";
import BackDrop from './BackDrop';
import classes from "./Styles.module.css"; 
import { useParams } from 'react-router-dom';



const Index:React.FC = (props) => {
    const [state, dispatch] = useReducer(ModalReducer, initialState); 
    let {id} = useParams <{id:string}>();

    const changeModalContent = (content: ReactNode) => {
        dispatch({type: "CHANGE_MODAL_CONTENT", payload: {content}}); 
    }

    const changeModalState = (value?: boolean)=> {
        dispatch({type: "CHANGE_ACTIVE_STATE", payload: {value}}); 
    }

    const Modal:ReactNode = <AnimatePresence>
        { 
            state.isActive &&  <BackDrop onClick={()=>changeModalState(false)}>
             {state.isActive && <motion.div  className = {classes.ModalStyle}
                onClick = {e => {e.stopPropagation()}}
            >
                {state.content}
            </motion.div>}
    </BackDrop>
        }
    </AnimatePresence> 
    
    
    ;

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