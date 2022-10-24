const tarjeta=document.querySelector('#tarjeta');
const abrirFormulario= document.querySelector('#abrir-formulario');
const formulario=document.querySelector('#formulario-tarjeta');
const numeroTarjeta=document.querySelector('#tarjeta .numero');
const nombreTarjeta=document.querySelector('#tarjeta .nombre');
const logoMarca=document.querySelector('#logo-marca');
const firma=document.querySelector('#tarjeta .firma p');
const mesExpiracion=document.querySelector('#tarjeta #expiracion .mes');
const yearExpiracion=document.querySelector('#tarjeta #expiracion .year');
const ccv=document.querySelector('#tarjeta .ccv')
function voltearFrente(){
    if(tarjeta.classList.contains('active')){
        tarjeta.classList.remove('active');
    }
}
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
    numeroTarjeta.textContent=valorInput;
    if(valorInput===''){
        numeroTarjeta.textContent='### ### ### ###';
        logoMarca.innerHTML='';
    }
    if(valorInput[0]==='4'){
        logoMarca.innerHTML='';
        const imagen=document.createElement('img');
        imagen.src='logos/mastercard.png';
        logoMarca.appendChild(imagen);
    }else if(valorInput[0]==='5'){
        logoMarca.innerHTML='';
        const imagen=document.createElement('img');
        imagen.src='logos/visa.png';
        logoMarca.appendChild(imagen);
    }
    //voltear la tarjeta cuando el usuario este escribiendo
    voltearFrente();
})
//input nombre de tarjeta
formulario.inputNombre.addEventListener('keyup',(e)=>{
    let valorInput=e.target.value;
    formulario.inputNombre.value=valorInput.replace(/\[0-9]/g,'');
    nombreTarjeta.textContent=valorInput;
    firma.textContent=valorInput;
    if(valorInput===''){
        nombreTarjeta.textContent='Joe Doe'
    }
    voltearFrente();
});
//trabajar con los select
formulario.selectMes.addEventListener('change',(e)=>{
    mesExpiracion.textContent=e.target.value;
    voltearFrente();
});
formulario.selectYear.addEventListener('change',(e)=>{
    yearExpiracion.textContent=e.target.value.slice(2);
    voltearFrente();
});
formulario.inputCCV.addEventListener('keyup',()=>{
    if(!tarjeta.classList.contains('active')){
        tarjeta.classList.add('active')
    }
    formulario.inputCCV.value=formulario.inputCCV.value
    .replace(/\D/g,'')
    .replace(/\s/g);
    ccv.textContent=formulario.inputCCV.value;
})