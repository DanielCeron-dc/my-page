import { createContext, ReactNode } from "react";

interface IModalContext {
    modal: ReactNode | null;
    setModal: (modal: ReactNode | null) => void
}

export const ModalContext = createContext<IModalContext>({ modal: null, setModal: () => { } });