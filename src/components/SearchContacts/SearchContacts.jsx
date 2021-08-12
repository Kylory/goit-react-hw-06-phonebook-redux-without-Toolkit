import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterContact } from '../redux/actions';
import styles from './SearchContacts.module.css';

const SearchContacts = ({ filter, filterContact }) => {
  console.log(filter);
  return (
    <label className={styles.searchContacts}>
      Find contacts by name
      <input
        name="filter"
        type="text"
        value={filter}
        onChange={filterContact}
      />
    </label>
  );
};

SearchContacts.propTypes = {
  filter: PropTypes.string.isRequired,
  filterContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return { filter: state.filter };
};

const mapDispatchToProps = dispatch => {
  return {
    filterContact: e => dispatch(filterContact(e.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContacts);
