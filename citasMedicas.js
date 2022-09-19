function gestionarCitas(){
    var hora = document.getElementById("hora").value;
    var fecha = document.getElementById("fecha").value;

 
    
var documentPDF = new jsPDF();
documentPDF.setTextColor(205, 92, 92);
documentPDF.setFont("arial");
documentPDF.setFontSize(25);
documentPDF.text(70, 10, 'Reporte de Ranking');
documentPDF.setFontSize(26);
documentPDF.text(20, 30, 'fecha: ' + new Date());
documentPDF.setFontSize(12,);

documentPDF.text(20, 50,  "fecha:"  +  fecha);
documentPDF.text(20, 60, "hora: "  +  hora);
documentPDF.save("citas medicas");

}
