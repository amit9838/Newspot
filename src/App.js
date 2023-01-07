import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Settings from './components/Settings';
// console.log(settings.news.country);  

class App extends Component {

  language = localStorage.getItem('language') ? localStorage.getItem('language') : 'en';
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<News key="general" pageSize={localStorage.getItem('pageSize') ? localStorage.getItem('pageSize') : 20} country={localStorage.getItem('country') ? localStorage.getItem('country') : 'in'} category="general" />}></Route>
            <Route path="/business" element={<News key="business" pageSize={localStorage.getItem('pageSize') ? localStorage.getItem('pageSize') : 20} country={localStorage.getItem('country') ? localStorage.getItem('country') : 'in'} category="business" />}></Route>
            <Route path="/entertainment" element={<News key="entertainment" pageSize={localStorage.getItem('pageSize') ? localStorage.getItem('pageSize') : 20} country={localStorage.getItem('country') ? localStorage.getItem('country') : 'in'} category="entertainment" />}></Route>
            <Route path="/health" element={<News key="health" pageSize={localStorage.getItem('pageSize') ? localStorage.getItem('pageSize') : 20} country={localStorage.getItem('country') ? localStorage.getItem('country') : 'in'} category="health" />}></Route>
            <Route path="/science" element={<News key="science" pageSize={localStorage.getItem('pageSize') ? localStorage.getItem('pageSize') : 20} country={localStorage.getItem('country') ? localStorage.getItem('country') : 'in'} category="science" />}></Route>
            <Route path="/sports" element={<News key="sports" pageSize={localStorage.getItem('pageSize') ? localStorage.getItem('pageSize') : 20} country={localStorage.getItem('country') ? localStorage.getItem('country') : 'in'} category="sports" />}></Route>
            <Route path="/technology" element={<News key="technology" pageSize={localStorage.getItem('pageSize') ? localStorage.getItem('pageSize') : 20} country={localStorage.getItem('country') ? localStorage.getItem('country') : 'in'} category="technology" />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;