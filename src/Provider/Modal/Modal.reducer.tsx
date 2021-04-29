import { ReactNode } from "react"; 

export interface IState {
    isActive: boolean;
    content: ReactNode;
}

type IAction = {
    type: "CHANGE_ACTIVE_STATE",
    payload: {
        value? : boolean
    }
} | {
    type: "CHANGE_MODAL_CONTENT",
    payload: {
        content: ReactNode
    }
}

export const initialState:IState = {
    isActive: false,
    content: <></>
}

const reducer =  (state:IState, action:IAction):IState => {
    switch (action.type) {
        case "CHANGE_ACTIVE_STATE":
            return { content: state.content, isActive: action.payload.value? action.payload.value :!state.isActive}
        case "CHANGE_MODAL_CONTENT": 
            return { content: action.payload.content, isActive:!state.isActive}
        default:
            return state
    }
}

export default reducer; 

