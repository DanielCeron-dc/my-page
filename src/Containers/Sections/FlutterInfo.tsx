import React, { useContext } from 'react';

import logo from "../../Assets/flutter.svg";
import Column from '../../Components/Layout/Column';
import Spacer from '../../Components/Layout/Spacer';
import StadiumButton from '../../Components/UI/StadiumButton';
import TransparentBox from '../../Components/UI/TransparentBox';
import { AuthContext } from '../../Provider/Auth/AuthContext';
import FlutterProjects from '../subSections/FlutterProjects';
import styles from "./animations.module.css";


interface IProps {
    isActive: boolean
}

const FlutterInfo: React.FC<IProps> = (props) => {

    const { user } = useContext(AuthContext);
    const activeModal = () => {

    }


    return <Column height="95%">
        <img src={logo} alt="React Logo" height="90"
            style={{ margin: "15px 0px 15px 0px" }}
            className={props.isActive ? styles.FlutterLogo : ""}
        />
        <h1 style={{ color: "white" }}>Flutter Projects</h1>
        <Spacer />
        <TransparentBox>
            <FlutterProjects />
        </TransparentBox>
        <Spacer />
        {user ? <StadiumButton onClick={activeModal}> + </StadiumButton> : <></>}
    </Column>
}


export default React.memo(FlutterInfo);