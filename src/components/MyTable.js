import React, { useState } from "react";
import MyButton from "./MyButton";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
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

// function contains(a, obj) {
//   console.log(a);
//   for (var i = 0; i < 8; i++) {
//     console.log(a[i]);
//     console.log(obj);
//       if (a[i] == obj) {
//         console.log("its true");
//           return true;
//       }
//   }
//   return false;
// }


export default function MyTable() {
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
    const [rows,setRows] = useState ([
        {
          name: "Tanraj Dhillon",
          size: "4",
          timeReg: "6:30 p.m.",
          notified: false,
          id: generate()
        },
        {
          name: "Karan Vasdev",
          size: "2",
          timeReg: "5:45 p.m.",
          notified: false,
          id: generate()
        },
        {
          name: "Shubh Mittal",
          size: "3",
          timeReg: "7:45 p.m.",
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

    function setRowNotified(row) {
      alert(row.name + " has been notified");
      console.log(row);
      let newRows = [...rows];
      let index = rows.findIndex(item => item.id == row.id);
      newRows[index] = {
        name: newRows[index].name,
        size: newRows[index].size,
        timeReg: newRows[index].timeReg,
        notified: true,
        id: newRows[index].id
      }

      setRows (newRows);
  }

  function deleteRow(row) {
    alert(row.name + " has been deleted");
    console.log(row);
    let newRows = rows.filter(item => item.id != row.id);
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