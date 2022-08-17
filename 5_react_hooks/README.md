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

  useEffect(() => {
    console.log(`count cambio a {count}`);
  }, [count]);

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

Está asociado con Redux.

[Código Sandbox](https://codesandbox.io/s/aprendiendo-hooks-8nmg97)

[Documentación React](https://es.reactjs.org/docs/hooks-reference.html)
