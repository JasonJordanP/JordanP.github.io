const botonResumen = get('botonResumen')
const botonBorrar = get('botonBorrar')
let totalAPagar;
const valorDeTicket = 200;
const TicketParaEstudiante = 40
const TicketParaTrainee = 100
const TicketParaJunior = 170
let precioTicketFinal = " ";


function get(id) {
    return document.getElementById(id);
}

botonResumen.addEventListener('click', function(){
    get('totalAPagar').innerHTML = 'Total A Pagar: $' + calcular();
})


let cantidadTickets = get('cantidad'); 

function cantTickets (){
    const cantidadTickets = cantidad.value
    return parseInt(cantidadTickets)
}

let TicketAComprar = get('precio');

function precioIndicado (){
    const TicketAComprar = precio.options[precio.selectedIndex].value

    if (TicketAComprar === "estudiante"){
        let precioTicketFinal = 40;
        return precioTicketFinal
    }
    if (TicketAComprar === "trainee"){
        let precioTicketFinal = 100;
        return precioTicketFinal
    }
    if (TicketAComprar === "junior"){
        let precioTicketFinal = 170;
        return precioTicketFinal
    }
} 


 function calcular() {
    const ValorA = cantTickets();
    const ValorB = precioIndicado();
    let resultadoFinal= ValorA*ValorB;
    return resultadoFinal
 }

 botonBorrar.addEventListener('click', function(){
    get('totalAPagar').innerHTML = 'Total A Pagar: $';
})
    
