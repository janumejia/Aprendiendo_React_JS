//Estas librerías ya vienen instaladas por defecto (ver package.json)
import React from 'react'; //Nos permitirá usar JSX (lenguaje parecido a HTML)
import ReactDOM from 'react-dom';
import { App } from './App';

// El método render nos permite renderizar todos los elementos que hagamos en el HTML
ReactDOM.render(<App />, document.getElementById("root"));
