import React from 'react';
import { Table } from 'semantic-ui-react';

import OverviewRow from './OverviewRow';

class OverviewList extends React.Component {
  componentWillMount() {
    this.props.getOverview();
  }

  render() {
    let rows = this.props.overview.map(
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

export default OverviewList;