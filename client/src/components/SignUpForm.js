import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    if (data.password === data.confirmPassword) {
      const body = {
        username: data.username,
        email: data.email,
        password: data.password,
        first_name: data.first_name,
        last_name: data.last_name,
      };

      const requestOptions = {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      };

      fetch("/auth/signup", requestOptions)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => console.log(err));

      reset();
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <>
      <form>
        <Row>
          <Col>
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
          </Col>
          <Col>
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
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your username"
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
          </Col>
          <Col sm="8">
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
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Your password"
                {...register("password", { required: true, minLength: 8 })}
              />

              {errors.password && (
                <p style={{ color: "red" }}>
                  <small>Password is required</small>
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p style={{ color: "red" }}>
                  <small>Min characters should be 8</small>
                </p>
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Your password"
                {...register("confirmPassword", {
                  required: true,
                  minLength: 8,
                })}
              />
              {errors.confirmPassword && (
                <p style={{ color: "red" }}>
                  <small>Confirm Password is required</small>
                </p>
              )}
              {errors.confirmPassword?.type === "minLength" && (
                <p style={{ color: "red" }}>
                  <small>Min characters should be 8</small>
                </p>
              )}
            </Form.Group>
          </Col>
        </Row>
        <br></br>
        <Form.Group>
          <Button as="sub" variant="primary" onClick={handleSubmit(submitForm)}>
            SignUp
          </Button>
        </Form.Group>
      </form>
    </>
  );
};

export default SignUpForm;
