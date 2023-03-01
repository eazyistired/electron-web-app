import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { login } from "../hooks/auth";
import { useNavigate, useLocation } from "react-router-dom";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const loginUser = (data) => {
    console.log(data);
    const requestOptions = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch("/auth/login", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data) {
          // const logged = data ? true : false;
          // const access_token = data?.access_token;
          // const refresh_token = data?.refresh_token;
          login(data);
          navigate(from, { replace: true });
        } else {
          alert("Invalid username or password");
        }
      });

    reset();
  };

  return (
    <>
      <form>
        <Row>
          <Col>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Your username"
                {...register("username", { required: true, maxLength: 25 })}
              />
            </Form.Group>
            {errors.username && (
              <p style={{ color: "red" }}>
                <small>Username is required</small>
              </p>
            )}
            {errors.username?.type === "maxLength" && (
              <p style={{ color: "red" }}>
                <small>Username should be 25 characters</small>
              </p>
            )}
          </Col>
          <Col>
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Your password"
                {...register("password", { required: true, minLength: 8 })}
              />
            </Form.Group>
            {errors.username && (
              <p style={{ color: "red" }}>
                <small>Password is required</small>
              </p>
            )}
            {errors.password?.type === "maxLength" && (
              <p style={{ color: "red" }}>
                <small>Password should be more than 8 characters</small>
              </p>
            )}
          </Col>
        </Row>
        <br></br>
        <Form.Group>
          <Button as="sub" variant="primary" onClick={handleSubmit(loginUser)}>
            Login
          </Button>
        </Form.Group>
      </form>
    </>
  );
};

export default LoginForm;
