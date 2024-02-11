import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => {

  test('Debe de retornar un string y un número', () => {

    const [ text, numbers ] = retornaArreglo();

    expect(typeof text).toBe('string');
    expect(typeof numbers).toBe('number');

    expect( text ).toStrictEqual( expect.any(String) );
    expect( numbers ).toStrictEqual( expect.any(Number) );

  });

});