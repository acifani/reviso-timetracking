import React from 'react';
import { Table } from 'semantic-ui-react';

import EntryRow from './EntryRow';

class EntryList extends React.Component {
  render() {
    let rows = [];
    this.props.entries.forEach((entry) => {
      if (entry.customer.indexOf(this.props.filterText) !== -1) {
        rows.push(<EntryRow entry={entry} key={entry.id}/>);
      }
    });
    return (
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Customer</Table.HeaderCell>
              <Table.HeaderCell>Rate</Table.HeaderCell>
              <Table.HeaderCell>Length</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {rows}
          </Table.Body>
        </Table>
    );
  }
}

export default EntryList;
