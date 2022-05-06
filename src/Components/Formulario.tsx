import { useForm } from '../Hooks/useForm';

interface FormData {
    email: string;
    nombre: string;
    edad: number;
}

export const Formulario = () => {
    const { formulario, handleChange } = useForm<FormData>({
        email: 'ilegal_sprite@outlook.com',
        nombre: 'Alexis Evaristo',
        edad: 20
    });
    const { email, nombre, edad } = formulario;

    // const { nombre, email, edad, handleChange, formulario } = useForm<FormData>({
    //     email: 'ilegal_sprite@outlook.com',
    //     nombre: 'Alexis Evaristo',
    //     edad: 20
    // });

    return (
        <form>
            <div className='mb-3'>
                <label className='form-label'>Email:</label>
                <input 
                    type='email' 
                    className='form-control'
                    name='email'  
                    value={ email }
                    onChange={ handleChange }  
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Nombre:</label>
                <input 
                    type='text' 
                    className='form-control'
                    name='nombre'
                    value={ nombre }
                    onChange={ handleChange }  
                />
            </div>
            
            <div className='mb-3'>
                <label className='form-label'>Edad:</label>
                <input 
                    type='number' 
                    className='form-control'
                    name='edad'
                    value={ edad }
                    onChange={ handleChange }  
                />
            </div>

            <pre>{ JSON.stringify( formulario ) }</pre>
        </form>
    );
}