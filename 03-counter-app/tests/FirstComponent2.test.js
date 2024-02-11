import { render, screen } from '@testing-library/react';
import { FirstComponent } from '../src/FirstComponent';

describe('Pruebas en <FirstComponent />', () => {

  const title = 'Soy un test del título';
  const number = 1;
  const subtitle = 'Soy un subtítulo';

  test('Debe hacer match con el snapshot', () => {

    const { container } = render(
      <FirstComponent title={title} number={number} />
    );

    expect( container ).toMatchSnapshot();

  });

  test('Debe mostrar el mensaje "Soy un test del título"', () => {

    render(
      <FirstComponent title={title} number={number} />
    );
    // screen.debug();
    expect( screen.getByText(title) ).toBeTruthy();

  });

  test('Debe de mostrar el título en un h2', () => {

    render(
      <FirstComponent title={title} number={number} />
    );
    expect( screen.getByRole('heading', {level: 2}).innerHTML )
      .toContain(title);

  });

  test('Debe de mostrar el subtítulo enviado por props', ( ) => {

    render(
      <FirstComponent title={title} number={number} subTitle={subtitle} />
    );
    
    expect( screen.getAllByText(subtitle).length ).toBe(2);
    
  });

});