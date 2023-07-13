const d = document; 
import {valida} from "./validaciones.js";

const inputs = d.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('blur', (input)=>{
        valida(input.target);
    })
        
    
});
