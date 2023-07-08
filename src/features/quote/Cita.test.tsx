
import { fireEvent, screen} from '@testing-library/react';
import { render } from "../../test-utils";
import { Cita } from './Cita';
import { server } from "../../mocks/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Citas", ()=>{

    //Test 01
    describe("Renderizado del componente Cita", ()=>{

        it("Mostrar componente", () => {
            render(<Cita />);
            expect(screen.getByText("No se encontro ninguna cita")).toBeInTheDocument();
        });
    });

    //Test 02
    describe('Pruebas en componente Citas', () => {
        it('Busqueda de cita por personaje', async () => {
            render(<Cita />)
        const input = screen.getByPlaceholderText('Ingresa el nombre del autor');
        fireEvent.change(input, { target: { value: 'Lisa' } })
        const button = screen.getByRole('button', { name: 'Obtener Cita' });
        fireEvent.click(button);
        expect(await screen.findByText("These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.")).toBeInTheDocument();
    })
    });

    //Test 03
    describe('Pruebas en componente Citas random', () => {
        it('Busqueda de cita por personaje', async () => {
            render(<Cita />)
            
            const handleClick = jest.fn();
            render(<button onClick={handleClick}>Obtener cita aleatoria</button>);
            const button = screen.getByLabelText('Obtener cita aleatoria');
            fireEvent.click(button);
            expect(await screen.findByText("But my mom says I'm cool.")).toBeTruthy();
        })
    });

    //Test 04
    describe('Pruebas en el parrafo', () => {
        it('Mostrar parrafo en borrar',async() => {
            render(<Cita />)
            
            const handleClick = jest.fn();
            render(<button onClick={handleClick}>Borrar</button>);
            const button = screen.getByLabelText('Borrar');
            fireEvent.click(button);
            expect(screen.getByText('No se encontro ninguna cita')).toBeTruthy();
            
        });
    });

    
    //test 05 fail 
    describe('Pruebas en error <Citas />', () => {
        it('Busqueda de cita por personaje errado', async() => {
            render(<Cita />)

            const input = screen.getByPlaceholderText('Ingresa el nombre del autor');
            fireEvent.change(input, { target: { value: 'Carolina' } })
            const button = screen.getByRole('button', { name: 'Obtener Cita' });
            fireEvent.click(button);
            expect( screen.findByText("Por favor ingrese un nombre válido")).toBeTruthy();
                       
        })
    });

    //test 06 fail 
    describe('Pruebas en componente <Citas />', () => {
        it('Busqueda de cita por números', async() => {
            render(<Cita />)

            const input = screen.getByPlaceholderText('Ingresa el nombre del autor');
            fireEvent.change(input, { target: { value: '0321654' } })
            const button = screen.getByRole('button', { name: 'Obtener Cita' });
            fireEvent.click(button);
            expect( await screen.findByText("Por favor ingrese un nombre válido")).toBeTruthy();
                       
        })
    });

})
