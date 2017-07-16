import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

import OverviewRow from './OverviewRow';

class OverviewList extends React.Component {
  componentWillMount() {
    this.props.getOverviews();
  }

  render() {
    let rows = this.props.overviews.map(
        row => <OverviewRow key={row.customer} row={row}/>
    );
    return (
        <div>
          <h1>Overview</h1>
          <Table compact>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Customer</Table.HeaderCell>
                <Table.HeaderCell>Total length</Table.HeaderCell>
                <Table.HeaderCell>Total due</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {rows}
            </Table.Body>
          </Table>
        </div>
    );
  }
}

OverviewList.propTypes = {
  getOverviews: PropTypes.func.isRequired,
  overviews: PropTypes.array,
};

export default OverviewList;