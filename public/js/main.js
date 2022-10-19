var selectedRow = null;
function onFormSubmit() {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow === null) {
        insertNewTask(formData);
    }
    //sortBy(cc);
    resetForm();
}

function readFormData() {
    var formData = {};
    formData["todo_name"] = document.getElementById("todo_name").value;
    return formData;
}
function insertNewTask(data) {
    var table = document.getElementById("storeList");
    var rowcount = document.getElementById("storeList").rows.length;
    var newRow = table.insertRow(rowcount);
    newRow.id = "newRow_" + rowcount;
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = rowcount;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.todo_name;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = Date()
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<button class="delete" onClick='onDelete(this)'>Delete</button>`;
    sortBy(newRow.id)
}
function onDelete(td) {
    if (confirm('Do you want to delete this task?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        updateRowCount();
    }
    resetForm();
}
function resetForm() {
    sortBy(cc);
        document.getElementById('todo_name').value = '';
}
function updateRowCount() {
    var table = document.getElementById("storeList");
    var rowcountAfterDelete = document.getElementById("storeList").rows.length;
    for (var i = 1; i < rowcountAfterDelete; i++) {
        table.rows[i].cells[0].innerHTML = i;
    }
}
cPrev = -1;
var cc;
function sortBy(c) {   
    //cc=c;
    rows = document.getElementById("storeList").rows.length;
    columns = document.getElementById("storeList").rows[1].cells.length;
    arrTable = [...Array(rows)].map(e => Array(columns));
    for (ro = 0; ro < rows; ro++) {
        for (co = 0; co < columns; co++) {
            arrTable[ro][co] = document.getElementById("storeList").rows[ro].cells[co].innerHTML;
        }
    }
    th = arrTable.shift();
    if (c !== cPrev) {
      arr=  arrTable.sort(
            function (a, b) {
                if (a[c] === b[c]) {
                    return 0;
                }
                else {
                    return (a[c] < b[c]) ? -1 : 1;
                   
                }
            }
        );
    }
    else{
        arrTable.reverse();
    }
    cPrev = c;
    arrTable.unshift(th);
    for (ro = 0; ro < rows; ro++) {
        for (co = 0; co < columns; co++) {
            document.getElementById("storeList").rows[ro].cells[co].innerHTML = arrTable[ro][co];         
            
        }
    }
   //sortBy(cc);
    //console.log(arrTable);
}


