const ProbarFuncion = () => {
  fetch("/.netlify/functions/hola")
    .then((res) => res.json())
    .then((data) => {
      console.log("Respuesta de la función:", data.mensaje);
      alert(data.mensaje); // Muestra "¡Funciona, Fexyd!"
    })
    .catch((err) => {
      console.error("Error llamando a la función", err);
    });
};

function Button() {
  return <button onClick={ProbarFuncion}>probar funcion</button>;
}

export default Button;
