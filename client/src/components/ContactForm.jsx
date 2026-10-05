import { useState, useEffect } from 'react';

const empty = { name: '', email: '', phone: '', address: '' };

export default function ContactForm({ onSubmit, editing, onCancel, error }) {
  const [form, setForm] = useState(empty);

  useEffect(() => {
    setForm(editing || empty);
  }, [editing]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ok = await onSubmit(form);
    if (ok) setForm(empty);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>{editing ? 'Edit Contact' : 'Add Contact'}</h2>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="phone" placeholder="Phone (10 digits)" value={form.phone} onChange={handleChange} />
      <input name="address" placeholder="Address (optional)" value={form.address} onChange={handleChange} />
      {error && <p className="error">{error}</p>}
      <button type="submit">{editing ? 'Update' : 'Add'}</button>
      {editing && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
}