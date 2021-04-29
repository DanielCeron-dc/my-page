import {createContext, ReactNode} from "react";

interface IModalContext {
    changeModalState: (value?: boolean) => void; 
    changeModalContent: (content: ReactNode) => void; 
    Modal: ReactNode;
}


export const ModalContext = createContext<IModalContext>({    
    changeModalState: () => {},
    changeModalContent: () => {},
    Modal: <></>
}); 
