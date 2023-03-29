import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const EditUserForm = ({ users, userId, onSave, onSubmit }) => {
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    users.map((user) => {
      if (user.id == userId) {
        setValue("username", user.username);
        setValue("email", user.email);
        setValue("first_name", user.first_name);
        setValue("last_name", user.last_name);
        setValue("role", user.role);
      }
    });
  }, [userId]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Your first name"
          {...register("first_name", { required: true, maxlength: 20 })}
        />

        {errors.first_name && (
          <small style={{ color: "red" }}>First name is required</small>
        )}
        {errors.first_name?.type === "maxLength" && (
          <p style={{ color: "red" }}>
            <small>Max characters should be 20 </small>
          </p>
        )}
      </Form.Group>
      <br></br>
      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Your last name"
          {...register("last_name", { required: true, maxlength: 20 })}
        />

        {errors.last_name && (
          <small style={{ color: "red" }}>Last name is required</small>
        )}
        {errors.last_name?.type === "maxLength" && (
          <p style={{ color: "red" }}>
            <small>Max characters should be 20 </small>
          </p>
        )}
      </Form.Group>
      <br></br>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Your username"
          aria-label="Disabled Username"
          readOnly
          {...register("username", { required: true, maxLength: 25 })}
        />

        {errors.username && (
          <small style={{ color: "red" }}>Username is required</small>
        )}
        {errors.username?.type === "maxLength" && (
          <p style={{ color: "red" }}>
            <small>Max characters should be 25 </small>
          </p>
        )}
      </Form.Group>
      <br></br>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Your email"
          {...register("email", { required: true, maxLength: 80 })}
        />

        {errors.email && (
          <p style={{ color: "red" }}>
            <small>Email is required</small>
          </p>
        )}

        {errors.email?.type === "maxLength" && (
          <p style={{ color: "red" }}>
            <small>Max characters should be 80</small>
          </p>
        )}
      </Form.Group>
      <br></br>
      <Form.Group>
        <Form.Label>Role</Form.Label>
        <Form.Control
          type="text"
          placeholder="Your role"
          aria-label="Disabled Role"
          readOnly
          {...register("role", { required: true })}
        />

        {errors.email && (
          <p style={{ color: "red" }}>
            <small>Role is required</small>
          </p>
        )}
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

export default EditUserForm;
