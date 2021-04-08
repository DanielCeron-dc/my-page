import React, { useContext, useState } from 'react';
import logo from "../../Assets/logo.svg"; 
import Column from '../../Components/Layout/Column';
import Spacer from '../../Components/Layout/Spacer';
import TransparentBox from '../../Components/UI/TransparentBox';
import ReactProjects from '../subSections/ReactProjects';
import styles from "./animations.module.css";
import "../App.css";
import StadiumButton from '../../Components/UI/StadiumButton';
import BackDrop from '../../Components/UI/BackDrop';
import AddNewProjectMenu from '../../Components/UI/AddNewProjectMenu';
import { AuthContext } from '../../Provider/Auth/AuthContext';


interface IProps {
    hover: boolean
}
const ReactInfo:React.FC<IProps> = (props) => {

    const [AddNewProject, setAddNewProjectMenu] = useState<boolean>(false); 
    const {user} = useContext(AuthContext); 

    return <Column height = "95%">

            {
                AddNewProject? <BackDrop onClick = {() => setAddNewProjectMenu(false)}>
                    <AddNewProjectMenu language = "React"/>
                </BackDrop> : <></>
            }

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
            {user ? <StadiumButton onClick= {() => {setAddNewProjectMenu(true) 
            }}> + </StadiumButton> : <></> }
        </Column>
}
export default React.memo(ReactInfo);