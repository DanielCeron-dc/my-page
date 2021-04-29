import {useContext, useState} from "react"
import './App.css';

import Grow from '../Components/UI/GrowComponents/Grow';
import GrowContainer from '../Components/UI/GrowComponents/GrowContainer';
import PersonalInfo from './Sections/PersonalInfo';
import ReactInfo from './Sections/ReactInfo';
import FlutterInfo from './Sections/FlutterInfo';
import usePageDimension from "../hooks/usePageDimensions";
import Spacer from "../Components/Layout/Spacer";
import {ModalContext} from "../Provider/Modal/Modal.context";

let gradiant1:string = "linear-gradient(0deg, rgba(97,218,251,1) 21%, rgba(94,33,107,1) 71%)";
let gradiant2:string = "linear-gradient(0deg, rgba(97,218,251,1) 16%, rgba(32,35,42,1) 75%)";
let gradiant3:string = "linear-gradient(0deg, rgba(97,218,251,1) 21%, rgba(5,59,103,1) 76%)";

function App() {
  const [HoverSectionOne, setHoverSectionOne] = useState<boolean>(false);
  const [HoverSectionTwo, setHoverSectionTwo] = useState<boolean>(false);
  const [HoverSectionThree, setHoverSectionThree] = useState<boolean>(false);
  const [, width] = usePageDimension(); 
  const {Modal} = useContext(ModalContext);

  const desktop:boolean = width > 1000; 
  return (
    <div className="App" >
        {Modal}
        <GrowContainer column>
          <Grow color = {gradiant1} onHover = {() => setHoverSectionOne(true)} onMouseLeave = {() => setHoverSectionOne(false)} TableCell = {desktop}>
            <PersonalInfo hover={HoverSectionOne}/>
            {!desktop ? <Spacer height = {100}/> : <></>}
          </Grow>
          <Grow color = {gradiant2} onHover = {() => setHoverSectionTwo(true)} onMouseLeave = {() => setHoverSectionTwo(false)} TableCell = {desktop}>
            <ReactInfo  hover = {HoverSectionTwo}/>
            {!desktop ? <Spacer height = {100}/> : <></>}
          </Grow>
          <Grow color = {gradiant3} onHover = {() => setHoverSectionThree(true)} onMouseLeave = {() => setHoverSectionThree(false)} TableCell = {desktop}>
            <FlutterInfo hover = {HoverSectionThree}/>
            {!desktop ? <Spacer height = {100}/> : <></>}
          </Grow>
        </GrowContainer>
    </div>
  );
}

export default App;
