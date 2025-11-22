import { AddNewContact } from "./NewContacto";
import { UseContact } from "../Hooks/UseContact";

export function ContactList({ contactos, select, handleAddNewContact }) {
  const { searchContact, cleanSearch, filter, search } = UseContact(contactos);

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
