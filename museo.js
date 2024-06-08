

pedirAlServidor()
function pedirAlServidor(){
    let xhhtp

    xhhtp = new XMLHttpRequest();
    xhhtp.onload = function () {
        mostrarTarifas(this);
    }
    xhhtp.open("GET", "tarifas.xml");
    xhhtp.send();
}


function mostrarTarifas(xml){
    let xmlDoc, tabla, categoria, i, precio, requisitos;

    xmlDoc = xml.responseXML;
    tabla = "<table>";
    tabla += "<tr><th>Categoría</th><th>Precio</th><th>Requisitos</th></tr>";
    numeroCoches = xmlDoc.getElementsByTagName("TARIFAS").length;
    for(i=0; i<numeroCoches; i++){
        categoria = xmlDoc.getElementsByTagName("CATEGORIA")[i].childNodes[0].nodeValue;
        precio = xmlDoc.getElementsByTagName("PRECIO")[i].childNodes[0].nodeValue;
        requisitos = xmlDoc.getElementsByTagName("REQUISITOS")[i].childNodes[0].nodeValue;
        tabla += "<tr><td>" + categoria + "</td><td>" + precio + "</td><td>" + requisitos + "</td></tr>";
    }
    tabla += "</table>";
    
    document.getElementById("resultado").innerHTML = tabla;
}