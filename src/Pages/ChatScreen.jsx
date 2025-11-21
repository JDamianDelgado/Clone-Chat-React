import { useEffect, useState } from "react";
import { ContactList } from "../Components/ContactList";
import { getContactos } from "../Services/ContactoServices";
import { Chat } from "../Components/Chat";

export const ChatScreen = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [contactos, setContactos] = useState([]);
  const [selected, setSelected] = useState(null);
  function loadContactos() {
    const contacts = getContactos();
    setLoading(true);
    try {
      setContactos(contacts);
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  //   nuevo mensaje
  function handleNewMessage(newMsg) {
    setContactos((prev) =>
      prev.map((contact) =>
        contact.id === selected.id
          ? {
              ...contact,
              mensajes: [...contact.mensajes, newMsg],
            }
          : contact
      )
    );

    setSelected((prev) => ({
      ...prev,
      mensajes: [...prev.mensajes, newMsg],
    }));
  }

  //   nuevo contacto
  function handleAddNewContact(contactoNuevo) {
    setContactos((prev) => [...prev, contactoNuevo]);
  }

  useEffect(() => {
    loadContactos();
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }
  if (error) {
    return <p>Hubo un error: {error.message}</p>;
  }
  return (
    <div className="contenedorGlobal">
      <div className="contenedorContactos">
        <ContactList
          contactos={contactos}
          select={setSelected}
          handleAddNewContact={handleAddNewContact}
        />
      </div>
      <div className="contenedorChat">
        {selected ? (
          <Chat contacto={selected} handleNewMessage={handleNewMessage} />
        ) : (
          <div className="Presentacion">
            <img src="https://cdn-icons-png.flaticon.com/512/5045/5045582.png"></img>
          </div>
        )}
      </div>
    </div>
  );
};
