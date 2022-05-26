import React from "react";
import {HashRouter} from "react-router-dom";

import PlagiarismChecker from "./pages/plagiarism-checker/plagiarism-checker.component";

function App() {
  return (
    <div className="App">
        <HashRouter basename={process.env.PUBLIC_URL}>
            <PlagiarismChecker />
        </HashRouter>
    </div>
  );
}

export default App;
