import React, { Component, useContext } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import UserContext from "./../../context/userContext";

const Table = ({ rows, columns }) => {
  return (
    <div>
      <table className="table table-striped table-hover">
        <TableHeader columns={columns} />
        <TableBody rows={rows} columns={columns} />
      </table>
    </div>
  );
};

export default Table;
