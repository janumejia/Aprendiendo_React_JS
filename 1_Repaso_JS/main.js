alert('hola a todos');

var nombre = "Julian Andres Núñez";
var altura = 170;

var concatenacion = nombre + " " + altura; 

//Primera forma de agregar cosas a nuestro HTML
// document.write(nombre); //Para imprimir en la parte superior de la página
// document.write(altura); //Pero pega junto todo :(
// document.write(concatenacion); //La concatenación de lo anterior

//Segunda forma
var datos = document.getElementById("datos");
datos.innerHTML = concatenacion;

//Tercera forma (Podemos agregar HTML dinámicamente)
var datos2 = document.getElementById("datos2");
datos2.innerHTML = `
    <h1>Estoy introduciendo HTML desde JS</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cm</h3>
`;

//Condicional (Vamos a agregar a lo anterior)
if(altura >= 190){
    datos2.innerHTML += '<h1>Eres una persona ALTA</h1>';
}else{
    datos2.innerHTML += '<h1>Eres una persona BAJITA</h1>';
}

//Ciclo for
for(var i = 0; i <= 10; i++){
    //bloque de instrucciones
    contador.innerHTML += "<h2>Número -> " + i; 
}

/* Función */
function muestraLaDescripcion(descripcion){
    var funcion = document.getElementById("funcion");
    funcion.innerHTML = `
    <h2>${descripcion}</h2>
    `;
}

muestraLaDescripcion("Recordando conceptos de JavaScript");

/* Funcion que llama a otra función */
function entregaElNombre(nombre, altura){
    misDatos = `
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>Mido: ${altura} cm</h3>
    `;

    return misDatos;
}

function imprimir(){
    var funcion2 = document.getElementById("funcion2");
    funcion2.innerHTML = entregaElNombre("Julian", 165);
}

imprimir();

// Arreglo
var nombres = ['Victor', 'Antonio', 'Joaquin', 'Kevin'];

document.write('<h3>Listado de nombres</h3>');
for(i = 0; i < nombres.length; i++){
    document.write(nombres[i] + '<br/>');
}

//Otra forma de recorrer los arreglos
document.write('<h3>Con forEach</h3>');
nombres.forEach(function(nombre){
    document.write(nombre + '<br/>')
});

//Última forma de recorrer los arreglos
document.write('<h3>Con flecha => </h3>');
nombres.forEach((nombre) => {
    document.write(nombre + '<br/>')
});

