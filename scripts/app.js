/**
 * Created by Haziz on 7/18/2016.
 */
var row = document.getElementById("row");
var input = document.getElementById('addTask');
function addTask(input, list) {
    if (input.value === "") {
        alert("Please fill the input field!");
    }
    else {
        var mainDiv = document.createElement("div");
        var colIS = document.createElement("div");
        var colEdit = document.createElement("div");
        var colDlt = document.createElement("div");
        colIS.className = "col-lg-10 col-md-10 col-sm-10 col-xs-12";
        colEdit.className = "col-lg-1 col-md-1 col-sm-1 col-xs-6";
        colDlt.className = "col-lg-1 col-md-1 col-sm-1 col-xs-6";
        var checkBox = document.createElement("i");
        checkBox.setAttribute("aria-hidden", "true");
        checkBox.setAttribute("onclick", "checkBoxClick(this)");
        var li = document.createElement("span");
        checkBox.className = "fa fa-square-o fa-2x";
        li.className = "unchecked";
        var editBtn = document.createElement("button");
        var dltBtn = document.createElement("button");
        editBtn.className = "btn edit";
        dltBtn.className = "btn dlt";
        editBtn.innerHTML = "Edit";
        dltBtn.innerHTML = "Delete";
        dltBtn.setAttribute("onclick", "deleteItem(this)");
        editBtn.setAttribute("onclick", "editItem(this)");
        li.innerHTML = input.value;
        colEdit.appendChild(editBtn);
        colDlt.appendChild(dltBtn);
        colIS.appendChild(checkBox);
        colIS.appendChild(li);
        mainDiv.appendChild(colIS);
        mainDiv.appendChild(colEdit);
        mainDiv.appendChild(colDlt);
        list.appendChild(mainDiv);
        input.value = "";
    }
}
function checkBoxClick(icon) {
    if (icon.className === "fa fa-square-o fa-2x") {
        icon.className = "fa fa-check-square-o fa-2x";
        icon.parentNode.childNodes[1].style.textDecoration = "line-through";
    }
    else {
        icon.className = "fa fa-square-o fa-2x";
        icon.parentNode.childNodes[1].style.textDecoration = "none";
    }
}
function deleteItem(dltbtn) {
    var parent = dltbtn.parentNode.parentNode.parentNode;
    var child = dltbtn.parentNode.parentNode;
    parent.removeChild(child);
}
function editItem(editbtn) {
    if (editbtn.innerHTML === "Edit") {
        editbtn.innerHTML = "Save";
        var parent_1 = editbtn.parentNode.parentNode.childNodes[0];
        var task = parent_1.childNodes[1].innerHTML;
        var tastClass = parent_1.childNodes[1].className;
        parent_1.removeChild(parent_1.childNodes[1]);
        var inputF = document.createElement("input");
        inputF.className = tastClass;
        inputF.value = task;
        inputF.setAttribute("maxlength", "40");
        inputF.autofocus = true;
        parent_1.appendChild(inputF);
    }
    else {
        var parent_2 = editbtn.parentNode.parentNode.childNodes[0];
        var input_1 = parent_2.childNodes[1].value;
        if (input_1 === "") {
            alert("Please fill the input field!");
        }
        else {
            editbtn.innerHTML = "Edit";
            var parent_3 = editbtn.parentNode.parentNode.childNodes[0];
            var newVal = parent_3.childNodes[1].value;
            var inputClass = parent_3.childNodes[1].className;
            parent_3.removeChild(parent_3.childNodes[1]);
            var span = document.createElement("span");
            span.className = inputClass;
            span.innerHTML = newVal;
            parent_3.appendChild(span);
        }
    }
}
//# sourceMappingURL=app.js.map