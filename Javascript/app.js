//Asigna un titulo al documento HTML.
document.title = 'Alura Proyect'

//Llama a los elementos que necesito modificar o extraer sus valores.
const text = document.getElementById('text'),
encript = document.getElementById('encript'),
unCript = document.getElementById('unCript'),
response = document.getElementById('response'),
titleCode = document.getElementById('titleCode');


//Objeto codificador
const code = {
    a : "ai",
    e : "enter",
    i : "imes",
    o : "over",
    u : "ufat"
}

//Funcion que evalua el arraay recibido por parametro
function evaluate(arr) {
    //Crea un array vacio.
    const response = [];
    
    //Evalua cada valor del array y ordena segun valor, utilizando un ciclo for para recorrer el array obtenido.
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element == " ") {
            response.push(" ");
        } else if (element == "a") {
            response.push(code.a);
        } else if (element == "e") {
            response.push(code.e);
        } else if (element == "i") {
            response.push(code.i);
        } else if (element == "o") {
            response.push(code.o);
        } else if (element == "u") {
            response.push(code.u);
        } else {
            response.push(element);
        };    
    };
    //utiliza el array vacio y lo retorna codificado.
    return response;
};


//Funcion principal que codifica la cadena de caracteres.
const encriptFunction = (params, fn) => {
    //Pasa todas los str a minusculas
    let lower = params.toLowerCase();
    //Convierte la cadena de caracteres a un array compuesto por cada string.
    let arrText = lower.split('');

    //aloja el valor retornado y codificado a una variavble.
    arrCode = fn(arrText, response);

    //Convierte nuevamente el array a cadena de caracteres, ya habiendo modificado los valres deseados y lo retorna.
    return arrCode.join("");
};


const createResponse = (params) => {
    //vacia el elemento HTML para poder agregarle contenido.
    response.innerHTML = "";
    //Asignamos un texto al titulo.
    titleCode.innerHTML = '<p>Your code is...</p>'
    //falta agrega la clase "card-title" y "card-text" a los elementos creados con js
    let paragraph = document.createElement('p');
    let title2 = paragraph.innerHTML = `${params}`
    response.innerHTML = title2;
    //agregar la clase "display : none;" a la imagen.
    
}


encript.addEventListener('click', (e) => {
    e.preventDefault();
    let cod = encriptFunction(text.value, evaluate);
    createResponse(cod)
});
