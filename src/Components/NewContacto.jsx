import { UseNewContact } from "../Hooks/UseContact";

export function AddNewContact({ newContact }) {
  //hook nuevo contcto
  const { handleChange, handleClose, handleSubmit, setView, view, form } =
    UseNewContact(newContact);

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
