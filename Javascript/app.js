//Asigna un titulo al documento HTML.
document.title = 'Alura Proyect'

//Llama a los elementos que necesito modificar o extraer sus valores.
const text = document.getElementById('text'),
    encript = document.getElementById('encript'),
    unCript = document.getElementById('unCript'),
    response = document.getElementById('response'),
    titleCode = document.getElementById('titleCode'),
    img = document.getElementById('img'),
    copy = document.getElementById('copy'),
    styleChange = document.getElementById('styleChange');



//Objeto codificador que es como herramienta
const code = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
}

const unCriptFn = (params) => {
    let lower = params.toLowerCase();
    //i es para afectar tanto a mayusculas como minusculas -- e else {
    //g es para toda la linea u oración
    //m es para que afecte a multiples lineas o parrafos
    var unCript = lower.replace(/enter/igm, "e");
    var unCript = unCript.replace(/ober/igm, "o");
    var unCript = unCript.replace(/imes/igm, "i");
    var unCript = unCript.replace(/ai/igm, "a");
    var unCript = unCript.replace(/ufat/igm, "u");
    return unCript;
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
    let arrCode = fn(arrText, response);

    //Convierte nuevamente el array a cadena de caracteres, ya habiendo modificado los valres deseados y lo retorna.
    return arrCode.join("");
};
const cleanCamp = (params) => {
    //vacia el elemento HTML para poder agregarle contenido.
    params.innerText = "";
}
const createResponse = (params, params2) => {

    //Recibe dos argmunetos por parametro, un lo asigna la texto que seria el codigo y el otro seria el nodo que recibe el texto
    let title2 = response.innerText = `${params}`
    params2.innerHTML = title2;

}
const createClass = (params1, params2, params3, params4) => {
    //Asigna clases dinamicamente a los distintos elementos del documento para dales estilos dependiendo del dinamismo de la pagina.
    params1.className = 'card-text';
    params2.className = 'img-lockTo';
    params3.className = 'img-lockTo';
    params4.style.display = "block";
}
const styling = () => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'styles/bootstrap.min.css';
    document.head.appendChild(link)
}

let contador = 0;
styleChange.addEventListener('click', (e) => {
    
    if (contador == 0) {
        e.preventDefault();
        styling();
        contador++;
    } else if (contador != 0) {
        contador--;
    };
});

//boton de encriptación!
encript.addEventListener('click', (e) => {
    e.preventDefault();
    //simula un tiempo de espera para realizar la evaluación del texto
    setTimeout(() => {
        if (text.value == "") {
            //cuyo casi sea empty el campo da aviso de que no hay texto para encriptar con estilos asociados.
            response.innerText = 'No Hay código para encriptar!!!';
            response.className = 'card-title';
            response.style.color = "red";
            response.style.fontSize = "3rem";
        } else {
            //si hay texto que encriptar, procede a simular una espera de carga para demostrar que esta trabajando.
            setTimeout(() => {
                response.innerHTML = "<p>Cargando.</p>";
            }, 1000);
            setTimeout(() => {
                response.innerHTML = "<p>Cargando..</p>";
            }, 2000);
            setTimeout(() => {
                response.innerHTML = "<p>Cargando...</p>";
            }, 3000);
            setTimeout(() => {
                let cod = encriptFunction(text.value, evaluate);
                cleanCamp(response);
                createResponse(cod, response);
                createClass(response, titleCode, img, copy);
            }, 4000);
        }
    }, 2000);
});

//boton de desencriptación en evento click
unCript.addEventListener('click', (e) => {
    e.preventDefault()
    //realiza un desencriptación
    let unCode = unCriptFn(text.value)
    setTimeout(() => {
        createResponse(unCode, response)
        createClass(response, titleCode, img, copy);
    }, 2000);
})
//botón de copiado
copy.addEventListener('click', () => {
    let code = response.innerText
    //Verifica y valida si hay información para validar.
    if (code == "") {
        //envia un mensaje que no hya texto para copiar
        Toastify({
            text: "Debe haber un texto para ser guardado",
            duration: 3000,
            close: true,
            gravity: "bottom",
            position: "rigth",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    } else {
        //realiza las tareas de copiado
        navigator.clipboard.writeText(code)
        //da aviso que el texto ha si copiado.
        Toastify({
            text: "Mensaje copiado!!",
            duration: 3000,
            close: true,
            gravity: "bottom",
            position: "rigth",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    }
})