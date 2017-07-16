import React from 'react';
import { Table } from 'semantic-ui-react';

const OverviewRow = ({ row }) => (
    <Table.Row>
      <Table.Cell>{row.customer}</Table.Cell>
      <Table.Cell>{row.total_length}</Table.Cell>
      <Table.Cell>{row.total_due.toFixed(2)}</Table.Cell>
    </Table.Row>
);

export default OverviewRow;
