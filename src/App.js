import React from "react";
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";

import PlagiarismChecker from "./pages/plagiarism-checker/plagiarism-checker.component";

function App() {
  return (
    <div className="App">
        <Router basename={window.location.pathname || ''}>
            <Routes>
                <Route exact path='/' element={<PlagiarismChecker/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
