import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';

import Table from '../Table';

class WinnersTable extends Component {

  static propTypes = {
    // Injected by React Redux
    data: PropTypes.array.isRequired,
    highlightKey :PropTypes.string
  }

  columnSchema() {
    return [
      {
        header: "Race",
        accessor: d => d.raceName
      },{
        header: "Driver",
        accessor: d => `${d.driver.givenName} ${d.driver.familyName}`
      }, {
        header: "Nationality",
        accessor: d => d.driver.nationality,
        classNameTD :"d-none d-md-table-cell",
        classNameTH : "d-none d-md-table-cell"
      }, {
        header: "Constructor",
        accessor: d => d.constructor.name,
        classNameTD :"d-none d-md-table-cell",
        classNameTH : "d-none d-md-table-cell"
      },{
        header: "Time",
        accessor: d => d.time,
        classNameTD :"text-right",
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

export default WinnersTable;
