import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../redux/actions';
import styles from './ContactsList.module.css';

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ul className={styles.ContactsList}>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}
          {': '}
          {contact.number}
          <button onClick={() => deleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  //Пушить актуальний список контаків в LS
  window.localStorage.setItem('contacts', JSON.stringify(state.contacts));

  if (state.contacts && state.filter) {
    const normalizedFilter = state.filter.toLowerCase();
    return {
      contacts: state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      ),
    };
  }
  return { contacts: state.contacts };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: contact => dispatch(deleteContact(contact)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
