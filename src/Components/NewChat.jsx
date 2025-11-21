import { useEffect, useState } from "react";

export function NewChat({ newMessage, contacto }) {
  const [chat, setChat] = useState(() => ({
    id: Date.now(),
    autor: "yo",
    creado: new Date().toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    texto: "",
    status: "entregado",
    hora: new Date().toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  }));

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setChat((prev) => ({
      ...prev,
      texto: "",
    }));
  }, [contacto]);
  function handleChange(event) {
    const { name, value } = event.target;
    setChat({
      ...chat,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!chat.texto.trim()) {
      return alert("mensaje no puede estar vacio");
    }
    newMessage(chat);
    setChat({
      id: Date.now(),
      autor: "yo",
      creado: new Date().toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      texto: "",
      status: "entregado",
      hora: new Date().toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
  }

  return (
    <div className="contenedorNewChat">
      <form className="contenedorForm" onSubmit={handleSubmit}>
        <textarea
          className="newChat"
          type="text"
          name="texto"
          id="texto"
          value={chat.texto}
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
