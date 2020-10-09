import React from "react";

export default function CustomerItem(props) {
  const { id, name, size, time } = props.customer;

  function notify() {
    alert(`${name} has been notified!`);
  }

  return (
    <div style={divStyle}>
      <p>
        <div>
          <button style={btnStyle} onClick={() => notify()}></button>
        </div>
        <div>{name}</div>
        <div>{time}</div>
        <div>{size}</div>

        {/* <button onClick={() => props.delCustomer.bind(id)} style={btnStyle}> */}
        <div>
          <button style={btnStyle}>x</button>
        </div>
      </p>
    </div>
  );
}

const divStyle = {
  background: "#f4f4f4",
  padding: "10px",
  borderBottom: "1px #ccc dotted",
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};
