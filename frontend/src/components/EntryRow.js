import React from 'react';
import { Button, Form, Table } from 'semantic-ui-react';

class EntryRow extends React.Component {
  state = { editing: false };

  updateForm() {
    // hacky, move this to a separate action
    this.props.updateFormField('customer', this.props.entry.customer);
    this.props.updateFormField('hourly_rate', this.props.entry.hourly_rate);
    this.props.updateFormField('length', this.props.entry.length);
  }

  handleEditClick = () => {
    this.setState({ editing: true });
    this.updateForm();
  };
  handleUpdateClick = () => {
    this.setState({ editing: false });
    this.props.editEntry(this.props.entry.id, this.props.form.entry);
  };
  handleDeleteClick = () => this.props.deleteEntry(this.props.entry.id);
  handleOnChange = (e, {name, value}) =>
      this.props.updateFormField(name, value);

  showOrEdit = () => {
    if (this.state.editing) {
      return (
          <Table.Row>
            <Table.Cell>
              <Form.Input
                  name='customer'
                  defaultValue={this.props.form.entry.customer}
                  onChange={this.handleOnChange}
              />
            </Table.Cell>
            <Table.Cell>
              <Form.Input
                  name='hourly_rate'
                  defaultValue={this.props.form.entry.hourly_rate}
                  onChange={this.handleOnChange}
              />
            </Table.Cell>
            <Table.Cell>
              <Form.Input
                  name='length'
                  defaultValue={this.props.form.entry.length}
                  onChange={this.handleOnChange}
              />
            </Table.Cell>
            <Table.Cell>
              <Form.Button onClick={this.handleUpdateClick}>
                Update
              </Form.Button>
            </Table.Cell>
          </Table.Row >
      );
    } else {
      return (
          <Table.Row>
            <Table.Cell>{this.props.entry.customer}</Table.Cell>
            <Table.Cell>{this.props.entry.hourly_rate}</Table.Cell>
            <Table.Cell>{this.props.entry.length}</Table.Cell>
            <Table.Cell>
              <Button
                  size='small' icon='write' as='a'
                  onClick={this.handleEditClick}
              />
              <Button
                  size='small' icon='trash' as='a'
                  onClick={this.handleDeleteClick}
              />
            </Table.Cell>
          </Table.Row>
      );
    }
  };

  render() {
    return this.showOrEdit();
  }
}

export default EntryRow;
