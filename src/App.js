import "./App.css";
import Movie from "./hoc/Movie";
import Film from "./hoc/Movie";
import MovieList from "./hooks/movieList";

import { useState, useEffect, useRef } from "react";
import axios from "axios";

import _ from "lodash";
import { BrowserRouter, Switch, Route, Routes, Link } from "react-router-dom";

import http from "./services/httpServices";

import UserContext from "./context/userContext";
import ColumnContext from "./context/columnContext";
import Button from "./components/button";
import Form from "./components/Form";
import MovieTable from "./components/movieTable";
import Table from "./components/commons/table";
import NavBar from "./components/navBar";

function App() {
  const [users, setUsers] = useState([]);

  const [columns, setColumns] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const { data } = await http.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(data);
      const tableColumns = _.keys(data[0]);
      setColumns(tableColumns);
    }
    getUsers();
  }, []);
  return (
    <div>
      <div class="container">
        <NavBar></NavBar>
        <Routes>
          <Route
            path="/"
            element={
              <div class="row">
                <div class="col-sm">
                  {" "}
                  <h1>
                    <Link to="/form">Form</Link>
                  </h1>{" "}
                </div>
                <div class="col-xl">
                  <ColumnContext.Provider value={columns}>
                    <UserContext.Provider value={users}>
                      <MovieTable />
                    </UserContext.Provider>
                  </ColumnContext.Provider>
                </div>
              </div>
            }
          />

          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
