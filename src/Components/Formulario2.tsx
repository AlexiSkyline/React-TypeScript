import { useForm } from '../Hooks/useForm';

interface FormData {
    postal: string;
    ciudad: string;
}

export const Formulario2 = () => {
    const { formulario, handleChange } = useForm<FormData>({
        postal: '',
        ciudad: ''
    });
    const { postal, ciudad } = formulario;

    return (
        <form>
            <div className='mb-3'>
                <label className='form-label'>Código postal:</label>
                <input 
                    type='text' 
                    className='form-control'
                    name='postal' 
                    value={ postal } 
                    onChange={ handleChange }  
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Ciudad:</label>
                <input 
                    type='text' 
                    className='form-control'
                    name='ciudad'
                    value={ ciudad }
                    onChange={ handleChange }  
                />
            </div>

            <pre>{ JSON.stringify( formulario ) }</pre>
        </form>
    );
}