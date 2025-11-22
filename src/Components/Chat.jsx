import { NewChat } from "./NewChat";

export function Chat({ contacto, handleNewMessage }) {
  if (!contacto) {
    return <div className="chatVacio">Selecciona un contacto</div>;
  }
  return (
    <div className="chat">
      <div className="chatHeader">
        <div className="chatHeaderUser">
          <img
            src={contacto.profilePhoto}
            alt={contacto.id}
            className={`
                ${
                  contacto.conectado === true
                    ? "imgConectado"
                    : "imgDesconectado"
                }
                `}
          />
          <h2>{contacto.nombre}</h2>
          <span
            className={
              contacto.conectado === true ? "Conectado" : "Desconectado"
            }
          >
            {contacto.conectado === true ? "Conectado" : "Desconectado"}
          </span>
        </div>
        <p>Última conexión: {contacto.ultimaConexion}</p>
      </div>
      <div className="chatMensajes">
        {contacto.mensajes.map((mensaje, index) => (
          <div
            key={index}
            className={`mensajeGlobo ${
              mensaje.autor === "yo" ? "globoYo" : "globoOtro"
            }`}
          >
            {mensaje.autor === "yo" ? (
              <>
                <div className="globo">
                  <p>{mensaje.texto}</p>

                  <div className="mensajeMeta">
                    <span className="hora">{mensaje.hora}</span>
                    <span className="check">
                      <small>{mensaje.status === "leido" ? " ✓✓" : " ✓"}</small>
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <div className="globo">
                <p>{mensaje.texto}</p>
                <div className="mensajeMeta">
                  <span className="hora">{mensaje.hora}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <NewChat newMessage={handleNewMessage} contacto={contacto} />
    </div>
  );
}
