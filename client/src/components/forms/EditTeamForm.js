import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Select from "react-select";

const EditTeamForm = ({ teams, teamId, onSubmit, onSave }) => {
  const {
    register,
    reset,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({});

  useEffect(() => {
    teams.map((team) => {
      if (team.id == teamId) {
        setValue("name", team.name);
        // setValue("team_leader_id", team.team_leader.id);
        // const team_members_selected = team.team_members.map((team_member) => ({
        //   value: team_member,
        //   label: team_member.username,
        // }));
        // setValue("team_members", team_members_selected);
      }
    });
  }, [teamId]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Team name"
          {...register("name", { required: true, maxlength: 20 })}
        />

        {errors.name && (
          <small style={{ color: "red" }}>Team name is required</small>
        )}
        {errors.name?.type === "maxLength" && (
          <p style={{ color: "red" }}>
            <small>Max characters should be 20 </small>
          </p>
        )}
      </Form.Group>
      {/* <br></br>
      <Form.Group>
        <Form.Label>Select a User</Form.Label>
        <Form.Control
          as="select"
          name="team_leader"
          onChange={(e) => {
            setValue("team_leader_id", e.target.value);
          }}>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.username}
            </option>
          ))}
        </Form.Control>
      </Form.Group> */}
      <br></br>
      <Form.Group>
        <Form.Label>Select Members</Form.Label>
        <Select
          //   options={options}
          isMulti
          defaultValue={getValues().team_members}
          //   onChange={handleSelectChange}
        />
      </Form.Group>
      <br></br>
      <Form.Group>
        <Button variant="primary" type="submit" onClick={onSave}>
          Save
        </Button>
      </Form.Group>
    </Form>
  );
};

export default EditTeamForm;
