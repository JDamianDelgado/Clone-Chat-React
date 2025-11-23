import { useEffect, useState } from "react";
import { getContactos } from "../Services/ContactoServices";

export function UseScreen() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [contactos, setContactos] = useState([]);
  const [selected, setSelected] = useState(null);
  function loadContactos() {
    const contactosList = getContactos();
    setLoading(true);
    try {
      setContactos(contactosList);
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  //uevo msj
  function handleNewMessage(newMsg) {
    setContactos((prev) =>
      prev.map((cont) =>
        cont.id === selected.id
          ? {
              ...cont,
              mensajes: [...cont.mensajes, newMsg],
            }
          : cont
      )
    );

    setSelected((prev) => ({
      ...prev,
      mensajes: [...prev.mensajes, newMsg],
    }));
  }

  //nuevo contacto
  function handleAddNewContact(contactoNuevo) {
    setContactos((prev) => [...prev, contactoNuevo]);
  }

  useEffect(() => {
    loadContactos();
  }, []);

  return {
    loading,
    error,
    contactos,
    selected,
    setSelected,
    handleAddNewContact,
    handleNewMessage,
  };
}
