import { useEffect, useState } from "react";
import { respRandom } from "../Services/MensajePredefinidos";

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

  function keyEnter(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(event);
    }
  }

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

    //resp automatica

    const resp = respRandom();
    setTimeout(() => {
      const respPredefinida = {
        id: Date.now(),
        autor: "otro",
        creado: new Date().toLocaleString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        texto: resp,
        status: "leido",
        hora: new Date().toLocaleString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      newMessage(respPredefinida);
    }, 1000);
  }

  return {
    chat,
    handleChange,
    handleSubmit,
    keyEnter,
  };
}
