import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const contactsReducer = (
  state = JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  { type, payload },
) => {
  switch (type) {
    case 'form/addContact':
      return [...state, payload];

    case 'form/deleteContact':
      const filteredContacts = state.filter(contact => contact.id !== payload);
      return filteredContacts;

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case 'contactsList/filterContacts':
      return payload;

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
