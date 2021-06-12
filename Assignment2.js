//Add rows and columns
const MyForm = document.querySelector('#form');
MyForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    
    let table=document.getElementById('tab');
    let row = document.getElementById('row').value;
    let col = document.getElementById('col').value;
    for (let rowIndex=1; rowIndex<=row;rowIndex++){
        let tr=document.createElement('tr');
        for (let colIndex=1;colIndex<=col;colIndex++){
            let td = document.createElement('td');
            let text=document.createTextNode(rowIndex+","+colIndex);
            td.appendChild(text);
            tr.appendChild(td);
        }
        table.appendChild(tr);
       
    }
}

// reload page
MyForm.addEventListener('reset', clear);
function clear(e){
    location.reload();
    
}


// Go Brooklyn
window.addEventListener("load", function() {
    var f = document.getElementById('Foo');
    setInterval(function() {
        f.style.display = (f.style.display == 'none' ? '' : 'none');
    }, 100);

}, false);