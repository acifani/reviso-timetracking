import React from 'react';
import { Button, Icon, Table } from 'semantic-ui-react';

const EntryRow = ({ entry }) => (
    <Table.Row>
      <Table.Cell>{entry.customer}</Table.Cell>
      <Table.Cell>{entry.hourly_rate}</Table.Cell>
      <Table.Cell>{entry.length}</Table.Cell>
      <Table.Cell>
        <Button icon as='a'><Icon name='write'/></Button>
        <Button icon as='a'><Icon name='trash'/></Button>
      </Table.Cell>
    </Table.Row>
);

export default EntryRow;
