function createTable() {
  let table = document.createElement('table');
  let body = document.createElement('tbody');
  let rows = document.querySelector('#rows').value;
  let cols = document.querySelector('#cols').value;

  let tableContainer = document.querySelector('#tablesDIV');


  for(let i=0; i<rows; i++) {
    let row = document.createElement('tr');
    
    for(let j=0; j<cols; j++) {
      let col = document.createElement('td');
      col.classList.add('td-border');
      row.appendChild(col);
    }
    body.appendChild(row);
  }

  table.appendChild(body);
  tableContainer.appendChild(table);

}

function create() {
    
  let element;
  let elementList = document.querySelectorAll('.jumbotron input');

  let elementContainer = document.querySelectorAll('.elements');

  if(elementList[0].getAttribute('id') === 'element') {
	element = document.createElement(elementList[0].value.toLowerCase().trim());
  }

  if (elementList[1].getAttribute('id') === 'value') {
    if(elementList[0].value === 'input') {
        element.value = elementList[1].value;
    }
   else {
       element.innerText = elementList[1].value;
   }
  }

  elementContainer[0].appendChild(element);

} 

function createTest() {
    alert("Hello Werner");

    let jumbotron = document.querySelector(".jumbotron");
    let h1 = document.createElement("h1");
    h1.innerText = "Hello Werner";

    jumbotron.appendChild(h1);
}