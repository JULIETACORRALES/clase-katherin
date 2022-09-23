function fecha() {
    let fecha_inicio = new Date(document.getElementById("ini").value);
    let fecha_final = new Date(document.getElementById("fin").value);
  


    if(fecha_final >= fecha_inicio){
        let resultadoFecha = fecha_final - fecha_inicio;
        alert("La cantidad de milisegundos es de: " + resultadoFecha);
        let dias = Math.floor((resultadoFecha)/(1000*60*60*24)) + 1;
        alert("Estuvo: " + dias + " dias en el hospital");
        let subtotal = dias * 75000;
        alert("Usted duro: " + dias + " dias, tiene que pagar " + subtotal);
        let total = subtotal / 15
        alert(total)

    }else{
        alert("La fecha de inicio no puede ser mayor que la fecha final");
        document.getElementById("inicio").value;
        document.getElementById("final").value;
        
    }
    
   innerHeight.toExponential(generarPDF())
    
}