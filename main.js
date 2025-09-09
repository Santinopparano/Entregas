
let pinUser = "0000"; // contraseña del cajero
let movimientos = [];
let saldoActual = 0;

function solicitarDatos(){
    let pin = prompt("Ingrese el PIN");
    let mensaje = validarDatos(pin);
    while(mensaje !== ""){
        alert(mensaje);
        pin = prompt("Ingrese el PIN");
        mensaje = validarDatos(pin);
    }
    Cajero();
    
}
function validarDatos(pin){
    let mensaje = "";
    if(pin !== pinUser){
        mensaje = "PIN Incorrecto."
    }
    if (!pin){
        mensaje = "Ingrese el PIN."
    }

    return mensaje;
}

function Cajero(){
    let opcion = "";
    while(opcion !== "5"){
    opcion = prompt("Ingrese el numero, de la opcion:\n 1.Consultar saldo\n 2.Depositar \n 3.Retira dinero\n 4.Consultar movimientos \n 5.Salir.")
    
        switch (opcion){
        case "1":
           consultarSaldo();
           break;
        case "2":
           depositar();
            break;
        case "3":
            retirarDinero();
            break;
        case "4":
            consultarMovimientos();
            break;
        case "5":
            alert("GRACIAS por usar el cajero. ")
            break;
        default:    
            alert("ErRoR: seleccione una opcion valida.")
    }
    
    }
   
}
    function consultarMovimientos(){
        if(movimientos.length === 0){
            alert("No hay movimientos registrados.")
            return;
        }else{
            let historial = ""; 
             for (let movi of movimientos) {
                historial += "Tipo: " + movi.tipo + ", Monto: $" + movi.monto + "\n";
        }
         alert(historial);
    }
}
    
    function consultarSaldo(){
        alert("Saldo actual : "+ saldoActual)
    }

    function depositar(){
    let depositado = parseInt(prompt("Ingrese el Monto a depositar."));
        if(depositado<=0){
            alert("Monto Invalido.");
            return;
        }
        movimientos.push({tipo:"deposito", monto:depositado});
        saldoActual+=depositado;
        alert("Depósito realizado. Saldo actual: $" + saldoActual);
        
    }
    function retirarDinero(){
        let retiro = parseInt(prompt("Ingrese el Monto a retirar."));
        if(retiro>saldoActual || retiro<=0){
            alert("Monto Invalido.");
            return;
        }
        movimientos.push({tipo:"retiro", monto:retiro});
        saldoActual-=retiro;
        alert("Retiro realizado. Saldo actual: $" + saldoActual);

    }
    solicitarDatos();



