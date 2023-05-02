import { renderHook } from "@testing-library/react"
import { useForm } from '../../src/hooks/useForm'
import { act } from "react-dom/test-utils"


describe('Pruebas en useForm', () => {

    const initalForm = {
        name: 'Miguel',
        email: 'miguel@gmail.com'
    }
  
    test('debe de regresar los valores por defecto', () => {
        const { result } = renderHook( () =>  useForm(initalForm) );
        
        expect(result.current).toEqual({
              name: initalForm.name,
              email: initalForm.email,
              formState: initalForm,
              onInputChange: expect.any( Function ),
              onResetForm: expect.any( Function )
            })
    })

    test('debe de cambiar el nombre del formulario', () => {
        const newValue = 'Juan';
        const { result } = renderHook( () =>  useForm(initalForm) );
        const { onInputChange } = result.current;
        
        act(()=> {
            onInputChange({ target: {name: 'name', value: newValue} })
        })

        expect( result.current.name ).toBe( newValue );
        expect( result.current.formState.name ).toBe( newValue );

    })

    test('debe de realizar el reset del formulario', () => {
        const newValue = 'Juan';
        const { result } = renderHook( () =>  useForm(initalForm) );
        const { onInputChange, onResetForm } = result.current;
        
        act(()=> {
            onInputChange({ target: {name: 'name', value: newValue} })
            onResetForm();
        })

        expect( result.current.name ).toBe( initalForm.name );
        expect( result.current.formState.name ).toBe( initalForm.name );

    })
    
    

})
