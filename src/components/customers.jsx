import React, { Component } from "react";
import CustomerTable from "./customerTable";
import Pagination from "./common/pagination";
import { getUsers } from "../services/userService";
import { paginate } from "../utils/paginate";
import _ from "lodash";

class Customers extends Component {
  state = {
    users: [],
    currentPage: 1,
    pageSize: 6,
    sortColumn: { path: "name", order: "asc" },
  };

  async componentDidMount() {
    const { data: users } = await getUsers();
    this.setState({ users });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const { pageSize, currentPage, users: allUsers, sortColumn } = this.state;

    const sorted = _.orderBy(allUsers, [sortColumn.path], [sortColumn.order]);

    const users = paginate(sorted, currentPage, pageSize);

    return { totalCount: allUsers.length, data: users };
  };

  render() {
    const { length: count } = this.state.users;
    const { pageSize, currentPage, sortColumn } = this.state;

    if (count === 0) return <h1>There are no customers to be shown!.</h1>;

    const { totalCount, data: users } = this.getPageData();

    return (
      <div>
        <h1>Customers</h1>

        <p>There are {totalCount} customers available.</p>

        <CustomerTable
          users={users}
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

export default Customers;
