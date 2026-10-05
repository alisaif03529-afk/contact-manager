import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/contacts' });

export const getContacts = (search = '') =>
  API.get('/', { params: { search } });
export const createContact = (data) => API.post('/', data);
export const updateContact = (id, data) => API.put(`/${id}`, data);
export const deleteContact = (id) => API.delete(`/${id}`);