let titulo = document.querySelector("title");
console.log(titulo.innerHTML);

let integrante = document.querySelectorAll("dl")
let nombreCompleto = document.querySelectorAll("dd")

let nombre1 = nombreCompleto[0]
let nombre2 = nombreCompleto[1]
let nombre3 = nombreCompleto[2]
let nombre4 = nombreCompleto[3]

let imprimirNombre1 = nombre1.innerHTML + " " + nombre2.innerHTML + " " + nombre3.innerHTML.toUpperCase() + " " + nombre4.innerHTML.toUpperCase();


let nombre5 = nombreCompleto[4]
let nombre6 = nombreCompleto[5]
let nombre7 = nombreCompleto[6]
let nombre8 = nombreCompleto[7]

let imprimirNombre2 = nombre5.innerHTML + " " + nombre6.innerHTML + " " + nombre7.innerHTML.toUpperCase() + " " + nombre8.innerHTML.toUpperCase();

for (let i = 1; i <= integrante.length; i++) {
    if (i % 2 === 1) {
        imprimirNombre = imprimirNombre1;
    } else {
        imprimirNombre = imprimirNombre2;
    }
    console.log("Integrante " + i + ": " + imprimirNombre);
}

if ((nombre1 == nombre5 || nombre1 == nombre6) || (nombre2 == nombre5 || nombre2 == nombre6)) {
    console.log("Hubo coincidencia");
} else {
    console.log("No hubo coincidencia");
}

// Hasta aca llegamos, sabemos que tiene errores pero no encontramos otra forma y teniendo en cuenta que las proximas instrucciones del ejercicio se basan en lo anterior dejamos el codigo hasta aca.