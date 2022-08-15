import React, { createContext, useState } from 'react'

// Creación del context. DataContext ahora tiene un provider y un consumer
export const DataContext = createContext()

const dataFixed = {
    nombre: "Julian",
    edad: 35,
}

// Componente provider, que contiene 
export const DataProvider = ({ children }) => {

    const [data, setData] = useState(dataFixed)

    return (
        /* Aquí usamos el provider de nuestro Context (DataContext), y le pasamos un objeto con las variables que queremos globalizar 
        mediante la propiedad "value" (tener en cuenta que tiene doble llave porque es un objeto)
      
        Para usar esas variables globales desde una componente hija, debemos usar useContext() 
        */
        <DataContext.Provider value={{
            data,
            setData,
        }}>
            {children}
        </DataContext.Provider>
    )
}