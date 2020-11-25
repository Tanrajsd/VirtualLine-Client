import React, { useState } from "react";
import MyButton from "./MyButton";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TimeElapsed from "./TimeElapsed";
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {generate} from "shortid"; // need to also install this dependency before running and @types/shortid


import {
  useTable,
  useResizeColumns,
  useFlexLayout,
  useRowSelect,
} from "react-table";

export default function MyTable() {
    var flag =0;
  
    const [rows,setRows] = useState ([
        {
          name: "Tanraj Dhillon",
          size: "4",
          timeReg: "6:30 p.m.",
          timeElapsed: 10,
          notified: false,
          id: generate()
        },
        {
          name: "Karan Vasdev",
          size: "2",
          timeReg: "5:45 p.m.",
          timeElapsed: 0,
          notified: false,
          id: generate()
        },
        {
          name: "Shubh Mittal",
          size: "3",
          timeReg: "7:45 p.m.",
          timeElapsed: 3,
          notified: false,
          id: generate()
        }]);


    const useStyles = makeStyles({
      table: {
      width: "100%",
      border: "solid 1px blue" 
      },
      column: {
        borderBottom: "solid 3px red",
        background: "aliceblue",
        color: "black",
        fontWeight: "bold",
      },
      rownormal: {
        padding: "10px",
        border: "solid 1px gray",
        background: "papayawhip",
      },
      rownotified: {
        padding: "10px",
        border: "solid 1px gray",
        background: "salmon"
      }
    });

    function incrementTime(row) {
      if (!row.name) {
        return;
      }
      console.log(row);
      let newRows = [...rows];
      let index = rows.findIndex(item => item.id === row.id);
      newRows[index] = {
        name: newRows[index].name,
        size: newRows[index].size,
        timeReg: newRows[index].timeReg,
        timeElapsed: newRows[index].timeElapsed + 1,
        notified: newRows[index].notified,
        id: newRows[index].id
      }
      console.log("time incremented");
      setRows (newRows);
      // setInterval(incrementTime(row),10000);
    }

    function setRowNotified(row) {
      alert(row.name + " has been notified");
      console.log(row);
      let newRows = [...rows];
      let index = rows.findIndex(item => item.id === row.id);
      newRows[index] = {
        name: newRows[index].name,
        size: newRows[index].size,
        timeReg: newRows[index].timeReg,
        timeElapsed: newRows[index].timeElapsed,
        notified: true,
        id: newRows[index].id
      }

      setRows (newRows);
  }

  function deleteRow(row) {
    alert(row.name + " has been deleted");
    console.log(row);
    let newRows = rows.filter(item => item.id !== row.id);
    setRows (newRows);
}

  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className = {classes.column}>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Size</TableCell>
            <TableCell align="right">Time Registered</TableCell>
            <TableCell align="right">Time Elapsed</TableCell>
            <TableCell align="right">Notify</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            let classname = classes.rownormal;
            let deleteButton = "";
            if (row.notified) { 
              classname = classes.rownotified;
              deleteButton = <MyButton typeNotify = {false} row = {row} Rowfn= {deleteRow} />;
            }
            return(
              <TableRow className = {classname} key={row.id}> 
                <TableCell align="right" component="th" scope="row"> {row.name} </TableCell>
                <TableCell align="right">{row.size}</TableCell>
                <TableCell align="right">{row.timeReg}</TableCell>
                <TableCell align="right"><TimeElapsed/></TableCell>
                <MyButton typeNotify = {true} row = {row} Rowfn= {setRowNotified} />
                {deleteButton}
              </TableRow>
          );
        })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}