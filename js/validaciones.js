const d = document;

export function valida(input){
    const tipoDeInput = input.dataset.type;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }
}

const validadores = {
    nacimiento:(input)=> validarNacimiento(input),
}

/* const inputNacimiento = d.querySelector('#birth');

inputNacimiento.addEventListener('blur', (event)=>{
    validarNacimiento(event.target)
}) */




function validarNacimiento(input){
    const fechaCliente  = new Date(input.value);
    let mensaje = '';
    if (!mayorDeEdad(fechaCliente)){
        mensaje = "debes tener al menos 18 años de edad";
    }
    input.setCustomValidity(mensaje)
};

function mayorDeEdad(fecha){
    const  fechaActual = new Date();
    const diferenciaFechas = new Date(
    fecha.getUTCFullYear() + 18, 
    fecha.getUTCMonth(),
    fecha.getUTCDate()
    );
    return diferenciaFechas <=  fechaActual;    
}