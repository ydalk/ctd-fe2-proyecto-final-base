/* eslint-disable jest/valid-expect */
/* eslint-disable testing-library/await-async-query */
import {expect, jest, test} from '@jest/globals';
import Cita from "../quote/Cita";
import { render } from "../../test-utils";
import { fireEvent, screen } from '@testing-library/react';


//Test 01
describe('Pruebas en componente Citas', () => {
    it('Busqueda de cita por personaje', async () => {
        render(<Cita />)

        const input = screen.getByPlaceholderText('Ingresa el nombre del autor');
        fireEvent.change(input, { target: { value: 'Lisa' } })
        const button = screen.getByRole('button', { name: 'Obtener Cita' });
        fireEvent.click(button);
        // eslint-disable-next-line jest/valid-expect
        expect(screen.findByText("Shut up, brain. I got friends now. I don't need you anymore."));
    })
});

//Test 02
describe('Pruebas en componente Citas random', () => {
    test('Busqueda de cita por personaje', async () => {
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
    test('Mostrar parrafo en borrar', async() => {
        render(<Cita />)

        const handleClick = jest.fn();
        render(<button onClick={handleClick}>Borrar</button>);
        const button = screen.getByLabelText('Borrar');
        fireEvent.click(button);
        expect(screen.findByText('No se encontro ninguna cita'));
    
    });
});

