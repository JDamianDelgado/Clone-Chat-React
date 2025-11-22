import { UseChat } from "../Hooks/UseChat";

export function NewChat({ newMessage, contacto }) {
  const { chat, handleChange, handleSubmit } = UseChat(newMessage, contacto);

  return (
    <div className="contenedorNewChat">
      <form className="contenedorForm" onSubmit={handleSubmit}>
        <textarea
          className="newChat"
          name="texto"
          value={chat.texto}
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
