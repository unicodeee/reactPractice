import React, { Component, useContext } from "react";
import UserContext from "./../../context/userContext";

import _ from "lodash";
import ColumnContext from "./../../context/columnContext";

const TableHeader = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((c) => (
          <th scope="col">{c.label}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
