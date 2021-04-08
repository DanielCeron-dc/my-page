import React from 'react';
import Column from '../../Components/Layout/Column';
import StadiumButton from '../../Components/UI/StadiumButton';
import GithubLogo from "../../Assets/github.svg";
import Spacer from '../../Components/Layout/Spacer';



const InformationContainer:React.FC = () => {
    
    return <Column>
    <h4>
        Futuro ingeniero de software, 
        <br/> me gusta programar en React y flutter,
        <br/> tengo 19 años
    </h4>
    <h4>
        Familiaridades extra:
    </h4>

    <li>POO</li>
    <li>Redux-ReduxToolkit</li>
    <li>Redux-saga-thunk</li>
    <li>Java</li>
    <li>C</li>
    <li>C#</li>
    <Spacer/>

    <h4>
        Contacto: damusan21@gmail.com
    </h4>

    <a href = {"https://github.com/DanielCeron-dc"}>
        <StadiumButton onClick = {() => {}}>
                <img src={GithubLogo} alt="github logo" height = "50" style = {{borderRadius: 50 , }}/> 
            </StadiumButton> 
    </a>
    </Column>
}
export default InformationContainer;