function gestionarCitas() {

    let hora = document.getElementById("hora").value;
    let fecha_inicio= document.getElementById("ini").value;
    let fecha_final= document.getElementById("fin").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let cedula =  document.getElementById("cedula").value;
    let motivo =  document.getElementById("motivo").value;
    let sisben = document.getElementById("sisben"); 
    let categoria = document.getElementById("categoria"); 

    
    if(sisben.checked==true){
      sisben ="si";
    }else{
      sisben = "no";
    }
    if(categoria.checked==true){
      categoria = "a";
    }else{
      categoria = "b";
    }
    

    var documentPDF = new jsPDF();
    documentPDF.setTextColor(205, 92, 92);
    documentPDF.setFont("cursive");
    documentPDF.setFontSize(25);
    documentPDF.text(80, 10, 'Citas Medicas');
    documentPDF.setFontSize(16);
    documentPDF.text(20, 30, 'fecha: ' + new Date());
    documentPDF.setFontSize(12,);
    documentPDF.text(20, 40,  "nombre:"  +  nombre);
    documentPDF.text(20, 50,  "apellido:"  +  apellido);
    documentPDF.text(20, 60,  "cedula:"  +  cedula);
    documentPDF.text(20, 70,  "motivo:"  +  motivo);
   documentPDF.text(20,  80,  "ini" + fecha_inicio );
   documentPDF.text(20,  90,  "fin" + fecha_final);
    documentPDF.text(20, 120, "hora: "  +  hora);
    documentPDF.text(20, 125, "sisben: "  +  sisben);
    documentPDF.text(20, 130, "categoria: "  +  categoria);
    documentPDF.save("citas medicas");
 }
