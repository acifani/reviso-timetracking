import React from 'react';
import { Table } from 'semantic-ui-react';

import EntryRow from './EntryRow';

const EntryList = ({ entries, filterText }) => {
  let rows = entries
    .filter(entry => entry.customer.toLowerCase().includes(filterText.toLowerCase()))
    .map(entry => <EntryRow entry={entry} key={entry.id} />);

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
};

export default EntryList;
