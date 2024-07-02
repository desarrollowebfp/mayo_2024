const peluche = {
  nombre: "Dinosaurio",
  precio: 14.5,
  buenEstado: true,
  color: "verde",
  imagen: "http://miimagen.jpg",
  tienda: {
    nombre: "Ikea",
    localizacion: "C.C. Comercial",
    ciudad: "Madrid",
  },
};

console.log(peluche.nombre);
console.log(peluche["nombre"]);
console.log(peluche.tienda.localizacion);
console.log(peluche["tienda"]["localizacion"]);

peluche.especie = "Braquiosaurio";
console.log(peluche);
peluche.nombre = "Paquito";
console.log(peluche);

delete peluche.especie;
console.log(peluche)