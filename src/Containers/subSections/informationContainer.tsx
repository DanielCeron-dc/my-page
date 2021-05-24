import React from 'react';
import Column from '../../Components/Layout/Column';
import StadiumButton from '../../Components/UI/StadiumButton';


import GithubLogo from "../../Assets/github.svg";
import Spacer from '../../Components/Layout/Spacer';

import { MyIcon, MyIcon2 } from "../../Components/MyIcon";
import InformationBoxes from '../../Components/AplicationComponents/InformationBoxes';
import Row from '../../Components/Layout/Row';
import { motion } from 'framer-motion';
import usePageDimension from '../../hooks/usePageDimensions';
import Center from '../../Components/Layout/Center';

interface IProps {
    isHoverOnParent: boolean,
}

const InformationContainer: React.FC<IProps> = (props) => {

    const [, width] = usePageDimension();
    const isMobil: boolean = width < 1000;

    let firstInformation = <Row>
        <Spacer />
        <Spacer />
        <motion.div

            style={{
                borderColor: "violet",
                border: "solid",
                borderRadius: 20,
                margin: 20,
                backgroundColor: "rgba(50, 52, 168, 0.2)",
                width: 300,
                height: 135,
                justifyContent: "center",
                position: "relative"
            }}

            whileHover={{
                backgroundColor: "rgba(50, 52, 168, 0.4)"
            }}

        >
            {!props.isHoverOnParent ?
                <div style={{ margin: 15 }}>
                    <MyIcon />
                </div>

                :
                <motion.div

                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.9 } }}
                >

                    <h4 style={{ margin: 0 }}>
                        Hola este es un pequeño resumen: Futuro ingeniero de software,
                        Frontend Developer y me gusta programar
                        en React y flutter. 😀
                    </h4>
                    <div style={{ position: 'absolute', right: 0, bottom: 0, margin: 10 }}>
                        <MyIcon2 />
                    </div>

                </motion.div>
            }
        </motion.div>
        <Spacer />
    </Row>

    let knowledgeInformation = <Row>
        <Spacer />
        <motion.div
            style={{
                borderColor: "violet",
                border: "solid",
                borderRadius: 20,

                backgroundColor: "rgba(143, 50, 168, 0.2)",
                width: 300,
                height: 135
            }}
            whileHover={{
                backgroundColor: "rgba(143, 50, 168, 0.4)"
            }}
        >
            <h4>
                Conocimientos en:
            </h4>
            <InformationBoxes />
        </motion.div>
        <Spacer />
        <Spacer />
    </Row>

    let contactInformation = <Row>
        <Spacer />
        <Spacer />
        <motion.div
            style={{
                borderColor: "violet",
                border: "solid",
                borderRadius: 20,
                margin: 20,
                backgroundColor: "rgba(168, 50, 54, 0.2)",
                width: 300,
                height: 135
            }}
            whileHover={{
                backgroundColor: "rgba(168, 50, 54, 0.4)"
            }}
        >
            <h4 >
                Contacto: damusan21@gmail.com
            </h4>
            <a href={"https://github.com/DanielCeron-dc"} >
                <StadiumButton onClick={() => { }}>
                    <img src={GithubLogo} alt="github logo" height="50" style={{ borderRadius: 50, }} />
                </StadiumButton>

            </a>

        </motion.div>

        <Spacer />
    </Row>


    return <Center>
        <Column>
            {firstInformation}
            {knowledgeInformation}
            <Spacer />
            {contactInformation}
            {isMobil && <div
                style={{ padding: 20, margin: 10, backgroundColor: "rgba(0,0,0,0.5)", borderRadius: 20 }}
            >Si estas en movil, dale tap a los iconos para interactuar con ellos 🙂
        </div>
            }
        </Column>


    </Center>

}
export default InformationContainer;