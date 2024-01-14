import { render, screen } from "@testing-library/react"
import { FirstApp } from "../FirstApp"


describe('Pruebas en FirstApp Component', () => {
    
    const title    = 'Hola Soy Omar!'
    const subtitle = 'Soy otro subtitulo de pruebas!'

    test('Debe de hacer Match con el Snapshot', () => { 

        const { container } = render( <FirstApp title={ title }/> );
        expect( container ).toMatchSnapshot();

    });

    test('Debe de mostrar el mensaje "Hola, soy Omar"', () => {

        render( <FirstApp title={ title } /> );
        expect( screen.getByText(title) ).toBeTruthy();
        // screen.debug();

    });

    test('Debe de mostrar el titulo en un h1', () => {
        render( <FirstApp title = { title } /> );
        expect( screen.getByRole('heading', { level:1 }).innerHTML ).toContain( title );
    })

    test('Debe de mostrar el subtitulo enviado mediante props:', () => { 
        render(
            <FirstApp
                title = { title }
                subtitle = { subtitle }
            />
        );

        expect( screen.getAllByText(subtitle).length ).toBe(2);
    })

 })