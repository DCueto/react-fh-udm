import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas de 11-async-await', () => {

  // test('getImagen debe retornar la URL de una imagen aleatoria', async () => {

  //   const response = await getImagen();
  //   expect(typeof response).toBe('string');

  // });


  test('getImagen debe retornar un mensaje de error en caso de fallar la petición', async () => {

    const response = await getImagen();

    expect(typeof response).toBe('string');
    expect(response).toBe('No se encontró la imagen');

  });




});