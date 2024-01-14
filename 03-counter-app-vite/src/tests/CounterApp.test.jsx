// Tarea
// Pruebas con el <CounterApp>
// test: Debe hacer match con el Snapshot
// Debe de mostrar el valor inicial de 100 <CounterApp value={100} >

import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../CounterApp";

describe('Pruebas en el <CounterApp> :', () => { 

    const iCounter = 10;

    test('Debe de hacer match con el snapshot', () => {

        const { container } = render( <CounterApp value={iCounter} /> );
        expect( container ).toMatchSnapshot();
     
    });

    test('Debe de mostrar el valor inicial de 100 <CounterApp value={100} >', () => { 
        
        render( <CounterApp value = { 100 } /> );
        expect( screen.getByText(100) ).toBeTruthy();
        expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toContain('100')
   
    });
    
    test('Debe de incrementar con el botón +1', () => { 

        render( <CounterApp value={ iCounter } /> );
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByText('11') ).toBeTruthy();

    });

    test('Debe de Decrementar con el botón -1', () => { 

        render( <CounterApp value={ iCounter } /> );
        fireEvent.click( screen.getByText('-1') );
        expect( screen.getByText('9') ).toBeTruthy();

    });

    test('Debe funcinar el botón de RESET', () => {
        render( <CounterApp value={ iCounter } /> );
        fireEvent.click( screen.getByRole('button', { name : 'btn-reset' }) );

        expect( screen.getByText( iCounter ) ).toBeTruthy();
    })

 })