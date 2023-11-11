
// Funciones en JS
// aconsejado usar funciones como constantes para evitar que se pueda modificar esa referencia
const saludar = function(nombre) {
  return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => `Hola, ${nombre}`;
const saludar3 = () => `Hola Mundo`;

// saludar = 30;

// console.log(saludar('Goku'));

console.log(saludar2);
console.log(saludar2('Goku'));
console.log(saludar3());


const getUser = () => ({
  uid: 'ABC123',
  username: 'abcuser_234'
});

console.log(getUser());


// Tarea
// 1. Transformar a arrow function
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas

const getUsuarioActivo = nombre => ({
  uid: 'ABCD34',
  username: nombre
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);