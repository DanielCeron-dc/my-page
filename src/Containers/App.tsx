import {useContext, useState} from "react"
import {Route, useParams} from "react-router-dom"; 
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


const Content:React.FC = ()  => {
  const [selectedSection, setSelectedSection] = useState(0); 
  const [, width] = usePageDimension(); 
  const {Modal} = useContext(ModalContext);
  let {id} = useParams <{id:string}>();

  const isSelected = (index:number) =>{
    return selectedSection===index; 
  }

  const desktop:boolean = width > 1000; 
  return  <>
  {Modal}
  <GrowContainer column>
    <Grow color = {gradiant1} onHover = {() => setSelectedSection(1)} expand={isSelected(1)} TableCell = {desktop}>
      <PersonalInfo isActive={isSelected(1)}/>
      {!desktop && <Spacer height = {100}/>}
    </Grow>
    <Grow color = {gradiant2} onHover = {() => setSelectedSection(2)} expand={isSelected(2)} TableCell = {desktop}>
      <ReactInfo  isActive = {isSelected(2)}/>
      {!desktop && <Spacer height = {100}/>}
    </Grow>
    <Grow color = {gradiant3} onHover = {() => setSelectedSection(3)} expand={isSelected(3)} TableCell = {desktop}>
      <FlutterInfo isActive = {isSelected(3)}/>
      {!desktop && <Spacer height = {100}/>}
    </Grow>
  </GrowContainer>
</> 
}

function App() {
  return (
    <div className="App" >
        <Route path = {["/:id", "/" ]} component = {Content}/>
    </div>
  );
}

export default App;
