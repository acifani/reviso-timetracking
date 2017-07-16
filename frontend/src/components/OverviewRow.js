import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

const OverviewRow = ({ row }) => (
    <Table.Row>
      <Table.Cell>{row.customer}</Table.Cell>
      <Table.Cell>{row.total_length}</Table.Cell>
      <Table.Cell>{row.total_due.toFixed(2)}</Table.Cell>
    </Table.Row>
);

OverviewRow.propTYpes = {
  row: PropTypes.shape({
    customer: PropTypes.string,
    total_length: PropTypes.number,
    total_due: PropTypes.number,
  }),
};

export default OverviewRow;
