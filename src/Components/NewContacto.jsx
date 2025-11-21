import { useState } from "react";

export function AddNewContact({ newContact }) {
  const [form, setForm] = useState(() => ({
    id: Date.now(),
    nombre: "",
    profilePhoto: "",
    ultimaConexion: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    conectado: true,
    mensajes: [],
  }));
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

  return (
    <div className="contenedorAdd">
      {view === true ? (
        <form onSubmit={handleSubmit} className="formAdd">
          <label htmlFor="nombre">Nombre</label>
          <input
            placeholder="Nombre"
            type="text"
            value={form.nombre}
            name="nombre"
            id="nombre"
            onChange={handleChange}
          />
          <label htmlFor="profilePhoto">Foto de contacto</label>
          <input
            placeholder="Url"
            type="url"
            name="profilePhoto"
            value={form.profilePhoto}
            id="profilePhoto"
            onChange={handleChange}
          />
          <div></div>
          <button type="submit">Agregar</button>
          <button type="button" onClick={handleClose}>
            Cerrar
          </button>
        </form>
      ) : (
        <button onClick={() => setView(true)}>+</button>
      )}
    </div>
  );
}
