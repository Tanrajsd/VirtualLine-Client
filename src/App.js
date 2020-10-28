import React, { useState } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Line from "./components/Line"; // Line and CustomerItem arent being used
import MyTable from "./components/MyTable";




function App() {

  return (
    <div className="App">
      <div className="Container">
        <React.Fragment>
          <Header />
            <MyTable />
        </React.Fragment>
      </div>
    </div>
    );  

}

export default App