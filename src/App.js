import './App.css';
import React, {useState } from 'react';
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Settings from './components/Settings';
import About from './components/About';
// console.log(settings.News setProgress  = {this.setProgress} .country);  

const App = () => {

  const [progress, setProgress] = useState(0);
 
  // setProgress = (setProgress )=> {
  //   this.setState({progress:setProgress })
  // }

  const language = localStorage.getItem('language') ? localStorage.getItem('language') : 'en';
  
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route path="/" element={<News  key="general" setProgress  = {setProgress} pageSize={localStorage.getItem('pageSize') ? localStorage.getItem('pageSize') : 20} country={localStorage.getItem('country') ? localStorage.getItem('country') : 'in'} category="general" />}></Route>
            <Route path="/business" element={<News  key="business" setProgress  = {setProgress} pageSize={localStorage.getItem('pageSize') ? localStorage.getItem('pageSize') : 20} country={localStorage.getItem('country') ? localStorage.getItem('country') : 'in'} category="business" />}></Route>
            <Route path="/entertainment" element={<News  key="entertainment" setProgress  = {setProgress} pageSize={localStorage.getItem('pageSize') ? localStorage.getItem('pageSize') : 20} country={localStorage.getItem('country') ? localStorage.getItem('country') : 'in'} category="entertainment" />}></Route>
            <Route path="/health" element={<News  key="health" setProgress  = {setProgress} pageSize={localStorage.getItem('pageSize') ? localStorage.getItem('pageSize') : 20} country={localStorage.getItem('country') ? localStorage.getItem('country') : 'in'} category="health" />}></Route>
            <Route path="/science" element={<News  key="science" setProgress  = {setProgress} pageSize={localStorage.getItem('pageSize') ? localStorage.getItem('pageSize') : 20} country={localStorage.getItem('country') ? localStorage.getItem('country') : 'in'} category="science" />}></Route>
            <Route path="/sports" element={<News  key="sports" setProgress  = {setProgress} pageSize={localStorage.getItem('pageSize') ? localStorage.getItem('pageSize') : 20} country={localStorage.getItem('country') ? localStorage.getItem('country') : 'in'} category="sports" />}></Route>
            <Route path="/technology" element={<News  key="technology" setProgress  = {setProgress} pageSize={localStorage.getItem('pageSize') ? localStorage.getItem('pageSize') : 20} country={localStorage.getItem('country') ? localStorage.getItem('country') : 'in'} category="technology" />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }


export default App;