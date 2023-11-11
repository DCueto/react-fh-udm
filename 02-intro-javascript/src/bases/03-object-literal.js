
const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 333442242,
    lat: 14.332324,
    lng: 34.23443223,
  },
};

console.log({persona});


const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);