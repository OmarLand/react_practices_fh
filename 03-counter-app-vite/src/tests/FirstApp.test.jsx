import { getAllByText, getByText, render } from "@testing-library/react"
import { FirstApp } from "../FirstApp"


describe('Pruebas en FirstApp Component', () => { 

    test('Debe de hacer match con el snapshot', () => { 

        const title = 'Soy Omar Landaeta'
        const { container, getByText, getByTestId } = render( <FirstApp title = { title } /> )
        expect( getByText(title) ).toBeTruthy();
    
        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain( title );

        expect( getByTestId('test-title').innerHTML ).toContain(title);

     });

    test('Debe demostrar el subtitulo enviado por los props', () => { 

        const title = 'Soy Omar Landaeta'
        const subtitle = 'Soy el Subtitulo'
        const { getAllByText } = render( 
            <FirstApp 
                title = { title }
                subtitle = { subtitle }     
            />
        )
        expect( getAllByText(subtitle) ).toBeTruthy();
        expect( getAllByText(subtitle).length ).toBe(2); // 2 subtitulos
    
    })

 })