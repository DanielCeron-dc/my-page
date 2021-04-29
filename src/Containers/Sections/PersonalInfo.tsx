import React, { useContext, useEffect, useState } from 'react';
import logo from "../../Assets/perfil.gif"; 
import staticLogo from "../../Assets/Perfil0.png"; 

import Column from '../../Components/Layout/Column';
import Spacer from '../../Components/Layout/Spacer';
import TransparentBox from '../../Components/UI/TransparentBox';
import InformationContainer from '../subSections/informationContainer';
import {signInWithGoogle, singOutFromGoogle } from "../../firebase";
import { AuthContext } from '../../Provider/Auth/AuthContext';

interface IProps {
    hover: boolean
}

const PersonalInfo:React.FC<IProps> = (props) => {

    const {user} = useContext(AuthContext); 
    const [Count, setCount] = useState(0);
    useEffect(() => {
        if(Count === 3){
            if (user == null ){
                signInWithGoogle();
            }else{
                singOutFromGoogle();
            }
        }
        setTimeout(() => {
            setCount(0);
        }, 1000);
    }, [Count, user]);

    return <Column height="95%">
        {props.hover ?
            <>
                <img src={logo} alt="Perfil foto" height="90" style={{ borderRadius: 50, }} />
                <h1 style={{ color: "white" }}  onClick={() => setCount(count => count+1)}>Hello i'm Daniel Cerón</h1>
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
        {user ? <h6>{user.email}</h6> : <></> }
        <Spacer />
    </Column>
}
export default React.memo(PersonalInfo);



