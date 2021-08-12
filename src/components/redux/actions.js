import { ADD, DELETE, FILTER } from './actionTypes';
import shortid from 'shortid';

const addContact = ({ name, number }) => ({
  type: ADD,
  payload: {
    id: shortid.generate(),
    name: name,
    number: number,
  },
});

const deleteContact = contactId => ({
  type: DELETE,
  payload: contactId,
});

const filterContact = query => ({
  type: FILTER,
  payload: query,
});

export { addContact, deleteContact, filterContact };
