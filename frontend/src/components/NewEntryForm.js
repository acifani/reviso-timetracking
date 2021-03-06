import React from 'react';
import PropTypes from 'prop-types';
import { Form, Message } from 'semantic-ui-react';

class NewEntryForm extends React.Component {
  componentWillMount() {
    this.props.fetchCustomerOptions();
  }

  getCustomerOptions = () => {
    return this.props.form.customerOptions.map(customer => (
        { key: customer, text: customer, value: customer }
    ));
  };

  handleOnChange = (e, { name, value }) => {
    this.props.updateFormField(name, value);
  };

  handleSubmit = () => {
    this.props.addEntry(this.props.form.entry);
  };

  render() {
    return (
        <div>
          <h1>New</h1>
          <Form
              success={this.props.formStatus.success}
              loading={this.props.formStatus.loading}
              error={this.props.formStatus.error}
              onSubmit={this.handleSubmit}
          >
            <Form.Group>
              <Form.Select
                  label='Customer'
                  placeholder='Customer'
                  name='customer'
                  options={this.getCustomerOptions()}
                  onChange={this.handleOnChange}
              />
              <Form.Input
                  label='Hourly rate'
                  placeholder='Hourly rate'
                  name='hourly_rate'
                  onChange={this.handleOnChange}
              />
              <Form.Input
                  label='Length in minutes'
                  placeholder='mm'
                  name='length'
                  onChange={this.handleOnChange}
              />
            </Form.Group>
            <Form.Button>Submit</Form.Button>
            <Message
                success
                header="Request completed"
                content="The entry has been added successfully."
            />
            <Message
                error
                header="Request error"
                content="Check that the data is entered correctly."
            />
          </Form>
        </div>
    );
  };
}

NewEntryForm.propTypes = {
  form: PropTypes.object,
  fetchCustomerOptions: PropTypes.func.isRequired,
  updateFormField: PropTypes.func,
  addEntry: PropTypes.func,
  formStatus: PropTypes.object,
};

export default NewEntryForm;
