import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/layout/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route } from "react-router-dom";
import AddProject from './components/project/AddProject';
import UpdateProject from './components/project/UpdateProject';
import {Provider } from "react-redux";
import store from './store';
import ProjectBoard from './components/projectBoard/ProjectBoard';
import AddProjecTask from './components/projectBoard/projectTask/AddProjecTask';
import UpdateProjectTask from './components/projectBoard/projectTask/UpdateProjectTask';


function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/addProject" component={AddProject}/>
        <Route exact path="/updateProject/:id" component={UpdateProject}/>
        <Route exact path="/projectBoard/:id" component={ProjectBoard}/>
        <Route exact path="/addProjectTask/:id" component={AddProjecTask}/>
        <Route exact path="/updateProjectTask/:backlog_id/:projectTask_id" component={UpdateProjectTask}/>
        {
        //  <Footer/>
        }
      </div>
    </Router>
    </Provider>
  );
}

export default App;
