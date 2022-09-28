
let boton =  document.getElementById(`calcular`);//suma
let boton2 = document.getElementById(`restar`);
let boton3 = document.getElementById(`multi`);
let boton4 = document.getElementById(`division`);
let respuesta = document.getElementById(`resultado`);

boton.addEventListener(`click`, hacerOperacion);

boton2.addEventListener(`click`, hacerOperacionResta);
boton3.addEventListener(`click`, hacerOperacionMulti);
boton4.addEventListener(`click`, hacerOperacionDivision);

//++++ suma ++++

function hacerOperacion(){
    let n1=parseFloat(document.getElementById(`n1`).value);
    let n2=parseFloat(document.getElementById(`n2`).value);
    let s=n1+n2;
    respuesta.innerHTML=`La respuesta es ${s}`;

}
//++++ resta ++++
function hacerOperacionResta(){
    let n1=parseFloat(document.getElementById(`n1`).value);
    let n2=parseFloat(document.getElementById(`n2`).value);
    let s=n1-n2;
    respuesta.innerHTML=`La respuesta es ${s}`;

}
//++++ multiplicación ++++
function hacerOperacionMulti(){
    let n1=parseFloat(document.getElementById(`n1`).value);
    let n2=parseFloat(document.getElementById(`n2`).value);
    let s=n1*n2;
    respuesta.innerHTML=`La respuesta es ${s}`;

}
//++++ división ++++
function hacerOperacionDivision(){
    let n1=parseFloat(document.getElementById(`n1`).value);
    let n2=parseFloat(document.getElementById(`n2`).value);
    let s=n1/n2;
    respuesta.innerHTML=`La respuesta es ${s}`;

}