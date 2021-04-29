import React, { useEffect, useReducer } from 'react';
import ProjectsReducer, {initialState, IProjectInfo} from "./ProjectsReducer"; 
import { ProjectsContext} from "./ProjectsContext";
import { firebase} from "../../firebase";

const db = firebase.database(); 


const Index:React.FC= (props) => {
    
    const [state, dispatch] = useReducer(ProjectsReducer, initialState); 

    useEffect(() => {
        const ReactProjects: IProjectInfo[] = []; 
        const FlutterProjects: IProjectInfo[] = []; 
        db.ref().once("value").then(snapshot => {
            snapshot.forEach(child => {
                const value:IProjectInfo = child.val();
                value.key = child.key ? child.key : "";
                if(value.language === "React"){
                    ReactProjects.push(value);
                }else{
                    FlutterProjects.push(value);
                }
            });
            dispatch({type: "FETCH_PROJECTS", payload: {FlutterProjects, ReactProjects}});
            dispatch({type: "CHANGE_LOADING_STATE", payload: {loading: false}});
        })
    }, []);

    const AddNewProject = (description: string, link: string, language: string) =>  {
        db.ref().push({description, link, language});
    }

    return <ProjectsContext.Provider value = {{
        Reactprojects: state.ReactProjects , 
        FlutterProjects: state.FlutterProjects,  
        loading: state.loading, 
        addNewProject:AddNewProject
        }}>
        {props.children}
    </ProjectsContext.Provider>
}
export default Index;