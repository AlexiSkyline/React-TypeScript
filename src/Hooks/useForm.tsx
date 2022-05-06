import { ChangeEvent, useState } from 'react';

// export function useForm<T>( initState: T ) {
export const useForm = <T extends Object>( initState: T ) => {
    const [ formulario, setFormulario ] = useState( initState );

    const handleChange = ( { target }: ChangeEvent<HTMLInputElement> ): void => {
        setFormulario({
            ...formulario,
            [target.name]: target.value
        });
    }

    return { formulario, handleChange, ...formulario };
}