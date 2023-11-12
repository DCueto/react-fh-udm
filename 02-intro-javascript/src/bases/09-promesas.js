import { getHeroeById } from "./bases/08-imp-exp";

// const promesa = new Promise((resolve, reject) => {
  
//   setTimeout(() => {
//     // Tarea
//     // importar el
//     const p1 = getHeroeById(2);
//     resolve(p1);
//     reject('No se pudo encontrar el héroe');
//   }, 2000);

// });

// promesa
// .then( (heroe) => console.log('"then" de la promesa: ', heroe))
// .catch(err => console.warn(err));

const getHeroesByIdAsync = (id) => {

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      // Tarea
      // importar el
      const p1 = getHeroeById(id);

      if(p1){
        resolve(p1);
      } else{
        reject('No se pudo encontrar el héroe');
      }

    }, 2000);

  });

}

getHeroesByIdAsync(4)
  .then(hero => console.log(hero));

getHeroesByIdAsync(2)
  .then(console.log);

getHeroesByIdAsync(6)
  .then( console.log )
  .catch( console.warn );