import { Component } from 'react';
import { nanoid } from 'nanoid'; 
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css'; 

const CONTACTS = 'contacts'; 
const initialContacts = [
  { id: nanoid(), name: 'Armin van Buuren', number: '452-11-44' },
  { id: nanoid(), name: 'Tiësto', number: '443-89-12' },
  { id: nanoid(), name: 'Above & Beyond', number: '545-37-79' },
  { id: nanoid(), name: 'Dash Berlin', number: '237-91-23' },
  { id: nanoid(), name: 'Markus Schulz', number: '216-68-97' },
];
export class App extends Component {
state = {
    contacts: initialContacts ,
    filter: '',
  };
componentDidMount() {
      const parsedContacts = JSON.parse(localStorage.getItem(CONTACTS));
if(parsedContacts ){
      this.setState({ contacts: parsedContacts });
}
  }

  componentDidUpdate(_, prevState) {
    
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(
        CONTACTS,
        JSON.stringify(this.state.contacts) 
      );
    }
  }

  onChangeInput = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = ({ name, number }) => {
    if (
      this.state.contacts.some(
        value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      alert(`${name} is alredy in contacts`);
    } else {
    this.setState(oldState => 
( { contacts:  [...oldState.contacts,{
          id: nanoid(), 
          name,
          number,
        } ]})
      );
    }
  };

  filter = () => {
    const { contacts, filter } = this.state; 
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  delContact = id => {
    const { contacts } = this.state;
    const filtred = contacts.filter(item => item.id !== id);
    this.setState({ contacts: filtred });
  };

  render() {
    return (
      <div className={css.conteiner}>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChangeInput={this.onChangeInput} />
        <ContactList delContact={this.delContact} contacts={this.filter()} />
      </div>
    );
  }
}


