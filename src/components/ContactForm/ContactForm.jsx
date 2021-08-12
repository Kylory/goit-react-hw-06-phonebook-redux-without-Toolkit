import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addContact } from '../redux/actions';
import styles from './ContactForm.module.css';

const ContactForm = ({ contacts, addContact }) => {
  const [stateName, setStateName] = useState('');
  const [stateNumber, setStateNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setStateName(value);
        break;

      case 'number':
        setStateNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    if (contacts && contacts.find(contact => contact.name === stateName)) {
      return alert(stateName + ' is already in contacts');
    }

    addContact({ name: stateName, number: stateNumber });
    reset();
  };

  const reset = () => {
    setStateName('');
    setStateNumber('');
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          name="name"
          type="text"
          value={stateName}
          onChange={handleChange}
        />
      </label>

      <label>
        Number
        <input
          name="number"
          type="text"
          value={stateNumber}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return { contacts: state.contacts };
};

const mapDispatchToProps = dispatch => {
  return {
    addContact: contact => dispatch(addContact(contact)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
