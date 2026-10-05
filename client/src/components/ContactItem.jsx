export default function ContactItem({ contact, onEdit, onDelete }) {
  return (
    <div className="card">
      <div>
        <h3>{contact.name}</h3>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
        {contact.address && <p>{contact.address}</p>}
      </div>
      <div className="actions">
        <button onClick={() => onEdit(contact)}>Edit</button>
        <button onClick={() => onDelete(contact._id)}>Delete</button>
      </div>
    </div>
  );
}