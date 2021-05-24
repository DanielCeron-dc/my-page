import React, { useContext, useState } from 'react';
import "../App.css";

import logo from "../../Assets/logo.svg";
import Column from '../../Components/Layout/Column';
import Spacer from '../../Components/Layout/Spacer';
import TransparentBox from '../../Components/UI/TransparentBox';
import ReactProjects from '../subSections/ReactProjects';
import styles from "./animations.module.css";
import StadiumButton from '../../Components/UI/StadiumButton';
import { AuthContext } from '../../Provider/Auth/AuthContext';
import AddNewProjectMenu from '../../Components/UI/AddNewProjectMenu';



interface IProps {
    isActive: boolean
}
const ReactInfo: React.FC<IProps> = (props) => {
    const [isActiveAddProjectMenu, setIsActiveAddProjectMenu] = useState<boolean>(false);
    const { user } = useContext(AuthContext);

    const activeModal = () => {
        setIsActiveAddProjectMenu(true);
    }


    return <Column height="95%">
        <img src={logo} alt="React Logo" height="90"
            style={{ margin: "15px 0px 0px 0px" }}
            className={props.isActive ? styles.ReactLogo : ""}
        />
        <h1 style={{ color: "white" }}>React Projects</h1>
        <Spacer />
        <TransparentBox>
            <ReactProjects />
        </TransparentBox>
        <Spacer />
        {user ? <StadiumButton onClick={activeModal}> + </StadiumButton> : <></>}
        {isActiveAddProjectMenu && <AddNewProjectMenu language="react" closeMenu={() => setIsActiveAddProjectMenu(false)} />}
    </Column>
}
export default React.memo(ReactInfo);