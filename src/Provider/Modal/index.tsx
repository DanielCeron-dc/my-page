import React, { ReactNode, useReducer } from 'react';
import { AnimatePresence } from "framer-motion";

import ModalReducer, { initialState } from "./Modal.reducer";
import { ModalContext } from "./Modal.context";
import BackDrop from './BackDrop';

import { useHistory } from 'react-router-dom';



const Index: React.FC = (props) => {
    const [state, dispatch] = useReducer(ModalReducer, initialState);
    const history = useHistory();

    const changeModalContent = (content: ReactNode) => {
        dispatch({ type: "CHANGE_MODAL_CONTENT", payload: { content } });
    }

    const changeModalState = (value?: boolean) => {
        dispatch({ type: "CHANGE_ACTIVE_STATE", payload: { value } });
    }

    const onBackDropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        history.push("/");
        changeModalState(false);
    }

    const Modal: ReactNode = <AnimatePresence>
        {
            state.isActive && <BackDrop onClick={onBackDropClick}>
                {state.content}
            </BackDrop>
        }
    </AnimatePresence>;


    return <ModalContext.Provider
        value={{
            changeModalContent,
            changeModalState,
            Modal
        }}
    >
        {props.children}
    </ModalContext.Provider>
}
export default Index;