import { Component } from 'react';
import css from './ContactForm.module.css';

class ContactForm extends Component{
    state = {
        name: "",
        number: ""
    }
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleSubmit = e => {
        e.preventDefault()
        if(!this.props.onSubmit({ ...this.state })) return
        this.reset()
    }
    reset() {
        this.setState({name: "", number: ""})
    }
    render() {
        const {name, number} = this.state
        return (
          <form onSubmit={this.handleSubmit} className={css["contact-form"]}>
            <label className={css["contact-label"]}>
              Name    
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яіїєА-ЯІЇЄ]+(([' \-][a-zA-Zа-яіїєА-ЯІЇЄ ])?[a-zA-Zа-яіїєА-ЯІЇЄ]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={this.handleChange}
                className={css["contact-input"]}
              />
            </label>
            <label className={css["contact-label"]}>
              Number    
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={this.handleChange}
                className={css["contact-input"]}
              />
            </label>
            <button type="submit" className={css["contact-btn"]}>Add contact</button>
          </form>  
        )
    }
}

export default ContactForm;