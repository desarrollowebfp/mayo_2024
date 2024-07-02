function sayHello() {
  console.log("Hello");
}

sayHello();

//

function sayHelloWithName(name) {
  console.log("Hello " + name);
}

sayHelloWithName("Paco");
sayHelloWithName("Maria");

//

function sumaDosNumeros(numeroA, numeroB) {
  const total = numeroB + numeroA;
  console.log(total);
}

sumaDosNumeros(5, 10);
sumaDosNumeros(100, 10.5);

//

function calcularEdad(name, añoDeNacimiento, añoActual = 2024) {
  if (añoActual > 2024) {
    console.log("Vete a engañar a tu tia");
  } else if (añoDeNacimiento > añoActual) {
    console.log("Vas al revés en el tiempo");
  } else {
    const edad = añoActual - añoDeNacimiento;
    console.log("La edad de " + name + " es: " + edad);
  }
}

calcularEdad("Antonio", 1990);
calcularEdad("Ghandi", 1869, 1900);
calcularEdad("Paco", 1998, 2089);
calcularEdad("Gracioso", 2026, 2021)