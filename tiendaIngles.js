cargarJSON()

function cargarJSON() {
    let xmlhttp;

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
        mostrarJSON(this);
    };
    xmlhttp.open("GET", "tiendaIngles.json");
    xmlhttp.send();
}

function mostrarJSON(xmlhttp) {
    const obj = JSON.parse(xmlhttp.responseText);
    let codigoHtml = "<h1>Our store</h1>" + "<div class='tarjetas'>";
    let i;

    for (i in obj.tienda) {
        const tiendaObj = obj.tienda[i];
        const nombre = tiendaObj["nombre"];
        const foto = tiendaObj["foto"];
        const precio = tiendaObj["precio"];

        codigoHtml +=
            "<div class='t'>" +
                "<h2 class='nombre'>" + nombre + "</h2>" +
                "<img src='" + foto + "' alt=''>" +
                "<h3 class='precio'>" + "Price: " + precio + "€" + "</h3>" +
            "</div>";
    } 

    codigoHtml += "</div>";
    document.getElementById("tienda").innerHTML = codigoHtml;
}


