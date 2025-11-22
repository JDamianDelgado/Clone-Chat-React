import { useEffect, useState } from "react";

export function UseNewContact(newContact) {
  const createNewContact = () => ({
    id: Date.now(),
    nombre: "",
    profilePhoto: "",
    ultimaConexion: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    conectado: true,
    mensajes: [],
  });
  const [form, setForm] = useState(createNewContact);
  const [view, setView] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.nombre.trim()) {
      return alert("El nombre no puede estar vacio ");
    }
    const contactoFinal = {
      ...form,
      profilePhoto:
        form.profilePhoto.trim() ||
        "https://res.cloudinary.com/demo/image/upload/d_avatar.png/non_existing_id.png",
    };
    newContact(contactoFinal);
    setView(false);
    setForm(createNewContact());
  }

  function handleClose() {
    setView(false);
    setForm({
      id: Date.now(),
      nombre: "",
      profilePhoto: "",
      ultimaConexion: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      conectado: Math.random() < 0.5,
      mensajes: [],
    });
  }

  return {
    handleChange,
    handleClose,
    handleSubmit,
    setView,
    view,
    form,
  };
}

export function UseContact(contactos) {
  const [filter, setFilter] = useState(contactos);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setFilter(contactos);
  }, [contactos]);

  function searchContact(event) {
    const value = event.target.value.toLowerCase();
    setSearch(value);
    if (!value.trim()) {
      setFilter(contactos);
      return;
    }

    const findContacto = contactos.filter((contact) =>
      contact.nombre.toLowerCase().includes(value)
    );
    setFilter(findContacto);
  }

  function clearSearch() {
    setSearch("");
    setFilter(contactos);
  }
  return {
    searchContact,
    clearSearch,
    filter,
    search,
  };
}
