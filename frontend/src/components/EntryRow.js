import React from 'react';
import { Button, Icon, Table } from 'semantic-ui-react';

class EntryRow extends React.Component {
  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.entry.customer}</Table.Cell>
          <Table.Cell>{this.props.entry.hourly_rate}</Table.Cell>
          <Table.Cell>{this.props.entry.length}</Table.Cell>
          <Table.Cell>
            <Button icon as='a'><Icon name='write'/></Button>
            <Button icon as='a'><Icon name='trash'/></Button>
          </Table.Cell>
        </Table.Row>
    );
  }
}

export default EntryRow;
