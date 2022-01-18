import React, { Component, useContext } from "react";
import Table from "./commons/table";
import UserContext from "./../context/userContext";

const MovieTable = () => {
  const columns = [
    {
      path: "id",
      label: "id",
    },
    {
      path: "name",
      label: "name",
    },

    {
      path: "username",
      label: "username",
    },

    {
      path: "email",
      label: "email",
      content: ({ email }) => <button className="btn-danger">{email}</button>,
    },

    {
      path: "address",
      label: "address",
      content: ({ address }) =>
        `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`,
    },

    {
      path: "phone",
      label: "phone",
    },
    {
      path: "website",
      label: "website",
    },

    {
      path: "company",
      label: "company",
      content: ({ company }) =>
        `${company.name}: ${company.catchPhrase} (${company.bs})`,
    },
  ];
  const rows = useContext(UserContext);
  return <Table rows={rows} columns={columns} />;
};
export default MovieTable;
