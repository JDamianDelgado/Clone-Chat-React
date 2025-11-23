import { mensajesPredefinidos } from "../Data/MensajesAutomaticos";

const msjs = mensajesPredefinidos;
export function getMsjPredefinidos() {
  return msjs;
}

export function respRandom() {
  const respuestaAleatoria = msjs[Math.floor(Math.random() * msjs.length)];
  return respuestaAleatoria;
}
