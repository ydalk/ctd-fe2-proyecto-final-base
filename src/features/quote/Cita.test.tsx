
import {expect, jest, it} from '@jest/globals';
//import { fireEvent, screen, render } from '@testing-library/react';
import { fireEvent, render, screen } from "../../test-utils";
import { Cita } from './Cita';

describe("Citas", ()=>{

    //Test 01
    describe('Pruebas en componente Citas', () => {
        it('Busqueda de cita por personaje', async () => {
            render(<Cita />)
        const input = screen.getByPlaceholderText('Ingresa el nombre del autor');
        fireEvent.change(input, { target: { value: 'Lisa' } })
        const button = screen.getByRole('button', { name: 'Obtener Cita' });
        fireEvent.click(button);
        expect(screen.findByText("Shut up, brain. I got friends now. I don't need you anymore.")).toBeTruthy();
    })
    });

    //Test 02
    describe('Pruebas en componente Citas random', () => {
        it('Busqueda de cita por personaje', async () => {
            render(<Cita />)
            
            const handleClick = jest.fn();
            render(<button onClick={handleClick}>Obtener cita aleatoria</button>);
            const button = screen.getByLabelText('Obtener cita aleatoria');
            fireEvent.click(button);
            expect(screen.findByText("But my mom says I'm cool."));
        })
    });

    //Test 03
    describe('Pruebas en el parrafo', () => {
        it('Mostrar parrafo en borrar', async() => {
            render(<Cita />)
            
            const handleClick = jest.fn();
            render(<button onClick={handleClick}>Borrar</button>);
            const button = screen.getByLabelText('Borrar');
            fireEvent.click(button);
            expect(screen.findByText('No se encontro ninguna cita'));
            
        });
    });

    
    //test 04 fail 
    describe('Pruebas en error <Citas />', () => {
        it('Busqueda de cita por personaje errado', async () => {
            render(<Cita />)

            const input = screen.getByPlaceholderText('Ingresa el nombre del autor');
            fireEvent.change(input, { target: { value: 'Carolina' } })
            const button = screen.getByRole('button', { name: 'Obtener Cita' });
            fireEvent.click(button);
            expect(screen.findByText("Por favor ingrese un nombre válido"))
        })
    });

})
