import { useState } from "react";
import { Modal } from "react-bootstrap";
import EditUserForm from "./forms/EditUserForm";


const EditUserModal = ({
  users,
  userId,
  showModal,
  setShowModal,
  setFetch,
}) => {
  // const [showModal, setShowModal] = useState(false);

  const updateUser = (data) => {
    const requestOptions = {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        // Authorization: `Bearer ${JSON.parse(token)}`,
      },
      body: JSON.stringify(data),
    };

    fetch(`/user/user/${userId}`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setFetch(true);
      })
      .catch((err) => console.log(err));
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Modal size="lg" show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Update User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditUserForm
          users={users}
          userId={userId}
          onSubmit={updateUser}
          onSave={closeModal}
        />
      </Modal.Body>
    </Modal>
  );
};

export default EditUserModal;
