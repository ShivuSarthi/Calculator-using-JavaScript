var selectedRow = null;
function onFormSubmit(e){
    e.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);

    }
    else{
        updateRecord(formData);
    }
    resetForm();



}
function readFormData(){
    var formData = {};
    FormData["productCode"] = document.getElementById("productCode").value;
    FormData["product"] = document.getElementById("product").value;
    FormData["qty"] = document.getElementById("qty").value;
    FormData["perprice"] = document.getElementById("perPrice").value;
    return formData;
}
function insertNewRecord(data){
    
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow  = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.productCode;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.product;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.qty;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.perprice;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = '<button onClick= "onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delet</button>'

}

//Edit the data
function OnEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("productCode").value = selectedRow.cells[0].innerHTML;
    document.getElementById("product").value = selectedRow.cells[1].innerHTML;
    document.getElementById("qty").value = selectedRow.cells[2].innerHTML;
    document.getElementById("perprice").value = selectedRow.cells[3].innerHTML;
}

    function  updateRecord(formData){
        selectedRow.cells[0].innerHTML = formData.productCode;
        selectedRow.cells[1].innerHTML = formData.product;
        selectedRow.cells[2].innerHTML = formData.qty;
        selectedRow.cells[3].innerHTML = formData.perprice;

    }
//Delet the Data
function onDelete(td){
    if(confirm("Do you delete this record?")){
        newRow = td.parentElement.parentElement;
        document.getElementById("storeList").deleteROw(row.rowIndex);

    }
    resetForm();

}
//Reset the data
function resetForm(){
    document.getElementById("productCode").value = '';
    document.getElementById("product").value = '';

    document.getElementById("qty").value = '';

    document.getElementById("perprice").value = '';


}
    
    




