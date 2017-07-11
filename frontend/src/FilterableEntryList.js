import React from 'react';
import { Button, Icon, Input, Table } from 'semantic-ui-react';

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

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange =
        this.handleFilterTextInputChange.bind(this);
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  render() {
    return (
        <form>
          <Input
              icon='search'
              placeholder='Search'
              value={this.props.filterText}
              onChange={this.handleFilterTextInputChange}
          />
        </form>
    );
  }
}

class FilterableEntryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };
    this.handleFilterTextInputChange =
        this.handleFilterTextInputChange.bind(this);
  }

  handleFilterTextInputChange(filterText) {
    this.setState({
      filterText: filterText,
    });
  }

  render() {
    return (
        <div>
          <SearchBar
              filterText={this.state.filterText}
              onFilterTextInput={this.handleFilterTextInputChange}
          />
          <EntryList
              entries={this.props.entries}
              filterText={this.state.filterText}
          />
        </div>
    );
  }
}

export default FilterableEntryList;
