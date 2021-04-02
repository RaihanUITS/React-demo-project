import React, { Component } from "react";
import Table from "./common/table";

class CustomerTable extends Component {
  columns = [
    { path: "name", label: "Name" },
    { path: "email", label: "Email" },
    { path: "password", label: "Password" },
  ];

  render() {
    const { users, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        onSort={onSort}
        sortColumn={sortColumn}
        data={users}
      />
    );
  }
}

export default CustomerTable;
