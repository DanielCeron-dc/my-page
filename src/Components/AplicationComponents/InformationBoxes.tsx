import React, { ReactNode, useContext, useState } from 'react';
import MiniInformationBox from '../UI/MiniInformationBox';

import CreatorInformation from '../UI/CreatorInformation';
import { AnimatePresence } from 'framer-motion';

import { ReactComponent as SvgPOO } from "../../Assets/object.svg";
import { ReactComponent as SvgRedux } from "../../Assets/redux.svg";
import { ReactComponent as SvgJava } from "../../Assets/java.svg";
import { ReactComponent as SvgC } from "../../Assets/c.svg";
import { ReactComponent as SvgCsharp } from "../../Assets/csharp.svg";
import usePageDimension from '../../hooks/usePageDimensions';
import BottomModal from '../Modal/BottomModal';
import { ModalContext } from '../../Provider/Modal/ModalContext';

let firstCreator = <div>
    Icon made by{" "}
    <a href="https://www.freepik.com" title="Freepik">Freepik</a>
    {" "}from
    <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
</div>

let SecondCreator = <div>
    Icon from
<a href="https://worldvectorlogo.com/logo/redux" title="redux"> worldvectorlogo.com</a>
</div>

interface objectInfo {
    title: string,
    description: string,
    iconCreator: ReactNode,
    icon: ReactNode
}


let information: objectInfo[] = [

    {
        title: "POO",
        description: "Entiendo el paradigma de programacion Orientada a objetos y funcional, como tambien patrones de diseño",
        iconCreator: firstCreator,
        icon: <SvgPOO fill="red" style={{ width: 50, height: 50 }} />
    },
    {
        title: "REDUX",
        description: "conozco como manejar esta libreria y sus midlewares como redux-thunk o un poco de redux-saga, tambien se manejar la variante Redux-Toolkit",
        iconCreator: SecondCreator,
        icon: <SvgRedux fill="blue" style={{ width: 50, height: 50 }} />
    },
    {
        title: "JAVA",
        description: "Estudié este lenguaje durante dos semestres",
        iconCreator: firstCreator,
        icon: <SvgJava style={{ width: 50, height: 50 }} />
    },
    {
        title: "C",
        description: "Logré conocer y manejar un poco este lenguaje durante todo un semestre",
        iconCreator: firstCreator,
        icon: <SvgC style={{ width: 50, height: 50 }} />
    },
    {
        title: "C#",
        description: "Estudié este lenguaje durante dos semestres, siendo mi primer acercamiento a la Programación orientada a objetos",
        iconCreator: firstCreator,
        icon: <SvgCsharp style={{ width: 50, height: 50 }} />
    },
]


const InformationBoxes: React.FC = () => {

    const [showSvgCreator, setShowSvgCreator] = useState<ReactNode | null>();
    const [, width] = usePageDimension();
    const isMobil: boolean = width < 1000;
    const { setModal } = useContext(ModalContext);

    const showModalOnMobile = (index: number) => {
        if (isMobil) {
            setModal(<BottomModal
                onClose={() => setModal(null)}
                title={information[index].title}
                description={information[index].description}
            >
                {information[index].iconCreator}
            </BottomModal>);
        }
    }

    return <div style={{ display: 'flex' }}>

        <div style={{ position: "fixed", zIndex: 30 }}>
            <AnimatePresence>
                {showSvgCreator && !isMobil && <CreatorInformation >{showSvgCreator}</CreatorInformation>}
            </AnimatePresence>
        </div>

        {information.map((info, index) => {
            return <MiniInformationBox
                onCLick={() => showModalOnMobile(index)}
                key={info.title}
                onMouseOver={() => setShowSvgCreator(info.iconCreator)}
                onMouseLeave={() => setShowSvgCreator(null)}
                title={info.title}
                description={info.description}
                isMobile={isMobil}
            >
                {info.icon}
            </MiniInformationBox>
        })}


    </div>
}
export default InformationBoxes;