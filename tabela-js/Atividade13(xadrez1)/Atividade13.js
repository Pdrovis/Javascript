var n = parseInt(window.prompt("Digite um numero"))

var center = document.createElement('center');
  
var xadrez = document.createElement('table');

    for (var i = 0; i < n; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < n; j++) {
            var td = document.createElement('td');
            if ((i + j) % 2 == 0) {
                td.setAttribute('class', 'quadrado quadrado2');
                tr.appendChild(td);
            }
  
            else {
                td.setAttribute('class', 'quadrado quadrado1');
                tr.appendChild(td)
            }
        }
  
        xadrez.appendChild(tr);
    }
    center.appendChild(xadrez);

    xadrez.setAttribute('cellspacing', '0');
    xadrez.setAttribute('width', 'auto');
    document.body.appendChild(center);