import { useEffect, useState } from "react";
import { AddNewContact } from "./NewContacto";

export function ContactList({ contactos, select, handleAddNewContact }) {
  const [filter, setFilter] = useState(contactos);
  const [search, setSearch] = useState("");
  useEffect(() => {
    setFilter(contactos);
  }, [contactos]);

  //filtro de contactos busqueda
  function searchContact(event) {
    event.preventDefault();
    const value = event.target.value.toLowerCase();
    setSearch(value);
    if (!value) {
      setFilter(contactos);
      return;
    }
    const findContacto = contactos.filter((contact) =>
      contact.nombre.toLowerCase().includes(value)
    );
    setFilter(findContacto);
  }

  function cleanSearch() {
    setFilter(contactos);
    setSearch("");
  }

  return (
    <div>
      <div className="barraContactList">
        <div className="barraSearch">
          <input
            type="text"
            placeholder="Buscar..."
            value={search}
            onChange={searchContact}
          ></input>{" "}
          <button className="" onClick={cleanSearch}>
            X
          </button>
        </div>

        <AddNewContact newContact={handleAddNewContact} className="formAdd" />
      </div>
      {filter.map((contacto) => (
        <div
          key={contacto.id}
          onClick={() => select(contacto)}
          className="contactList"
        >
          <img
            src={contacto.profilePhoto}
            alt={contacto.nombre}
            className={
              contacto.conectado === true ? "imgConectado" : "imgDesconectado"
            }
          />
          <div className="contactListData">
            <h3>{contacto.nombre}</h3>
            <p>{contacto.mensajes[contacto.mensajes.length - 1]?.texto}</p>{" "}
          </div>
        </div>
      ))}
    </div>
  );
}
