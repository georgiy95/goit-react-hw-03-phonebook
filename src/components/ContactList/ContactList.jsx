import css from './ContactList.module.css'
import { ContactItem } from '../ContactItem/ContactItem';
import PropTypes from "prop-types";

export const ContactList = ({ contacts, onDel }) => {
    return (
        <ol className={css.list}>
            {contacts.map(({id, name, number }) => {
                return <ContactItem key={id} id={id} name={name} number={number} onDel={onDel}/>
            })}
        </ol>
    )
    
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDel: PropTypes.func.isRequired
}
