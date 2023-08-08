import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

<<<<<<< HEAD

=======
>>>>>>> 222da6c6754eabf448a3b64272e893bd7c81adf4
const InputTodo = () => {
  const navigate = useNavigate();

  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/addTodo",
        {
          description: description,
        }
      );
      navigate("/ListeTodos");
    } catch (err) {
      console.error(err.message);
    }
  };
<<<<<<< HEAD
  
 
=======

>>>>>>> 222da6c6754eabf448a3b64272e893bd7c81adf4
  return (
    <React.Fragment>
      <form
        onSubmit={onSubmitForm}
        style={{ alignItems: "center", textAlign: "center" }}
      >
        <div className="d-flex flex-column justify-content-center">
          <h1 className="text-center" style={{ textAlign: "center" }}>
            Pern Todo Tist
          </h1>
          <div style={{ position: "relative", left: "25%", width: "50%" }}>
            <input
              type="text"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="enter your todo"
            />
          </div>
          <div>
            <Button
              color="success"
              style={{
                width: "70px",
                margin: 10,
                height: "40px",
                border: "transparent",
              }}
              onClick={onSubmitForm}
            >
              Add
            </Button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};
export default InputTodo;
