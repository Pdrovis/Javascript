//********************************************* Tabela Borda ******************************************
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


//********************************************* Tabela Diagonal******************************************
var table2 = document.createElement("table");
table2.setAttribute("border", "1");
table2.setAttribute("cellspacing", "0");


for (var i = 0; i < n; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < n; j++) {
        var cell = document.createElement("td");
        cell.setAttribute("width", "50px");
        cell.setAttribute("height", "50px");
        
        if (i == j || i == n-1 || j == 0) {
            cell.style.backgroundColor = "black";
        } else {
            cell.style.backgroundColor = "white";
        }
        row.appendChild(cell);
    }
    table2.appendChild(row);
}

document.body.appendChild(table2);


//********************************************* Tabela Xadrez ******************************************
var table3 = document.createElement("table");
table3.setAttribute("border", "1");
table3.setAttribute("cellspacing", "0");


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
    table3.appendChild(row);
}

document.body.appendChild(table3);