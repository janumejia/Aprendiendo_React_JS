import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider'

export const Pagina2 = () => {
    // Para usar la data del context, necesitamos usar el hook useContext()
    // Traemos lo que nos interesa, en este caso la variable data
    const { data } = useContext(DataContext)

    return (
        <div>
            <h1>Pagina 2</h1>
            <hr/>
            <pre>
                {JSON.stringify( data, null, 2 )}
            </pre>
        </div>
    )
}
