import React, { useEffect, useState } from "react";
import UserCard from "../components/cards/UserCard";
import TeamCard from "../components/cards/TeamCard";
import Layout from "./Layout";
import { CardGroup, Row, Col, ListGroup, Button, Table } from "react-bootstrap";
import EditUserModal from "../components/EditUserModal";
import EditTeamForm from "../components/forms/EditTeamForm";
import EditTeamModal from "../components/EditTeamModal";

const AdminDashboardPage = () => {
  const [users, setUsers] = useState(null);
  const [userId, setUserId] = useState();
  const [teams, setTeams] = useState(null);
  const [teamId, setTeamId] = useState();
  const [fetchUsers, setFetchUsers] = useState(false);
  const [fetchTeams, setFetchTeams] = useState(false);

  const [showEditUserModal, setshowEditUserModal] = useState(false);
  const [showEditTeamModal, setShowEditTeamModal] = useState(false);

  useEffect(() => {
    fetch("/user/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFetchUsers(false);
      })
      .catch((err) => console.log(err));
  }, [fetchUsers]);

  useEffect(() => {
    fetch("/team/teams")
      .then((res) => res.json())
      .then((data) => {
        setTeams(data);
        setFetchTeams(false);
      })
      .catch((err) => console.log(err));
  }, [fetchTeams]);

  return (
    <Layout>
      <>
        <EditUserModal
          users={users}
          userId={userId}
          showModal={showEditUserModal}
          setShowModal={setshowEditUserModal}
          setFetch={setFetchUsers}
        />

        <EditTeamModal
          teams={teams}
          teamId={teamId}
          showModal={showEditTeamModal}
          setShowModal={setShowEditTeamModal}
        />

        <h3>Users:</h3>
        <Row xs={1} md={3} className="g-4">
          {users?.map((user, index) => (
            <Col>
              <UserCard
                username={user.username}
                key={index}
                email={user.email}
                first_name={user.first_name}
                last_name={user.last_name}
                role={user.role}
                onClick={() => {
                  setshowEditUserModal(true);
                  setUserId(user.id);
                }}
                onDelete={() => {}}
              />
            </Col>
          ))}
        </Row>
        <br />
        {/* <Table variant="dark" striped bordered hover>
          <thead>
            <tr>
              <th width="5%">#</th>
              <th width="20%">Name</th>
              <th>Team Members</th>
              <th width="12%"></th>
            </tr>
          </thead>
          <tbody>
            {teams?.map((team, index) => (
              <>
                <tr>
                  <th> {index} </th>
                  <th> {team.name} </th>
                  <th> {team.team_members} </th>
                  <th>
                    <Button variant="outline-warning">Edit</Button>
                    {"         "}
                    <Button variant="outline-danger">Delete</Button>
                  </th>
                </tr>
              </>
            ))}
          </tbody>
        </Table> */}
        <h3>Teams:</h3>
        <Row xs={1} md={3} className="g-4">
          {teams?.map((team, index) => (
            <Col>
              <TeamCard
                name={team.name}
                key={index}
                team_members={team.team_members}
                onClick={() => {
                  setShowEditTeamModal(true);
                  setTeamId(team.id);
                }}
                onDelete={() => {}}
              />
            </Col>
          ))}
        </Row>
      </>
    </Layout>
  );
};

export default AdminDashboardPage;
