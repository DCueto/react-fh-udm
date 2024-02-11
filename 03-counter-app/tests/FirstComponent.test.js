import {render} from '@testing-library/react';
import { FirstComponent } from '../src/FirstComponent';

describe('Pruebas en <FirstComponent />', () => {

  // test('Debe de hacer match con el snapshot', () => {
  //   const { container } = render( <FirstComponent title='Test Component' number={0} /> );

  //   expect( container ).toMatchSnapshot();
  // });

  test('Debe de mostrar el título en un h2', () => {

    const title = 'Test Component';
    
    const { container, getByText, getByTestId } = render(<FirstComponent title={title} number={0} />);
    expect( getByText(title) ).toBeTruthy();

    const h2 = container.querySelector('h2');
    expect( h2.innerHTML ).toContain(title);
    
    expect( getByTestId('test-title') ).toBeTruthy();
    expect( getByTestId('test-title').innerHTML ).toContain(title);

  });

  test('Debe de mostrar el subtitulo enviado por props', () => {
    const title = 'Test Component';
    const subtitle = 'Soy un subtítulo'
    const { getByText, getAllByText } = render(
      <FirstComponent 
        title={title} 
        subTitle={subtitle} 
        number={0} 
      />
    );

    // expect( getByText(subtitle) ).toBeTruthy();
    expect( getAllByText(subtitle).length ).toBe(2);
    expect( getAllByText(subtitle) ).toBeTruthy();


  });

});


