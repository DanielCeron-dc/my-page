import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import PictureBox from '../../Components/UI/PictureBox';
import Spinner from '../../Components/UI/Spinner/Spinner';

import { ProjectsContext } from '../../Provider/Projects/ProjectsContext';

const ReactProjects: React.FC = () => {
    const history = useHistory();
    const { Reactprojects, loading } = useContext(ProjectsContext);

    const activeModalAndChangeRoute = (index: number, type: string) => {
        history.push("/" + type + "/" + index);
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
                        key={value.id}
                        projectInfo={value}
                        onClick={() => activeModalAndChangeRoute(index, "react")}
                    />
                })
            }
        </div>
}

export default React.memo(ReactProjects);