var n = window.prompt("Digite um número inteiro")
var table = document.createElement("table");
table.setAttribute("border", "1");
table.setAttribute("cellspacing", "0");


for (var i = 0; i < n; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < n; j++) {
        var cell = document.createElement("td");
        cell.setAttribute("width", "50px");
        cell.setAttribute("height", "50px");
        
        if ((i + j) % 2 == 0) {
            cell.style.backgroundColor = "white";
        } else {
            cell.style.backgroundColor = "black";
        }
        row.appendChild(cell);
    }
    table.appendChild(row);
}

document.body.appendChild(table);