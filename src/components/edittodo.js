import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTodo = ({ todo }) => {
  
  const [Description, setDescription] = useState(todo.description);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const updateDescription = async () => {
    try {
      const body = {"description":Description,"id":todo.id };
      const response = await fetch(`http://localhost:5000/api/v1/editTodo`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify(body),
      });
       window.location = "/ListeTodos";
      toggleModal();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <React.Fragment>
      <Button
        style={{ position: "relative", left: "75%" }}
        color="warning"
        onClick={toggleModal}
      >
        Edit
      </Button>
      <Modal
        isOpen={modalOpen}
        modalTransition={{ timeout: 700 }}
        backdropTransition={{ timeout: 1300 }}
        toggle={toggleModal}
      >
        <ModalHeader toggle={toggleModal}>Edit Todo</ModalHeader>
        <ModalBody>
          <textarea
            className="form-control"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={updateDescription}>
            Save
          </Button>
          <Button color="danger" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default EditTodo;
