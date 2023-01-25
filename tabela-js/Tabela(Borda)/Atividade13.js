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
        
        if (i == 0 || i == n-1 || j == 0 || j == n-1) {
            cell.style.backgroundColor = "black";
        } else {
            cell.style.backgroundColor = "white";
        }
        row.appendChild(cell);
    }
    table.appendChild(row);
}


document.body.appendChild(table);