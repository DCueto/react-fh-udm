import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas de 05-funciones', () => {

  test('getUser debe de retornar un objeto', () => {

    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };

    const user = getUser();
    console.log(user);

    expect( testUser ).toEqual( user );
  })


  test('getUusuarioActivo debe de retornar un objeto', () => {

    const name = 'Daniel';

    const testActiveUser = {
      uid: 'ABC567',
      username: name
    }

    const activeUser = getUsuarioActivo(name);

    expect( testActiveUser ).toEqual( activeUser );

  });

});