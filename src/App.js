import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import settings from './components/settings.json';
import Settings from './components/Settings';
// console.log(settings.news.country);  

class App extends Component {
 
  
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/"  element={<News key="general" pageSize={localStorage.getItem("pageSize")} country={localStorage.getItem("country")} category="general"/>}></Route>
            <Route path="/business"  element={<News key="business" pageSize={localStorage.getItem("pageSize")} country={localStorage.getItem("country")} category="business"/>}></Route>
            <Route path="/entertainment" element={<News key="entertainment" pageSize={localStorage.getItem("pageSize")} country={localStorage.getItem("country")} category="entertainment"/>}></Route>
            <Route path="/health" element={<News  key="health" pageSize={localStorage.getItem("pageSize")} country={localStorage.getItem("country")} category="health"/>}></Route>
            <Route path="/science"  element={<News key="science" pageSize={localStorage.getItem("pageSize")} country={localStorage.getItem("country")} category="science"/>}></Route>
            <Route path="/sports"  element={<News key="sports" pageSize={localStorage.getItem("pageSize")} country={localStorage.getItem("country")} category="sports"/>}></Route>
            <Route path="/technology"  element={<News key="technology" pageSize={localStorage.getItem("pageSize")} country={localStorage.getItem("country")} category="technology"/>}></Route>
            <Route path="/settings"  element={<Settings/>}></Route>
          </Routes> 
        </Router>
      </div>
    );
  }
}

export default App;