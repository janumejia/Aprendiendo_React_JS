# Ejemplo de Context API del video: [https://youtu.be/UPCOJgLlr3w](https://youtu.be/UPCOJgLlr3w)

## Demo del proyecto:
![2022-08-15_13-27-15](https://user-images.githubusercontent.com/60657504/184694842-df9dd2e2-06f6-4024-93bf-754ad8bdc6f2.gif)

## Teoría:

Context API de React es una forma de crear variables globales que podrás compartir fácilmente con otros componentes de tu aplicación.

![context-api](https://user-images.githubusercontent.com/60657504/184695102-dee3a940-626f-4c83-bc58-101bf21f1eb6.png)

Ejemplo de su uso:

Para usarlo necesitamos usar ***React.createContext()*** , este retorna un consumer y un provider. Ejemplo de una componente en React que crea el context y provee las variables globales *data* y *setData*:

´´´javascript
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
´´´

El context debe ir en una componente que va a proveer estas variables globales a todos los hijos, y por lo general, esta componente se encuentra en la parte más alta de la aplicación (App.js, o index.js). En este caso, se adicionó en App.js:

´´´javascript
import React from "react";

import { DataProvider } from "./context/DataProvider";

import { Pagina1 } from "./components/Pagina1";
import { Pagina2 } from "./components/Pagina2";
import { BotonCambiarDatos } from "./components/BotonCambiarDatos"

function App() {
  return (
    <DataProvider>
      <div>
        <Pagina1/>
        <Pagina2/>
        <BotonCambiarDatos/> 
      </div>
    </DataProvider>
  );
}

export default App;
´´´

Y para usarlo en las componentes hijas, solamente debemos usar ***useContext(DataContext)*** (DataContext es el nombre del context creado previamente), y traemos los datos que nos interesan. Ejemplo:

´´´javascript
import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider'

export const Pagina1 = () => {
    
    // Para usar la data del context, necesitamos usar el hook useContext()
    // Traemos lo que nos interesa, en este caso la variable data
    const { data } = useContext(DataContext)

    return (
        <div>
            <h1>Pagina 1</h1>
            <hr/>
            <pre>
                {JSON.stringify( data, null, 2 )}
            </pre>
        </div>
    )
}
´´´
