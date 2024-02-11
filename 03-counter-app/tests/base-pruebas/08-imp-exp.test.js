import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {

  test('getHeroeById debe de retornar un héroe por ID', () => {

    const id = 2;
    const hero = getHeroeById( id );

    expect( hero ).toEqual({ id: 2, name: 'Spiderman', owner: 'Marvel' });

  });

  test('getHeroeById debe de retornar undefined si no existe', () => {

    const id = 90;
    const hero = getHeroeById( id );

    expect( hero ).toBeUndefined();

  });


  // Tarea:
  // pruebas getHeroesByOwner

  // 1
  // Debe de retornar un arreglo con lo héroes de DC
  // Length === 3
  // toEqual al arreglo filtrado

  test('getHeroesByOwner debe de retornar un arreglo con los héroes de DC', () => {

    const owner = 'DC';
    const dc = getHeroesByOwner(owner);

    expect( dc ).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' }
    ]);

    expect( dc.length ).toEqual(3);

  });

  // 2
  // debe de retornar un arreglo con los héroes de Marvel
  // length === 2

  test('getHeroesByOwner debe de retornar un arreglo con los héroes de Marvel', () => {

    const owner = 'Marvel';
    const marvel = getHeroesByOwner(owner);

    expect( marvel ).toEqual([
      { id: 2, name: 'Spiderman', owner: 'Marvel' },
      { id: 5, name: 'Wolverine', owner: 'Marvel' }
    ]);

    expect( marvel ).toEqual( heroes.filter( (hero) => hero.owner === owner ) );

    expect( marvel.length ).toEqual(2);

  });


});