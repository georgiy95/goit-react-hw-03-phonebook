import css from "./App.module.css"
import ContactForm from "./ContactForm";
import { ContactList } from "./ContactList"
import {Filter} from './Filter'
import { Component } from "react";
import { nanoid } from "nanoid";
import Notiflix from 'notiflix';
import 'notiflix/src/notiflix.css';

class App extends Component{
 state = {
  contacts: [],
  filter: ''
  }
  
  addContact = contact => {
    if (this.findContact(contact.name)) return  Notiflix.Notify.failure(`${contact.name} is already in contacts`); //alert(`${contact.name} is already in contacts`)
    return this.setState(prev => {
      return { contacts: [ ...prev.contacts, {id: nanoid(), ...contact }]  }
    })|| true
  }
  
  filterChange = e => {
    this.setState({filter: e.target.value})
  }

  filterContacts = () => this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))

  findContact = name => this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())

  delContact = id => {this.setState(prev => {return {contacts: prev.contacts.filter(contact => contact.id !== id)}})}
  
  render() {
    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={values => this.addContact(values)}/>

        <h2 className={css.title}>Contacts</h2>
        <Filter filter={this.state.filter} handleChange={this.filterChange}/>
        {this.state.contacts && <ContactList contacts={this.filterContacts()} onDel={this.delContact}/>}
      </div>
    )
  }
  
}

export default App