//Creamos una promesa
const prepararHelado = (sabor) => {
  return new Promise((resolver, rechazar) => {
    //Forzar una "asincronia"
    setTimeout(() => {
      if (sabor === "chorizo") {
        rechazar("🤮 No se pueden hacer aberraciones así");
      } else {
        resolver("Toma tu helado 🍦");
      }
    }, 5000);
  });
};

//VAMOS A CONSUMIR Y GESTIONAR ASINCRONIA
prepararHelado("fresa")
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((mensajeError) => {
    console.log(mensajeError);
  });

prepararHelado("chorizo")
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((mensajeError) => {
    console.log(mensajeError);
  });
