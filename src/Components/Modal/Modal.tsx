import { AnimatePresence } from 'framer-motion';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import BackDrop from './BackDrop';
import ExpandedPictureBox from '../UI/ExpandedPictureBox/ExpandedPictureBox';
import { ProjectsContext } from '../../Provider/Projects/ProjectsContext';
import { IProjectInfo } from '../../Provider/Projects/ProjectsReducer';


const Modal: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<IProjectInfo | undefined>(undefined);

    const { FlutterProjects, Reactprojects, loading } = useContext(ProjectsContext);

    const { index, type } = useParams<{ type: string, index: string }>();
    const history = useHistory();

    const onBackDropClick = useCallback(() => {
        history.push("/");
    }, [history]);

    useEffect(() => {
        if (!loading) {
            const newSelectedProject = type === "react" ? Reactprojects[parseInt(index)] : FlutterProjects[parseInt(index)];
            if (!newSelectedProject) {
                history.push("/");
            }
            setSelectedProject(newSelectedProject);
        }
    }, [loading, index, type]);

    return <AnimatePresence>
        {selectedProject && <BackDrop onClick={onBackDropClick}>
            <ExpandedPictureBox projectInfo={selectedProject} />
        </BackDrop>}
    </AnimatePresence>


}
export default Modal;