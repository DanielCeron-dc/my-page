import React from 'react';
import logo from "../../Assets/logo.svg"; 
import Column from '../../Components/Layout/Column';
import Spacer from '../../Components/Layout/Spacer';
import TransparentBox from '../../Components/UI/TransparentBox';
import ReactProjects from '../subSections/ReactProjects';
import styles from "./animations.module.css";
import "../App.css";


interface IProps {
    hover: boolean
}
const ReactInfo:React.FC<IProps> = (props) => {
    return <Column height = "95%">
            <img src={logo} alt="React Logo" height = "90" 
                style = {{margin: "15px 0px 0px 0px"}} 
                className = {props.hover ? styles.ReactLogo : ""}
            />
            <h1 style = {{color: "white"}}>React Projects</h1>
            <Spacer/>
            <TransparentBox> 
                <ReactProjects/>
            </TransparentBox>
            <Spacer/>
        </Column>
}
export default React.memo(ReactInfo);