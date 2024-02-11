import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Puebas de 06-deses-obj. Desestructuración de objetos.', () => {

  test('usContext debe recibir un objeto y retornar un objeto desestructurado.', () => {
    
    const testPersona = {
      clave: 'ABC1234',
      nombre: 'Daniel',
      edad: 18,
      rango: 'Grumete',
    }

    const { nombreClave, latlng: {lat, lng} } = usContext(testPersona);
    
    expect(testPersona.clave).toEqual(nombreClave);
  });

});