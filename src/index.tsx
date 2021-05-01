import React from 'react';
import ReactDOM from 'react-dom'; 
import {AnimateSharedLayout } from "framer-motion";
import {BrowserRouter} from "react-router-dom";  
import './index.css';

import App from './Containers/App';
import ProjectsProvider from "./Provider/Projects"; 
import AuthProvider from "./Provider/Auth"; 
import ModalProvider from "./Provider/Modal"; 


ReactDOM.render(


  <React.StrictMode>
    <BrowserRouter>
      <AnimateSharedLayout type = "crossfade">
        <ProjectsProvider>
          <AuthProvider>
            <ModalProvider>
              <App />
            </ModalProvider>
          </AuthProvider>
        </ProjectsProvider>
      </AnimateSharedLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.lg))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

