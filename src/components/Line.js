import React from "react";
import CustomerItem from "./CustomerItem";

export default function Line(props) { // Can delete this
  return props.customers.map((customer) => (
    // <CustomerItem customer={customer} delCustomer={props.delCustomer} />
    <CustomerItem customer={customer} />
  ));
}
