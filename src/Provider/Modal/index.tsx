import React, { ReactNode, useState } from 'react';

import { ModalContext } from "./ModalContext";

const Index: React.FC = (props) => {
    const [modal, setModal] = useState<ReactNode | null>(null);

    return <ModalContext.Provider value={{ modal, setModal }}>
        {props.children}
    </ModalContext.Provider>
}
export default Index;