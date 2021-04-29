import {createContext} from 'react';
import { IProjectInfo } from './ProjectsReducer';

interface IProjects {
    Reactprojects: IProjectInfo[];
    FlutterProjects: IProjectInfo[];
    loading: boolean;
    addNewProject: (description: string, link: string, language: string) => void; 
}

export const ProjectsContext = createContext<IProjects>({Reactprojects: [], FlutterProjects: [] ,loading: true, addNewProject: () => {}}); 


