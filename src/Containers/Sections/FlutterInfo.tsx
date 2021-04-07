import React from 'react';
import logo from "../../Assets/flutter.svg"; 
import Column from '../../Components/Layout/Column';
import Spacer from '../../Components/Layout/Spacer';
import TransparentBox from '../../Components/UI/TransparentBox';
import styles from "./animations.module.css";


interface IProps {
    hover: boolean
}

const FlutterInfo:React.FC<IProps> = (props) => {
    return <Column height = "95%">
            <img src={logo} alt="React Logo" height = "90"
                style = {{margin: "15px 0px 15px 0px"}}
                className = {props.hover ? styles.FlutterLogo : ""}
            />
            <h1 style = {{color: "white"}}>Flutter Projects</h1>
            <Spacer/>
            <TransparentBox> 
                
            </TransparentBox>
            <Spacer/>
        </Column>
}


export default React.memo(FlutterInfo);