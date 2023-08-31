import css  from '../ContactForm/ContactForm.module.css'
import PropTypes from "prop-types";


export const Filter = ({filter, handleChange}) => {
    return (
        <label className={css["contact-label"]}>
              Find contact by name    
              <input
                type="text"
                name="filter"
                value={filter}
                onChange={handleChange}
                className={css["contact-input"]}
              />
            </label>
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}