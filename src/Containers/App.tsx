import { useState, useContext } from "react"
import { Route } from "react-router-dom";
import './App.css';

import Grow from '../Components/UI/GrowComponents/Grow';
import GrowContainer from '../Components/UI/GrowComponents/GrowContainer';
import PersonalInfo from './Sections/PersonalInfo';
import ReactInfo from './Sections/ReactInfo';
import FlutterInfo from './Sections/FlutterInfo';
import usePageDimension from "../hooks/usePageDimensions";
import Spacer from "../Components/Layout/Spacer";
import Modal from "../Components/Modal/Modal";

import { ModalContext } from "../Provider/Modal/ModalContext";

let gradiant1: string = "linear-gradient(0deg, rgba(50,143,164,1) 0%, rgba(67,0,113,1) 38%)";
let gradiant2: string = "linear-gradient(0deg, rgba(50,143,164,1) 0%, rgba(0,0,0,1) 38%)";
let gradiant3: string = "linear-gradient(0deg, rgba(50,143,164,1) 0%, rgba(0,6,90,1) 38%)";


const Content: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState(0);
  const [, width] = usePageDimension();
  const { modal } = useContext(ModalContext);

  const isSelected = (index: number) => {
    return selectedSection === index;
  }

  const desktop: boolean = width > 1000;
  return <>

    <Modal />
    {modal}
    <GrowContainer column>
      <Grow color={gradiant1} onHover={() => setSelectedSection(1)} expand={isSelected(1)} TableCell={desktop}>
        <PersonalInfo isActive={isSelected(1)} />
        {!desktop && <Spacer height={100} />}
      </Grow>
      <Grow color={gradiant2} onHover={() => setSelectedSection(2)} expand={isSelected(2)} TableCell={desktop}>
        <ReactInfo isActive={isSelected(2)} />
        {!desktop && <Spacer height={100} />}
      </Grow>
      <Grow color={gradiant3} onHover={() => setSelectedSection(3)} expand={isSelected(3)} TableCell={desktop}>
        <FlutterInfo isActive={isSelected(3)} />
        {!desktop && <Spacer height={100} />}
      </Grow>
    </GrowContainer>
  </>
}

function App() {
  return (
    <div className="App" >
      <Route path={["/:type/:index", "/"]} component={Content} />
    </div>
  );
}

export default App;
