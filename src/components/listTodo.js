import React, { useState } from "react";
import axios from "axios";

import EditTodo from "./edittodo";

const ListTodos = () => {

  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/v1/Todos");
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(
        "http://localhost:5000/api/v1/deleteTodo",
        {
          data:{"id": id}
        }
      );
      window.location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <table className="table mt-5 text- center">
        <thead>
          <tr>
            <th style={{ position: "relative", left: "20%" }}>Description </th>
            <th style={{ position: "relative", left: "20%" }}>Edit</th>
            <th style={{ position: "relative", left: "15%" }}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo}
                 />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  style={{ position: "relative", left: "43%" }}
                  onClick={() => deleteTodo(todo.id)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};
export default ListTodos;
