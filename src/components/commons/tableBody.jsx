import React, { Component, useContext } from "react";

import UserContext from "./../../context/userContext";
import ColumnContext from "./../../context/columnContext";

import _ from "lodash";

const TableBody = ({ rows, columns }) => {
  console.log("columns123", columns);
  return (
    <tbody>
      {rows.map((row) => (
        <tr>
          {columns.map((column) => (
            <td>
              {column.content ? column.content(row) : _.get(row, column.path)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
