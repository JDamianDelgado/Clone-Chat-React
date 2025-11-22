import { ContactList } from "../Components/ContactList";
import { Chat } from "../Components/Chat";
import { UseScreen } from "../Hooks/UseScreen";

export const ChatScreen = () => {
  const {
    loading,
    error,
    contactos,
    selected,
    setSelected,
    handleAddNewContact,
    handleNewMessage,
  } = UseScreen();

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
