import React, { Component } from "react";
import RentalsTable from "./rentalsTable";
import Pagination from "./common/pagination";
import { getRentals } from "../services/rentalService";
import { paginate } from "../utils/paginate";
import _ from "lodash";

class Rentals extends Component {
  state = {
    rentals: [],
    currentPage: 1,
    pageSize: 6,
    sortColumn: { path: "startDate", order: "asc" },
  };

  async componentDidMount() {
    const { data: rentals } = await getRentals();
    this.setState({ rentals });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      rentals: allRentals,
      sortColumn,
    } = this.state;

    const sorted = _.orderBy(allRentals, [sortColumn.path], [sortColumn.order]);

    const rentals = paginate(sorted, currentPage, pageSize);

    return { totalCount: allRentals.length, data: rentals };
  };

  render() {
    const { length: count } = this.state.rentals;
    const { pageSize, currentPage, sortColumn } = this.state;

    if (count === 0) return <h1>There has been no rental of movies.</h1>;

    const { totalCount, data: rentals } = this.getPageData();

    return (
      <div>
        <h1>Rentals</h1>
        <p>There are {totalCount} rental of movies.</p>

        <RentalsTable
          rentals={rentals}
          onSort={this.handleSort}
          sortColumn={sortColumn}
        />

        <Pagination
          itemsCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Rentals;
