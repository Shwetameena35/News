import "./App.css";
import NavBar from "./Components/NavBar";
import React, { useState} from "react";
import News from "./Components/News";
import { BrowserRouter as Router, Route,Routes,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


 const App = ()=>  {
 const pageSize = 15;
 const apiKey = process.env.REACT_APP_NEWS_API
  
  const [progress, setProgress] = useState(0)
  
 
    return (
      <div>
        <Router>
          <NavBar></NavBar>
          <LoadingBar
          height={3 }
        color='#f11946'
        progress={progress} apiKey={apiKey}
       
      />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress = {setProgress} apiKey={apiKey}  
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="General"
                ></News>
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/business"
              element={
                <News setProgress = {setProgress} apiKey={apiKey}  
                  key="business"
                  pageSize={5}
                  country="in"
                  category="business"
                ></News>
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress = {setProgress}  apiKey={apiKey} 
                  key="entertainment"
                  pageSize={5}
                  country="in"
                  category="entertainment"
                ></News>
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/general"
              element={
                <News setProgress = {setProgress} apiKey={apiKey}  
                  key="general"
                  pageSize={5}
                  country="in"
                  category="general"
                ></News>
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/health"
              element={
                <News setProgress = {setProgress} apiKey={apiKey}  
                  key="health"
                  pageSize={5}
                  country="in"
                  category="health"
                ></News>
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/science"
              element={
                <News setProgress = {setProgress}  apiKey={apiKey} 
                  key="science"
                  pageSize={5}
                  country="in"
                  category="science"
                ></News>
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News setProgress = {setProgress}  apiKey={apiKey} 
                  key="sports"
                  pageSize={5}
                  country="in"
                  category="sports"
                ></News>
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News setProgress = {setProgress} apiKey={apiKey}  
                  key="technology"
                  pageSize={5}
                  country="in"
                  category="technology"
                ></News>
              }
            >
              {" "}
            </Route>
          </Routes>
        </Router>
      </div>
    );
  }
export default App;
