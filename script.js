const tarjeta=document.querySelector('#tarjeta');
const abrirFormulario= document.querySelector('#abrir-formulario');
const formulario=document.querySelector('#formulario-tarjeta');
const numeroTarjeta=document.querySelector('#tarjeta .numero');
const nombreTarjeta=document.querySelector('#tarjeta .nombre');
// rotacion de tarjeta
tarjeta.addEventListener('click',()=>{
    tarjeta.classList.toggle('active')
})
// abrir formulario
abrirFormulario.addEventListener('click',()=>{
    abrirFormulario.classList.toggle('active');
    abrirFormulario.style.transition='.3s ease all';
    formulario.classList.toggle('active');
})
// opciones de mes
for(let i=1;i<=12;i++){
    let opcion=document.createElement('option');
    opcion.value=i;
    opcion.innerText=i;
    formulario.selectMes.appendChild(opcion);
}
const yearActual=new Date().getFullYear();
for(let i=yearActual;i<yearActual+8;i++){
    let opcion=document.createElement('option');
    opcion.value=i;
    opcion.innerText=i;
    formulario.selectYear.appendChild(opcion);
}
formulario.inputNumero.addEventListener('keyup',(e)=>{
    let valorInput=e.target.value;
    formulario.inputNumero.value=valorInput
    //eliminamos espacios en blanco
        .replace(/\s/g,'')
    //eliminamos las letras
        .replace(/\D/g,'')
    //ponemos espacios cada cuatro letras
        .replace(/([0-9]{4})/g,'$1 ')
        //elimina el ultimo espaciado
        .trim();

})