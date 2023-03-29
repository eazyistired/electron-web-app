import EditTeamForm from "./forms/EditTeamForm";
import { Modal } from "react-bootstrap";

const EditTeamModal = ({
  teams,
  teamId,
  showModal,
  setShowModal,
  setFetch,
}) => {
  const updateTeam = (data) => {
    console.log(data);
    const requestOptions = {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        // Authorization: `Bearer ${JSON.parse(token)}`,
      },
      body: JSON.stringify(data),
    };

    fetch(`/team/team/${teamId}`, requestOptions)
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
        <Modal.Title>Update Team</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditTeamForm
          teams={teams}
          teamId={teamId}
          onSubmit={updateTeam}
          onSave={closeModal}
        />
      </Modal.Body>
    </Modal>
  );
};

export default EditTeamModal;
