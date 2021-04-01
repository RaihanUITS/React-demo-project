import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { login } from "../services/authService";
import { getCurrentUser } from "./../services/authService";
import { Redirect } from "react-router";

class Login extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await login(data.email, data.password);

      window.location = "/";
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = error.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (getCurrentUser()) return <Redirect to="/" />;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}

          {this.renderInput("password", "Password", "password")}

          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default Login;
