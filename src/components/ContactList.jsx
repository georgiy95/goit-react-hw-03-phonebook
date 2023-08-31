import css from './ContactList.module.css'
import PropTypes from "prop-types";

export const ContactList = ({ contacts, onDel }) => {
    return (
        <ol className={css.list}>
            {contacts.map(contact => {
                const { id, name, number } = contact;
                return <ContactItem key={id} id={id} name={name} number={number} onDel={onDel}/>
            })}
        </ol>
    )
    
}

const ContactItem = ({id, name, number, onDel }) => {
    return (
        <li className={css["list-item"]}>
            <div className={css["contact-item"]}>
                <p>{name}: {number}</p>
                <button type='button' className={css["del-btn"]} onClick={() => onDel(id)}>Delete</button>    
            </div>    
        </li>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDel: PropTypes.func.isRequired
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDel: PropTypes.func.isRequired
}