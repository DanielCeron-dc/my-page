import React from 'react';
import logo from "../../Assets/perfil.gif"; 
import staticLogo from "../../Assets/Perfil0.png"; 

import Column from '../../Components/Layout/Column';
import Spacer from '../../Components/Layout/Spacer';
import TransparentBox from '../../Components/UI/TransparentBox';
import InformationContainer from '../subSections/informationContainer';

interface IProps {
    hover: boolean
}

const PersonalInfo:React.FC<IProps> = (props) => <Column height="95%">
    {props.hover ?
        <>
            <img src={logo} alt="Perfil foto" height="90" style={{ borderRadius: 50, }} />
            <h1 style={{ color: "white" }}>Hello i'm Daniel Cerón</h1>
        </>
        :
        <>
            <img src={staticLogo} alt="Perfil foto" height="90" style={{ borderRadius: 50 }} />
            <h1 style={{ color: "white" }}>Mi Portafolio</h1>
        </>}
    <Spacer />
    <TransparentBox>
        <InformationContainer />
    </TransparentBox>
    <Spacer />
</Column>
export default React.memo(PersonalInfo);



