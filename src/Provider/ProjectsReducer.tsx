export interface IState {
    ReactProjects:IProjectInfo[],
    FlutterProjects: IProjectInfo[] ,
    loading: boolean
}

export interface IProjectInfo {
    description: string;
    link: string; 
    programmingLanguage: string; 
}

export const initialState:IState = {
    ReactProjects: [],
    FlutterProjects: [],
    loading: true
}

type IAction = 
 | {
    type: 'FETCH_PROJECTS',
    payload: {
        ReactProjects:IProjectInfo[],
        FlutterProjects:IProjectInfo[],
    },
} | {
    type: 'CHANGE_LOADING_STATE',
    payload: {
        loading: boolean,
    },
}

export default (state:IState, action:IAction ): IState => {
    switch (action.type) {
        case "CHANGE_LOADING_STATE":
            return {...state, loading: action.payload.loading} 
        case "FETCH_PROJECTS":
            return {...state, ReactProjects: action.payload.ReactProjects, FlutterProjects: action.payload.FlutterProjects} 
        default:
            return state; 
    }
}



