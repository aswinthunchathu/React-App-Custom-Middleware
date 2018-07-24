import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';

import Table from '../Table';

class ChampionsTable extends Component {

  static propTypes = {
    // Injected by React Redux
    data: PropTypes.array.isRequired
  }

  columnSchema() {
    return [
      {
        header: "Season",
        accessor: d => d.season,
        cell: (value) => {
          return <a href="#" className="text-danger">{value}</a>
        }
      }, {
        header: "Driver",
        accessor: d => `${d.driver.givenName} ${d.driver.familyName}`
      }, {
        header: "Nationality",
        accessor: d => d.driver.nationality,
        classNameTD :"d-none d-md-table-cell",
        classNameTH : "d-none d-md-table-cell"
      }, {
        header: "Constructor",
        accessor: d => d.constructor.name
      }, {
        header: "Wins",
        accessor: d => d.wins,
        classNameTD :"text-right d-none d-lg-table-cell",
        classNameTH : "d-none d-lg-table-cell"
      }, {
        header: "Points",
        accessor: d => d.points,
        classNameTD :"text-right d-none d-sm-table-cell",
        classNameTH : "d-none d-sm-table-cell"
      }
    ]
  }

  render() {
    const { data } = this.props;
    return (
      <div className="row">
        <div className="col-12">
          <Table columns={this.columnSchema()} data={data}
            className="table table-striped table-hover table-bordered table-sm" />
        </div>
      </div>
    );
  }
}

export default ChampionsTable;
