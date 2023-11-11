

const nombre = 'Daniel';
const apellido = 'Cueto';

const nombreCompleto = `${ nombre } ${ apellido }`;

function getSaludo(nombre){
  return 'Hola ' + nombre;
}

console.log(`Esto es un texto: ${ getSaludo(nombreCompleto) }`);