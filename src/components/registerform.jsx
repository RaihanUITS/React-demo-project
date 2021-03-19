import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class Register extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().email().required().label("Username"),
    password: Joi.string().min(5).required().label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = () => {
    console.log("Submitted!");
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}

          {this.renderInput("password", "Password", "password")}

          {this.renderInput("name", "Name")}

          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default Register;
