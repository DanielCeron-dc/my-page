import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";


import PictureBox from '../../Components/UI/PictureBox';
import Spinner from '../../Components/UI/Spinner/Spinner';
import { ProjectsContext } from '../../Provider/Projects/ProjectsContext';

type FlutterProjectsProps = {

};

const FlutterProjects: React.FC<FlutterProjectsProps> = () => {
    const history = useHistory();
    const { FlutterProjects, loading } = useContext(ProjectsContext);

    const changeRoute = (index: number) => {
        history.push("/flutter/" + index);
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
                        key={value.id}
                        onClick={() => changeRoute(index)}
                    />
                })
            }
        </div>
}
export default FlutterProjects;