# React Hooks: [https://youtu.be/UPCOJgLlr3w](https://youtu.be/UPCOJgLlr3w)

Un Hook es una función de javascript que permite crear/acceder al estado y a los ciclos de vida de React.

React proporciona tres hooks básicos que responden a las necesidades habituales para implementar un ciclo de vida en un componente de clase:

## useState
Este hook nos devuelve un **valor** con un estado mantenido y una **función** que es necesaria para actualizarlo:

```jsx
const [count, setCount] = useState(0)
```

El estado inicial es el parámetro pasado a useState, en este caso 0, y será el estado del que dispondrá durante al menos el render inicial y hasta que sea llamada la función setCount con un nuevo valor, de forma que en este caso, por ejemplo, *setCount(count + 1)* incrementará el valor de count en uno, pasando a valer 1 en la siguiente renderización.

*Nota:* Antes de la versión 16.8 de react era necesario crear clases para manipular el estado de estas (aún se puede usando clases, pero se incrementa el código y realmente no es necesario).

**Ejemplo:**

```jsx
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2>Sumar de uno en uno</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>sumar</button>
    </div>
  );
}
```

## useEffect

useEffect es una función que toma otra función como parámetro y la ejecuta cuando se realiza el primer renderizado de la componente, cuando cambia el valor de una variables o cuando la aplicación se desmonte.

Ejemplo de un useEffect que se ejecuta cada vez que hay cambios en la variable *count*:

```jsx
import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  // Se ejecuta cada vez que se modifica el valor de count
  useEffect(() => {
    console.log(`count cambio a {count}`);
  }, [count]);
  
  // se ejecuta en el primer renderizado
    useEffect(() => {
    console.log(`count cambio a {count}`);
  }, []);
  
  
  return (
    <div className="App">
      <h2>Sumar de uno en uno: {count}</h2>
      <button onClick={() => setCount(count + 1)}>sumar</button>
    </div>
  );
}
```

![image](https://user-images.githubusercontent.com/60657504/184805479-84ff450d-346e-4aee-a032-17474004c587.png)

*Nota:* Tener cuidado cuando se agrega useState adentro de un useEfect, ya que se puede crear un loop infinito de renderizados.

## useContext

Ya está explicado en el [anterior cápitulo](https://github.com/janumejia/Aprendiendo_React_JS/tree/main/4_context_api)

## useReducer

Está asociado con Redux y es muy similar a *useState*, pero en vez de actualizar el valor de la variable que esta guarda, en redux se hace una llamada a una **acción**, que luego va a llamar a un **Reducer** y el Reducer actualiza el estado en el **store**. **Pequeña defición de redux...**

### Redux 

Redux es una excelente herramienta para manejar el estado de una aplicación. Sus principales beneficios son:

- Estado global e inmutable
- Mayor control del estado de la aplicación y el flujo de datos
- Arquitectura escalable de datos

#### Conceptos:

- El **Store** como la única fuente de la verdad
- El **State** es de solo lectura
- Los cambios al State pueden hacerse únicamente a través de acciones (**actions**) y funciones puras (**reducers**)
- Un **reducer** describe como una acción transforma el estado.

![image](https://user-images.githubusercontent.com/60657504/185007689-443d913a-dcc7-45ea-99b5-4049ceeb11e6.png)

Código:

```jsx
import "./styles.css";
import React, { useReducer } from "react";

// Parte del redux
const initialState = { count2: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count2: state.count2 + 1 };
    case "decrement":
      return { count2: state.count2 - 1 };
    default:
      throw new Error();
  }
}

export default function App() {
  // Para usar redux. El dispatch es como si fuera "setState"
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Count con Redux</h1>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      {state.count2}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
}
```

![image](https://user-images.githubusercontent.com/60657504/185015108-7437050e-ddac-44ad-ae24-089274375478.png)

[Código Sandbox](https://codesandbox.io/s/aprendiendo-hooks-8nmg97)

[Documentación React](https://es.reactjs.org/docs/hooks-reference.html)
