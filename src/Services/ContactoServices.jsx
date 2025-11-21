import { dataInitial } from "../Data/Contactos";

export function getContactos() {
  const data = dataInitial;
  return data;
}

export function getContactosById(id) {
  const foundContact = dataInitial.find(
    (contact) => Number(contact.id) === Number(id)
  );
  if (!foundContact) {
    return null;
  } else {
    return foundContact;
  }
}

export function searchContact(name) {
  const filteredContacto = dataInitial.filter((contact) =>
    contact.nombre.toLowerCase().includes(name.toLowerCase())
  );
  if (!filteredContacto) {
    return [];
  } else {
    return filteredContacto;
  }
}
