import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';


import ExpandedPictureBox from '../../Components/UI/ExpandedPictureBox/ExpandedPictureBox';
import PictureBox from '../../Components/UI/PictureBox';
import Spinner from '../../Components/UI/Spinner/Spinner';
import { ModalContext } from '../../Provider/Modal/Modal.context';
import { ProjectsContext } from '../../Provider/Projects/ProjectsContext';

type ReactProjectsProps = {

};

const ReactProjects: React.FC<ReactProjectsProps> = () => {
    const history = useHistory();
    const { Reactprojects, loading } = useContext(ProjectsContext);
    const { changeModalContent, changeModalState } = useContext(ModalContext);

    const activeModalAndChangeRoute = (index: number, type: string, description: string) => {
        changeModalContent(<ExpandedPictureBox index={index} type={type} />);
        changeModalState(true);
        history.push("/" + description);
    }

    return loading ?
        <Spinner /> :
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            height: "100%",
            overflowY: "scroll",
            overflowX: "hidden"
        }}>
            {
                Reactprojects.map((value, index) => {
                    return <PictureBox
                        description={value.description}
                        link={value.link}
                        key={value.description}
                        onClick={() => activeModalAndChangeRoute(index, "react", value.description)}
                    />
                })
            }
        </div>
}
export default ReactProjects;