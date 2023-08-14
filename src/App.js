import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import InputTodo from "./components/inputTodo";
import ListTodos from "./components/listTodo";
import  Login from "./components/login";
import Register from "./components/register";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/Todos" element={<InputTodo />}></Route>
          <Route path="/ListeTodos" element={<ListTodos />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
