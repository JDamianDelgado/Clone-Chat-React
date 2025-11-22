import { useEffect, useState } from "react";

export function UseChat(newMessage, contacto) {
  const createNewChat = () => ({
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
  const [chat, setChat] = useState(createNewChat);

  useEffect(() => {
    setChat((prev) => ({ ...prev, texto: "" }));
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
      return alert("mensaje no puede estar vacío");
    }

    newMessage(chat);
    setChat(createNewChat());
  }

  return {
    chat,
    handleChange,
    handleSubmit,
  };
}
