import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";


import ExpandedPictureBox from '../../Components/UI/ExpandedPictureBox/ExpandedPictureBox';
import PictureBox from '../../Components/UI/PictureBox';
import Spinner from '../../Components/UI/Spinner/Spinner';
import { ModalContext } from '../../Provider/Modal/Modal.context';
import { ProjectsContext } from '../../Provider/Projects/ProjectsContext';

type FlutterProjectsProps = {

};

const FlutterProjects: React.FC<FlutterProjectsProps> = () => {
    const history = useHistory();
    const { FlutterProjects, loading } = useContext(ProjectsContext);
    const { changeModalContent, changeModalState } = useContext(ModalContext);

    const activeModalAndChangeRoute = (index: number, type: string) => {
        changeModalContent(<ExpandedPictureBox index={index} type={type} />);
        changeModalState(true);
        history.push("/" + index);
    }

    return loading ?
        <Spinner />
        :
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            height: "100%",
            overflowY: "scroll"
        }}>
            {
                FlutterProjects.map((value, index) => {
                    return <PictureBox
                        projectInfo={value}
                        key={value.description}
                        onClick={() => activeModalAndChangeRoute(index, "react")}
                    />
                })
            }
        </div>
}
export default FlutterProjects;