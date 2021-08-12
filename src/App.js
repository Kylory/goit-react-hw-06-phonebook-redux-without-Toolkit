import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactsList/ContactsList';
import SearchContacts from './components/SearchContacts/SearchContacts';

const App = () => {
  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <SearchContacts />
      <ContactsList />
    </>
  );
};

export default App;
