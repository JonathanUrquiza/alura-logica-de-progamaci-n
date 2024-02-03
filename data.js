document.title ='InfoLectrica'
//llama a los inputs y al boton submit para poder obtener los datos.
const lastYear = document.getElementById('lastYear'),
actualYear = document.getElementById('actualYear'),
bimonth = document.getElementById('bimonth'), 
btnSubmit = document.getElementById('submit');
/* Las siguientes tres variables estan siendo parseadas a numeros enteros*/

//llama al elemento parrafo para mostrar el mensaje.
let message = document.getElementById('message'),
messageBim = document.getElementById('messageBim');

//Objeto comparador que sirve como indicador de rangos
/* A continuacion se muestran los mensajes referidos a cada TARIFA: R1(0-150); R2(151-325); R3(326-400);
R4(401-450); R5(451-500); R6(501-600); R7(601-700); R8(701-1400); R9(1400-3000) */

const tarifario = {
    r1 : {
        min : 0,
        max : 150
    },
    r2: {
        min : 151,
        max : 325
    },
    r3: {
        min : 326,
        max : 400
    },
    r4: {
        min : 401,
        max : 450
    },
    r5: {
        min : 451,
        max : 500
    },
    r6: {
        min : 501,
        max : 600
    },
    r7: {
        min : 601,
        max :700
    },
    r8: {
        min : 701,
        max : 1400
    },
    r9: {
        min : 1401,
        max : 3000
    }
}

//Divide el argumento
bimestre = (arg) => arg/2

//funcion que evalua según el consumo actual e indica el rango en el que se encuentra
function evaluate() {
   

    if (parseInt(actualYear.value) >= tarifario.r1.min && parseInt(actualYear.value) <= tarifario.r1.max ) {
        message.innerText = `Tu categoria es R1`
        messageBim.innerText = `to consumo en el bimestre es ` + bimestre(parseInt(actualYear.value))
    } else if (parseInt(actualYear.value) >= tarifario.r2.min && parseInt(actualYear.value) <= tarifario.r2.max ) {
        message.innerText = `Tu tarifa actual es R2`
        messageBim.innerText = `to consumo en el bimestre es ` + bimestre(parseInt(actualYear.value))
    } else if (parseInt(actualYear.value) >= tarifario.r3.min && parseInt(actualYear.value) <= tarifario.r3.max ) {
        message.innerText = `Tu tarifa actual es R3`
        messageBim.innerText = `to consumo en el bimestre es ` + bimestre(parseInt(actualYear.value))
    } else if (parseInt(actualYear.value) >= tarifario.r4.min && parseInt(actualYear.value) <= tarifario.r4.max ) {
        message.innerText = `Tu tarifa actual es R4`
        messageBim.innerText = `to consumo en el bimestre es ` + bimestre(parseInt(actualYear.value))
    } else if (parseInt(actualYear.value) >= tarifario.r5.min && parseInt(actualYear.value) <= tarifario.r5.max ) {
        message.innerText = `Tu tarifa actual es R5`
        messageBim.innerText = `to consumo en el bimestre es ` + bimestre(parseInt(actualYear.value))
    } else if (parseInt(actualYear.value) >= tarifario.r6.min && parseInt(actualYear.value) <= tarifario.r6.max ) {
        message.innerText = `Tu tarifa actual es R6`
        messageBim.innerText = `to consumo en el bimestre es ` + bimestre(parseInt(actualYear.value))
    } else if (parseInt(actualYear.value) >= tarifario.r7.min && parseInt(actualYear.value) <= tarifario.r7.max ) {
        message.innerText = `Tu tarifa actual es R7`
        messageBim.innerText = `to consumo en el bimestre es ` + bimestre(parseInt(actualYear.value))
    } else if (parseInt(actualYear.value) >= tarifario.r8.min && parseInt(actualYear.value) <= tarifario.r8.max ) {
        message.innerText = `Tu tarifa actual es R8`
        messageBim.innerText = `to consumo en el bimestre es ` + bimestre(parseInt(actualYear.value))
    } else if (parseInt(actualYear.value) >= tarifario.r9.min && parseInt(actualYear.value) <= tarifario.r9.max ) {
        message.innerText = `Tu tarifa actual es R9`
        messageBim.innerText = `to consumo en el bimestre es ` + bimestre(parseInt(actualYear.value))
    } else {
        return message.innerText = "No hay tarifa para ud!"
    }
}


btnSubmit.addEventListener('click', ()=> {
    evaluate()
})