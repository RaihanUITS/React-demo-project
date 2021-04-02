import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getMovie } from "../services/movieService";
import { saveRental } from "./../services/rentalService";

class RentalForm extends Form {
  state = {
    data: {
      customer: "",
      title: "",
      genre: "",
      dailyRentalRate: "",
      startDate: "",
      endDate: "",
    },
    errors: {},
  };

  schema = {
    customer: Joi.string().required().label("Customer"),
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(255)
      .label("Daily Rental Rate"),
    startDate: Joi.date().required().label("Start Date"),
    endDate: Joi.date().required().label("End Date"),
  };

  async populateForm() {
    try {
      const movieId = this.props.match.params.id;
      const { data: movie } = await getMovie(movieId);
      // console.log(movie.genre);
      this.setState({
        data: this.mapToViewModel(movie),
      });
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/not-found");
      }
    }
  }

  async componentDidMount() {
    console.log(this.props);
    await this.populateForm();
  }

  mapToViewModel(movie) {
    return {
      customer: this.props.customer.name,
      title: movie.title,
      genre: movie.genre.name,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  doSubmit = async () => {
    await saveRental(this.state.data);

    this.props.history.push("/movies");
  };

  render() {
    return (
      <div>
        <h1>Rental Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("customer", "Customer")}
          {this.renderInput("title", "Title")}
          {this.renderInput("genre", "Genre")}
          {this.renderInput("dailyRentalRate", "Daily Rate")}
          {this.renderInput("startDate", "Start Date", "date")}
          {this.renderInput("endDate", "End Date", "date")}
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default RentalForm;
