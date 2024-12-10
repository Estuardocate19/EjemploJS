document.write("El factorial del número es: ")

let numero;
numero = parseInt(prompt("Ingrese un número"))


function factorial(numero){

    if(numero <= 1){
        return 1;
    }else{
        return numero * factorial(numero - 1);
    }



}

document.write(factorial(numero));



