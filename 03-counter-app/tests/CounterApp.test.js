import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Tests de <CounterApp />', () => {

  const initialValue = 10;

  test('Debe de hacer match con el Snapshot', () => {
    
    const { container } = render(<CounterApp value={30} />);

    expect( container ).toMatchSnapshot();

  });

  test('Debe de mostrar el valor inicial de 100', () => {

    render(<CounterApp value={100} />);

    expect( screen.getByRole( 'heading', { level: 2 } ).innerHTML ).toContain('100');

  });

  test('Debe de incrementar con el botón +1', () => {

    render( <CounterApp value={initialValue} /> );

    fireEvent.click( screen.getByText('+1') );

    expect( screen.getByText(initialValue + 1) ).toBeTruthy();

  });

  test('Debe de decrementar con el botón -1', () => {

    render( <CounterApp value={initialValue} /> );
    
    fireEvent.click( screen.getByText('-1') );
    // screen.debug();
    expect( screen.getByText(initialValue - 1) ).toBeTruthy();

  });

  test('Debe de funcionar el botón de reset', () => {

    render( <CounterApp value={initialValue} /> );

    fireEvent.click( screen.getByText('+1') );
    fireEvent.click( screen.getByText('+1') );
    fireEvent.click( screen.getByText('+1') );

    screen.debug();

    // fireEvent.click( screen.getByText('Reset') );
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

    screen.debug();
    expect( screen.getByText( initialValue ) ).toBeTruthy();

  });


});