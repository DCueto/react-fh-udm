

const personajes = ['Goku', 'Vegeta', 'Trunks'];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const [ , , p3 ] = personajes;
console.log(p3);

const retornaArreglo = () => ['ABC', 123];

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);


// Tarea
// 1. El primer valor del arr se llamará nombre y, el segundo se llamará setNombre
const usaState = ( valor ) => [valor, () => console.log('Hola Mundo') ];

const [nombre, setNombre] = usaState('Goku');

console.log(nombre);
setNombre();