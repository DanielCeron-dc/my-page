import React from 'react';
import logo from "../../Assets/perfil.gif"; 
import staticLogo from "../../Assets/Perfil0.png"; 
import Column from '../../Components/Layout/Column';
import Spacer from '../../Components/Layout/Spacer';
import TransparentBox from '../../Components/UI/TransparentBox';

interface IProps {
    hover: boolean
}

const PersonalInfo:React.FC<IProps> = (props) => {
    return  <Column height = "95%">
            {props.hover ? 
                <>
                    <img src={logo} alt="Perfil foto" height = "90" style = {{borderRadius: 50 , }}/> 
                    <h1 style = {{color: "white"}}>Hello i'm Daniel Cerón</h1>
                </>
                :
                <>
                    <img src={staticLogo} alt="Perfil foto" height = "90" style = {{borderRadius: 50}}/> 
                    <h1  style = {{color: "white"}}>Mi Portafolio</h1>
                </>
                }
            <Spacer/>
            <TransparentBox> 
                <h4>
                    Futuro ingeniero de software, 
                    <br/> me gusta programar en React y flutter,
                    <br/> tengo 19 años
                </h4>
                <br/>
                <h4>
                    Familiaridades extra:
                </h4>
                <li>POO</li>
                <li>Java</li>
                <li>C</li>
                <li>C#</li>
            </TransparentBox>
            <Spacer/>
        </Column>
    
}
export default React.memo(PersonalInfo);



