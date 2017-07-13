import React from 'react';
import { Table } from 'semantic-ui-react';

import EntryRow from './EntryRow';

const EntryList = ({ entries, filterText, editEntry, deleteEntry }) => {
  let rows = entries
              .filter(entry => entry.customer.includes(filterText))
              .map(entry => <EntryRow
                      entry={entry}
                      key={entry.id}
                      editEntry={editEntry}
                      deleteEntry={deleteEntry}
                  />);
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
