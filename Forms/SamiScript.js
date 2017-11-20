
var MyData = [];
var btnSave;
window.onload = function () {
    btnSave = document.getElementById('btnSave');
    btnSave.addEventListener('click', manipulateData)
};

function manipulateData() {
    if (validateData()) {
        saveData();
        clearForm();
        refereshResultTable();
    }
}
function validateData() {
    var name = document.getElementById("txtName").value;
    var age = document.getElementById("txtAge").value;
    var gender = document.getElementById("selGender").value;
    if (name == '') {
        alert('hey fill the name');
        return false;
    }
    if (age == '' || age == '0') {
        alert('hey fill the age');
        return false;
    }
    if (isNaN(age)) {
        alert('hey fill the age properly');
        return false;
    }
    if (gender == '0') {
        alert('hey fill the gender');
        return false;
    }
    return true;
}

function saveData() {
    var saveData = getEmptyDataObject();
    saveData.name = document.getElementById("txtName").value;
    saveData.age = document.getElementById("txtAge").value;
    saveData.gender = document.getElementById("selGender").value;
    saveData.remarks = document.getElementById("taRemarks").value;
    MyData.push(saveData);
}
function clearForm() {
    document.getElementById("txtName").value = '';
    document.getElementById("txtAge").value = '';
    document.getElementById("selGender").value = '0';
    document.getElementById("taRemarks").value = '';
}

function getEmptyDataObject() {
    var emptyData = {
        name: '',
        age: 0,
        gender: '',
        remarks: ''
    };
    return emptyData;
}

function refereshResultTable() {
    var divResult = document.getElementById('divResult');
    if (MyData.length > 0) {
        var tblResult = document.getElementById('tblResult');
        var tblResultBody = tblResult.children[0];
        var noOfRows = tblResultBody.children.length;
        for (var i = noOfRows - 1; i >= 0; i--) {
            if (tblResultBody.children[i].id != "trResultHead") {
                tblResultBody.children[i].remove();
            }
        }

        var noOfData = MyData.length;
        for (i = 0; i < noOfData; i++) {
            //
            var trTmp = document.createElement('tr');
            //
            var tdName = document.createElement('td');
            tdName.innerHTML = MyData[i].name;
            trTmp.appendChild(tdName);
            //
            var tdAge = document.createElement('td');
            tdAge.innerHTML = MyData[i].age;
            trTmp.appendChild(tdAge);
            //
            var tdGender = document.createElement('td');
            tdGender.innerHTML = MyData[i].gender;
            trTmp.appendChild(tdGender);
            //
            var tdRemarks = document.createElement('td');
            tdRemarks.innerHTML = MyData[i].remarks;
            trTmp.appendChild(tdRemarks);
            //
            var tdAction = document.createElement('td');
            tdAction.innerHTML = '<a href="#">Edit</a>&nbsp;<a href="#">Delete</a>';
            trTmp.appendChild(tdAction);
            //
            tblResultBody.appendChild(trTmp);
        }

        divResult.style.display = 'block';
    }
    else {
        divResult.style.display = 'none';
    }
}
