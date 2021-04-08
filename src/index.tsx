import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import './index.css';
import ProjectsProvider from "./Provider"; 
import AuthProvider from "./Provider/Auth"; 

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ProjectsProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ProjectsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.lg))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

