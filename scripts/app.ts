/**
 * Created by Haziz on 7/18/2016.
 */
let row = document.getElementById("row");
let input = (<HTMLInputElement>document.getElementById('addTask'));
function addTask(input, list) : void{
    if (input.value === ""){
        alert("Please fill the input field!");
    } else {
        let mainDiv = document.createElement("div");
        let colIS = document.createElement("div");
        let colEdit = document.createElement("div");
        let colDlt = document.createElement("div");
        colIS.className = "col-lg-10 col-md-10 col-sm-10 col-xs-12";
        colEdit.className = "col-lg-1 col-md-1 col-sm-1 col-xs-6";
        colDlt.className = "col-lg-1 col-md-1 col-sm-1 col-xs-6";
        let checkBox = document.createElement("i");
        checkBox.setAttribute("aria-hidden", "true");
        checkBox.setAttribute("onclick", "checkBoxClick(this)");
        let li = document.createElement("span");
        checkBox.className = "fa fa-square-o fa-2x";
        li.className = "unchecked";
        let editBtn = document.createElement("button");
        let dltBtn = document.createElement("button");
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
function checkBoxClick(icon) : void{
    if (icon.className === "fa fa-square-o fa-2x"){
        icon.className = "fa fa-check-square-o fa-2x";
        icon.parentNode.childNodes[1].style.textDecoration = "line-through";

    } else {
        icon.className = "fa fa-square-o fa-2x";
        icon.parentNode.childNodes[1].style.textDecoration = "none";

    }
}
function deleteItem(dltbtn) : void{
    let parent = dltbtn.parentNode.parentNode.parentNode;
    let child = dltbtn.parentNode.parentNode;
    parent.removeChild(child);
}
function editItem(editbtn) : void{
    if (editbtn.innerHTML === "Edit"){
        editbtn.innerHTML = "Save";
        let parent = editbtn.parentNode.parentNode.childNodes[0];
        let task = parent.childNodes[1].innerHTML;
        let tastClass = parent.childNodes[1].className;
        parent.removeChild(parent.childNodes[1]);
        let inputF = (<HTMLInputElement>document.createElement("input"));
        inputF.className = tastClass;
        inputF.value = task;
        inputF.setAttribute("maxlength", "40");
        inputF.autofocus = true;
        parent.appendChild(inputF);
    } else {
        let parent = editbtn.parentNode.parentNode.childNodes[0];
        let input = parent.childNodes[1].value;
        if(input === ""){
            alert("Please fill the input field!");
        } else {
            editbtn.innerHTML = "Edit";
            let parent = editbtn.parentNode.parentNode.childNodes[0];
            let newVal = parent.childNodes[1].value;
            let inputClass = parent.childNodes[1].className;
            parent.removeChild(parent.childNodes[1]);
            let span = document.createElement("span");
            span.className = inputClass;
            span.innerHTML = newVal;
            parent.appendChild(span);
        }
    }
}