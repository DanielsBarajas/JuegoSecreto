
let numeroSecreto = 0;
let numeroIntentos = 0;
let numerosAleatorio = [];
let numeroMaxAdivinar = 10;

function verificarIntento(){
    
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroUsuario === numeroSecreto){
        asiganarElemento('p',`Haz hacertado el numero en ${numeroIntentos} ${(numeroIntentos === 1) ? 'vez': 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        limpiarCajaTexto();
        numeroIntentos++;
        if(numeroUsuario < numeroSecreto){
            asiganarElemento('p','El numero secreto es mayor');

        } else {
            asiganarElemento('p','El numero secreto es menor');
        }
    }
    return;
}

function asiganarElemento(etiqueta, texto){
    let elementoHTML = document.querySelector(etiqueta);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random()*numeroMaxAdivinar)+1;
    console.log(numeroSecreto);
    console.log(numerosAleatorio);

    if(numerosAleatorio.length == numeroMaxAdivinar){

        asiganarElemento('p','Ya se adivinaron todos los numeros posibles');


    }else{
        if (numerosAleatorio.includes(numeroSecreto)) {
            return generarNumeroSecreto();
            
            }else{
                numerosAleatorio.push(numeroSecreto);
                return numeroSecreto;
            }
        }   
  
    
}
function limpiarCajaTexto() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}
function ordenInicio() {
    asiganarElemento('h1','Juego del numero secreto');
    asiganarElemento('p',`Ingresa un numero del 1 al ${numeroMaxAdivinar}`);
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;
    
}
function reiniciarJuego() {
    //limpiar la caja, indicar numero de inicio, generar numero aleatorio, volver a deshabilitar el boton nuevo juego, inicializr intentos.
    limpiarCajaTexto();
    ordenInicio();
    
    document.querySelector('#reiniciar').setAttribute('disabled',true);
    

    
}
ordenInicio();


//Desafio listas
/*
let listaGenerica = [];
let lenguajesProgramacion = ['javaScript','C','C++','Kotlin','Python'];
let listaNumeros = [1,2,3,4,5,11,7,8];

console.log(lenguajesProgramacion);

lenguajesProgramacion.push('Java','Ruby', 'GoLang');

muestraElementosLista(lenguajesProgramacion);

function muestraElementosLista(lenguajesProgramacion){
    console.log(lenguajesProgramacion);
}

invierteOrden();
function invierteOrden(){
    lenguajesProgramacion.reverse();
    console.log(lenguajesProgramacion);
}

promNumeros();

function promNumeros(){
    let sumNumeros = 0;
    
    for (let i = 0;i <= listaNumeros.length - 1; i++ ) {
        console.log(listaNumeros.length[i]);
        sumNumeros = sumNumeros + listaNumeros[i];

        console.log(sumNumeros);
    }
    

    sumNumeros = sumNumeros /(listaNumeros.length);

    console.log(sumNumeros);
}
numeroMayor();
function numeroMayor(){
    let numMayor, numeroLista, numeroComparar;
    for (let i = 0;i <= listaNumeros.length - 1; i++ ) {
        numeroLista = listaNumeros[i];
        for (j = 0; j<= listaNumeros.length - 1; j++) {
            numeroComparar = listaNumeros[j];
            if (numeroLista > numeroComparar){
                numMayor = numeroLista;
            }else{
                numMayor = numeroComparar;
            }
        }
    }
    console.log(numMayor);
    
}

*/

//Desafio Reiniciando el juego.

/*let altura,peso, IMC;


masaCorporal(1.79, 68);

function masaCorporal(altura, peso){

    IMC = (peso)/(altura * altura);
    console.log(IMC);
    
}

let numeroFact = 2;

factorial(numeroFact);

function factorial(numeroFact){

    for (let i = (numeroFact - 1); i >= 1;i--) {
        numeroFact = numeroFact * i;
    }
    
    console.log(`El factorial es ${numeroFact}`);

}

let valor = 1, pesoColom = 0;

pesoColom = conversorMoneda(valor);

console.log(pesoColom);

function conversorMoneda(valor){
    let peso = valor * 4.80;

    return peso;
    
}



let altu = 3, anchura = 2, area, perimetro;

area = hallarArea(altu, anchura);
perimetro = hallarPerimetro(altu,anchura);

console.log(area,perimetro);

function hallarArea(altura, anchura){

    let area = altura * anchura;
    return area;
}
    
function hallarPerimetro(altura, anchura){
    
    let perimetro = (altura * 2) + (anchura * 2);

    return perimetro;
}

let radio = 2;

console.log(hallarAreaCirculo(radio));
console.log(hallarPerimetroCirculo(radio));

function hallarAreaCirculo(radio){
    let area = 3.14 * (radio * radio);

    return area;
}
function hallarPerimetroCirculo(radio){
    let perimetro = 3.14 * 2 * radio;

    return area;
}

let numeroTabla = 2;

tablaMultiplicar(numeroTabla);

function tablaMultiplicar(numeroTabla){

    for (let i = 0; i <= 10;i++) {
        let Multiplicacion = numeroTabla * i;
        console.log(Multiplicacion);
    }

}
*/




//Desafio interactuando con HTML y Funciones

/*HolaMundoConsola();

function HolaMundoConsola(){
    console.log('hola mundo');
}



function nombreComoParametro(){

    let nombre = document.getElementById('valorUsuario').value;
    console.log(`Hola ${nombre}`);

}


function numeroDoble(){
    let numero = document.getElementById('valorUsuario').value;
    console.log(numero * 2);
    alert(`El numero doble es ${numero * 2}`);
}

function promTresNumeros(){
    let numeroUno = parseInt(prompt('Ingrese el primer numero'));
    let numeroDos = parseInt(prompt('Ingrese el segundo numero'));
    let numerotres = parseInt(prompt('Ingrese el tercer numero'));

    
    let resultado = ((numeroUno + numeroDos + numerotres)/3);
    
    alert(`El promedio de los tres numeros es ${resultado}`);
}

function numeroMayor(){
    let numeroUno = parseInt(prompt('Ingrese el primer numero'));
    let numeroDos = parseInt(prompt('Ingrese el segundo numero'));
    let numeroMayor;

    if(numeroUno > numeroDos){
        numeroMayor = numeroUno
    }else if(numeroDos > numeroUno){
        numeroMayor = numeroDos;
    }

    alert(`El numero mayor es ${numeroMayor}`);
}

function numeroElevadoDos(){
    let numeroUno = parseInt(prompt('Ingrese un numero'));
    let numeroMulti = numeroUno * numeroUno;

    alert(`El numero por si mismo es: ${numeroMulti}`);
}
*/