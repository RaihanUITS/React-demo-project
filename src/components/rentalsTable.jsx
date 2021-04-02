import React, { Component } from "react";
import Table from "./common/table";

class RentalsTable extends Component {
  columns = [
    { path: "customer", label: "Customer" },
    { path: "title", label: "Movie" },
    { path: "genre", label: "Genre" },
    { path: "dailyRentalRate", label: "Daily Rate" },
    { path: "startDate", label: "StartDate" },
    { path: "endDate", label: "EndDate" },
  ];

  render() {
    const { rentals, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        onSort={onSort}
        sortColumn={sortColumn}
        data={rentals}
      />
    );
  }
}

export default RentalsTable;
