//COMPONENTE RAÍZ
import React, { useState, Fragment, useRef, useEffect } from 'react'; // useState permite renderizar las componentes cada que se actualizan
import { TodoList } from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';

// La KEY para guardar en el localStorage
const KEY = "todoApp.todos";

// Creación de la componente App
// Recomendación: iniciar las componentes con mayúscula para diferenciarlas de una componente de HTML
export function App() {
    
    // useState es un arreglo que devuelve 2 propiedades:
    // 1. El estado y 2. la función que modifica ese estado
    const [todos, setTodos] = useState([
        { id: 1, task: 'Tarea 1', completed: false },
    ]); 

    // Creación de la referencia que tiene el input de abajo, para que la podamos utilizar en el handle
    const todoTaskRef = useRef();

    // Para tener persistencia de los datos al recargar el sitio. useEffect nos permite gestionar el ciclo de vida
    // de la info dentro de la página
    
    // Este método se realiza al recargar la pagina (lo indica el arreglo vació), y traerá las
    // tareas guardadas en el localStorage
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(KEY)); // Para convertir de string a arreglo de objetos
        if(storedTodos){
            setTodos(storedTodos);
        }
    }, []);

    // Este método se realiza cada vez que se modifica el arreglo de Todos, y lo guarda
    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(todos)); // stringify para guardar en formato JSON
    }, [todos]);

    // Función para que al marcar o desmarcar el "check" de la tarea cambie el estado de completado
    const toggleTodo = (id) => {
        const newTodos = [...todos]; // Creamos una copia del array
        const todo = newTodos.find((todo) => todo.id === id);
        todo.completed = !todo.completed; // Ponemos el estado opuesto
        setTodos(newTodos); // Ajustamos al nuevo array
    };

    //La función del onClick de abajo
    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value //Tomamos el valor que tiene el input
        if(task === '') return;
        
        setTodos((prevTodos) => {
            return [...prevTodos, {id: uuidv4(), task, completed: false}]
        })

        todoTaskRef.current.value = null; //Para que deje en blanco el input una vez agregado
    };

    // Al presionar el botón de basura borra solo las tareas completadas
    const handleClearAll = () => {
        const newTodos = todos.filter((todo => !todo.completed)); //Va a tener todas las tareas que tenga no completado
        setTodos(newTodos)
    };

    return (
        <Fragment> {/* "Fragment" permite devolver un solo elemento (sustituto del div), 
                    tambien se puede usar las etiquetas vacias "<> </>"*/}
            <TodoList todos={ todos } toggleTodo={ toggleTodo }/>

            <input ref={todoTaskRef} type="text" placeholder="Nueva tarea" /> {/* Para leer de este input necesitamos 
                                                                                una referencia (ref), y la importamos */}

            <button onClick={handleTodoAdd}>➕</button> {/* onClick para que escuche cuando hacemos click en el botón y
                                                         que se ejecute una función */}

            <button onClick={handleClearAll}>🗑️</button>
            <div>Te quedan {todos.filter((todo) => !todo.completed).length} tareas por terminar</div>
        </Fragment>
    );
}