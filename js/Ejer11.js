let nombre1 = prompt('ingrese su nombre1');
let edad1 = prompt('ingrese su edad1');
let nombre2 = prompt('ingrese su nombre2');
let edad2 = prompt('ingrese su edad2');
let nombre3 = prompt('ingrese su nombre3');
let edad3 = prompt('ingrese su edad3');

let edadmax = Math.max(edad1,edad2,edad3);

if(edadmax == edad1){
    document.write("El mayor se llama: ", nombre1);
}
if(edadmax == edad2){
    document.write("El mayor se llama: ", nombre2);
}
if(edadmax == edad3){
    document.write("El mayor se llama: ", nombre3);
}