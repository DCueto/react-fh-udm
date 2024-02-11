import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
import heroes from "../../src/data/heroes";

describe('Tests de 09-promesas', () => {

  test('getHeroeByIdAsync debe de retornar un héroe', (done) => {

    const id = 2;

    const asyncHero = getHeroeByIdAsync(id)
      .then( hero => {

        expect( hero ).toEqual( heroes.find( h => h.id === id) );

        done();

      })
      .catch( console.warn );

  });

  test('getHeroeByIdAsync debe de retornar un error si heroe no existe', (done) => {

    const id = 90;

    const asyncHero = getHeroeByIdAsync(id)
      .then( hero => {
        expect( hero ).toBeFalsy();
        done();
      })
      .catch( (err) => {
        expect(err).toBe(`No se pudo encontrar el héroe ${id}`);
        done();
      } );

  });


});