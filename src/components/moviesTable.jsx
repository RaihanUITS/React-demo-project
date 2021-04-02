import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./common/like";
import Table from "./common/table";
import { getCurrentUser } from "./../services/authService";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
  ];

  like = {
    key: "like",
    content: (movie) => (
      <Like liked={movie.liked} clicked={() => this.props.onLike(movie)} />
    ),
  };

  deleteColumn = {
    key: "delete",
    content: (movie) => (
      <button
        onClick={() => this.props.onDelete(movie)}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    ),
  };

  rentColumn = {
    key: "rent",
    content: (movie) => (
      <Link to={`/rental/${movie._id}`} className="btn btn-primary">
        Rent
      </Link>
    ),
  };

  constructor() {
    super();
    const user = getCurrentUser();
    if (user && user.isAdmin) this.columns.push(this.deleteColumn);
    if (user && !user.isAdmin) this.columns.push(this.like);
    if (user && !user.isAdmin) this.columns.push(this.rentColumn);
  }

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        onSort={onSort}
        sortColumn={sortColumn}
        data={movies}
      />
    );
  }
}

export default MoviesTable;
