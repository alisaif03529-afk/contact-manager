import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import {
  getContacts, createContact, updateContact, deleteContact,
} from './services/api';
import './App.css';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');

  const load = async () => {
    const { data } = await getContacts(search);
    setContacts(data);
  };

  useEffect(() => { load(); }, [search]);

  const handleSubmit = async (form) => {
    setError('');
    try {
      if (editing) await updateContact(editing._id, form);
      else await createContact(form);
      setEditing(null);
      load();
      return true;
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
      return false;
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this contact?')) return;
    await deleteContact(id);
    load();
  };

  return (
    <div className="container">
      <h1>Contact Manager</h1>
      <ContactForm
        onSubmit={handleSubmit}
        editing={editing}
        onCancel={() => { setEditing(null); setError(''); }}
        error={error}
      />
      <input
        className="search"
        placeholder="Search contacts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ContactList contacts={contacts} onEdit={setEditing} onDelete={handleDelete} />
    </div>
  );
}