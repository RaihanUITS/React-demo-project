import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { register } from "../services/userService";
import { loginWithJwt } from "../services/authService";

class Register extends Form {
  state = {
    data: { email: "", name: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    name: Joi.string().required().label("Name"),
    password: Joi.string().min(5).required().label("Password"),
  };

  doSubmit = async () => {
    try {
      await register(this.state.data);
      window.location = "/login";
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = error.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}

          {this.renderInput("name", "Name")}

          {this.renderInput("password", "Password", "password")}

          {this.renderButton("SignUp")}
        </form>
      </div>
    );
  }
}

export default Register;
