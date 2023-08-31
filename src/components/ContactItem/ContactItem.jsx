import css from './ContactItem.module.css'
import PropTypes from "prop-types";

export const ContactItem = ({id, name, number, onDel }) => {
    return (
        <li className={css["list-item"]}>
            <div className={css["contact-item"]}>
                <p>{name}: {number}</p>
                <button type='button' className={css["del-btn"]} onClick={() => onDel(id)}>Delete</button>    
            </div>    
        </li>
    )
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDel: PropTypes.func.isRequired
}