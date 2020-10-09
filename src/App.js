import React, { useState } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Line from "./components/Line";
import Table from "./components/Table";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

function App() {
  //Button styles
  const notifyStyle = makeStyles({
    root: {
      background: "#4169e1",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      height: 48,
      padding: "0 30px",
    },
  });
  const notifyButton = notifyStyle();

  const data = React.useMemo(
    () => [
      {
        name: "Tanraj Dhillon",
        size: "4",
        timeReg: "6:30 p.m.",
      },
      {
        name: "Karan Vasdev",
        size: "2",
        timeReg: "5:45 p.m.",
      },
      {
        name: "Shubh Mittal",
        size: "3",
        timeReg: "7:45 p.m.",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name", // accessor is the "key" in the data
      },
      {
        Header: "Size",
        accessor: "size",
      },
      {
        Header: "Time Registered",
        accessor: "timeReg",
      },
      {
        Header: "",
        accessor: "Notify",
        Cell: (row) => (
          <div>
            <Button
              className={notifyButton.root}
              onClick={() => handleButtonClick(row.cell.row.original)}
            >
              notify
            </Button>
          </div>
        ),
      },
    ],
    []
  );

  function handleButtonClick(id) {
    console.log(id);
    const customerName = id.name;
    alert(`Notified ${customerName}`);
  }

  return (
    <div className="App">
      <div className="Container">
        <React.Fragment>
          <Header />
          <Table columns={columns} data={data} />
        </React.Fragment>
      </div>
    </div>
  );
}

export default App;
