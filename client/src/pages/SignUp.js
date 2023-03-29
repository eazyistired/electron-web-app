import React from "react";
import SignUpForm from "../components/forms/SignUpForm";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import FormCard from "../components/cards/FormCard";

const SignUpPage = () => {
  return (
    <Layout>
      <FormCard
        header="Sign Up"
        body={<SignUpForm />}
        footer={
          <small>
            Already have an account?<Link to="/login">Log in</Link>{" "}
          </small>
        }
      />
    </Layout>
  );
};

export default SignUpPage;
