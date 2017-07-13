import React from 'react';
import { Button, Table } from 'semantic-ui-react';

const EntryRow = ({ entry, editEntry, deleteEntry }) => {
  const handleOnClick = () => {deleteEntry(entry.id)}
  return (
      <Table.Row>
        <Table.Cell>{entry.customer}</Table.Cell>
        <Table.Cell>{entry.hourly_rate}</Table.Cell>
        <Table.Cell>{entry.length}</Table.Cell>
        <Table.Cell>
          <Button
              size='small' icon='write' as='a'
          />
          <Button
              size='small' icon='trash' as='a'
              onClick={handleOnClick}
          />
        </Table.Cell>
      </Table.Row>
  );
};

export default EntryRow;
