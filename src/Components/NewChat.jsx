import { UseChat } from "../Hooks/UseChat";

export function NewChat({ newMessage, contacto }) {
  //hok nuevo chat
  const { chat, handleChange, handleSubmit, keyEnter } = UseChat(
    newMessage,
    contacto
  );

  return (
    <div className="contenedorNewChat">
      <form className="contenedorForm" onSubmit={handleSubmit}>
        <textarea
          className="newChat"
          name="texto"
          value={chat.texto}
          onChange={handleChange}
          onKeyDown={keyEnter}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
