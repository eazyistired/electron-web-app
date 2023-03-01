import React from "react";
import Layout from "./Layout";
import FormCard from "../components/FormCard";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Layout>
      <FormCard
        header="Login"
        body={<LoginForm />}
        footer={
          <small>
            Do not have an account yet? <Link to="/signup">Sign Up</Link>
          </small>
        }
      />
    </Layout>
  );
};

export default LoginPage;
