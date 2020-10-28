import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

    
  //Button styles
  const Style = makeStyles({
    notify: {
      background: "#4169e1",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      height: 48,
      padding: "0 30px",
    },
    delete: {
      background: "red",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      height: 48,
      padding: "0 30px",
    },
  });

export default function MyButton ({typeNotify,row,Rowfn}) {

    const buttonStyle = Style();
    let classname = null;
    let buttonName = null;
    if (typeNotify) {
      classname = buttonStyle.notify;
      buttonName = "notify";

    } else {
      classname = buttonStyle.delete;
      buttonName = "delete";
    }


    return (
        <div>
          <Button
            className={classname}
            onClick={() => handleButtonClick(typeNotify,row,Rowfn)}
          >
          {buttonName}
        </Button>
      </div>
    )
}

function handleButtonClick(typeNotify,row,Rowfn) {
  // if (typeNotify) {
    Rowfn(row);
  // } 
}






// function handleButtonClick(rownum) {
    // console.log(rownum.rownum.row.original.name);
    // alert("pressed");

    // setRows (currRows => [...currRows, {
    //   name: "Shubh Mittal",
    //   size: "3",
    //   timeReg: "7:45 p.m.",
    //   notified: false,
    // }])
    
    // const customerName = row.cell.row.original.name;
    // alert(`Notified ${customerName}`);
    // const rowid = row.row.id;
    // setNotified (currState => [...currState , {rowid}])
    // let pre = data.slice(0,rowid);
    // let curr = data[rowid];
    // let post = data.slice(rowid+1);
    // curr.name = "test";
    // setData (currState => [pre,curr,post]);
    // setData(data => ({
    //   data: [
    //       ...data.slice(0,1),
    //       {
    //           ...data[1],
    //           name: 'newName',
    //       },
    //       ...data.slice(2)
    //   ]
    // }));
    // var newArray = [];
    // var i;
    // for (i = 0; i < data.length; i++) {
    //   let item = data[i];
    //   if (item.name == row.row.original.name) {
    //     newArray.push({name: "test", size: item.size, timeReg:item.timeReg, notified:item.notified})
    //   } else {
    //     newArray.push({name: item.name, size: item.size, timeReg:item.timeReg, notified:item.notified})
    //   }     
    // }
    // console.log(newArray);

    // setData(newArray);

      // ...currState.filter(x => row.row.original.name !== x.name),
      // { notified: true }
      // ])

    
  // }
