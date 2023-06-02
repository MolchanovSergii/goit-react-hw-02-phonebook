import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForms from './ContactForms/ContactForms';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitData = data => {
    console.log(data);
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...data, id: nanoid() }],
    }));
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForms onSubmit={this.formSubmitData} />
        <h2>Contacts</h2>
        <ContactList dataUsers={this.state.contacts} />
      </>
    );
  }
}

export default App;
