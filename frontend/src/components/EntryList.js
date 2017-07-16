import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

import EntryRow from './EntryRow';

const EntryList = ({ entries, form, filterText,
                     editEntry, deleteEntry, updateFormField}) => {
  let rows = entries
              .filter(entry => entry.customer.includes(filterText))
              .map(entry =>
                  <EntryRow
                      entry={entry} key={entry.id} form={form}
                      editEntry={editEntry} deleteEntry={deleteEntry}
                      updateFormField={updateFormField}
                  />);
  return (
      <Table compact>
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

EntryList.propTypes = {
  entries: PropTypes.array,
  form: PropTypes.object,
  filterText: PropTypes.string,
  editEntry: PropTypes.func,
  deleteEntry: PropTypes.func,
  updateFormField: PropTypes.func,
};


export default EntryList;
