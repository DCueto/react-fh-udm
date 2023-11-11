

// Desestructuración
// Asignación Desestructurante

const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman',
  rango: 'Soldado',
};

// const { nombre:nombre2 } = persona;
// console.log(nombre2);

// const {clave, nombre, edad} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

// const retornaPersona = ( usuario ) => {
//   const {clave, nombre, edad} = usuario;
//   console.log(edad, clave, nombre);
// }

// retornaPersona(persona);


const usaContext = ( {nombre, edad, rango = 'Capitán', clave} ) => {
  // console.log(nombre, edad, rango, clave);
  
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.3234,
      lng: -23.43432
    }
  }
}

// const avenger = useContext2(persona);

const {nombreClave, anios, latlng:{lat, lng}} = usaContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);