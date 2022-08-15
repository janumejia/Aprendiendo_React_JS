import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider'

// Nuevos datos cuando presione el botón
const newData = {
    nombre: "Felipe",
    edad: 100,
}

export const BotonCambiarDatos = () => {
    
    const { setData } = useContext(DataContext)
    
    return (
        <div>
            <button
                className="btn btn-primary"
                onClick={ () => setData( newData ) }
            >
                Cambiar data
            </button>
        </div>
    )
}
