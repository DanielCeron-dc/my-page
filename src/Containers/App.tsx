import {useState} from "react"
import Grow from '../Components/UI/GrowComponents/Grow';
import GrowContainer from '../Components/UI/GrowComponents/GrowContainer';
import './App.css';
import PersonalInfo from './Sections/PersonalInfo';
import ReactInfo from './Sections/ReactInfo';
import FlutterInfo from './Sections/FlutterInfo';

let gradiant1:string = "linear-gradient(0deg, rgba(97,218,251,1) 21%, rgba(94,33,107,1) 71%)";
let gradiant2:string = "linear-gradient(0deg, rgba(97,218,251,1) 16%, rgba(32,35,42,1) 75%)";
let gradiant3:string = "linear-gradient(0deg, rgba(97,218,251,1) 21%, rgba(5,59,103,1) 76%)";

function App() {
  const [HoverSectionOne, setHoverSectionOne] = useState<boolean>(false);
  const [HoverSectionTwo, setHoverSectionTwo] = useState<boolean>(false);
  const [HoverSectionThree, setHoverSectionThree] = useState<boolean>(false);
  
  return (
    <div className="App" >
        <GrowContainer>
          <Grow color = {gradiant1} onHover = {() => setHoverSectionOne(true)} onMouseLeave = {() => setHoverSectionOne(false)}>
            <PersonalInfo hover={HoverSectionOne}/>
          </Grow>
          <Grow color = {gradiant2} onHover = {() => setHoverSectionTwo(true)} onMouseLeave = {() => setHoverSectionTwo(false)}>
            <ReactInfo  hover = {HoverSectionTwo}/>
          </Grow>
          <Grow color = {gradiant3} onHover = {() => setHoverSectionThree(true)} onMouseLeave = {() => setHoverSectionThree(false)}>
            <FlutterInfo hover = {HoverSectionThree}/>
          </Grow>
        </GrowContainer>
    </div>
  );
}

export default App;
