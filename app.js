var addingRec = false;
var editRec = false;
var rVal = "<li></li>";
function addToDo(){
    if(!addingRec){
        addingRec = true;
        var toDoUl = document.getElementById("toDoUl")
        var li = document.createElement('li')
        var input = document.createElement('input')
        var btnC = document.createElement('button')
        var btnA = document.createElement('button')
        btnA.className = "btn btn-success"
        btnC.className = "btn btn-danger"
        btnA.setAttribute('onclick', 'AddRec(this)')
        btnC.setAttribute('onclick', 'discardRec(this)')
        btnA.textContent = 'Add'
        btnC.textContent = 'Cancel'
        input.className = 'form-control'
        li.style.listStyleType = "none"
        li.appendChild(input)
        li.appendChild(btnA)
        li.appendChild(btnC)
        toDoUl.appendChild(li)
    }
}
function discardRec(id){
    addingRec = false;
    id.parentNode.remove()
}
function AddRec(id){
    var inVal = id.parentNode.firstChild.value
    if(!(inVal === '')){
        addingRec = false;
        var toDoUl = document.getElementById("toDoUl")
        var li = document.createElement('li')
        var p = document.createElement('p')
        var btnE = document.createElement('button')
        var btnD = document.createElement('button')
        btnE.className = "btn btn-success"
        btnD.className = "btn btn-danger"
        p.setAttribute('id', 'toDos')
        btnE.setAttribute('onclick', 'EditRec(this)')
        btnD.setAttribute('onclick', 'discardRec(this)')
        btnE.classList.add('liBtn')
        btnD.classList.add('liBtn')
        btnE.textContent = 'Edit'
        btnD.textContent = 'Delete'
        p.textContent = inVal
        li.style.listStyleType = "none"
        li.appendChild(p)
        li.appendChild(btnE)
        li.appendChild(btnD)
        // console.log(id.parentNode.nextSibling)
        toDoUl.insertBefore(li, id.parentNode.nextSibling)
        id.parentNode.remove()
    }
}
function EditRec(id){
    if(!addingRec){
        addingRec = true;
        editRec = true;
        var inVal = id.parentNode.firstChild.innerHTML
        rVal = id.parentNode
        var toDoUl = document.getElementById("toDoUl")
        var nxtSib = id.parentNode.nextSibling
        var li = document.createElement('li')
        var input = document.createElement('input')
        var btnC = document.createElement('button')
        var btnU = document.createElement('button')
        btnU.className = "btn btn-success"
        btnC.className = "btn btn-danger"
        btnU.setAttribute('onclick', 'AddRec(this)')
        btnC.setAttribute('onclick', 'cancelUpdateRec(this)')
        btnU.textContent = 'Update'
        btnC.textContent = 'Cancel'
        input.className = 'form-control'
        input.value = inVal
        li.style.listStyleType = "none"
        li.appendChild(input)
        li.appendChild(btnU)
        li.appendChild(btnC)
        id.parentNode.remove()
        toDoUl.insertBefore(li, nxtSib)
        // id.appendChild(li)
    }
}
function cancelUpdateRec(id){
        addingRec = false;
        editRec = false;
        toDoUl.insertBefore(rVal, id.parentNode.nextSibling)
        id.parentNode.remove()
        // console.log(rVal)
        // var toDoUl = document.getElementById("toDoUl")
        // var li = document.createElement('li')
        // var p = document.createElement('p')
        // var btnE = document.createElement('button')
        // var btnD = document.createElement('button')
        // btnE.className = "btn btn-success"
        // btnD.className = "btn btn-danger"
        // p.setAttribute('id', 'toDos')
        // btnE.setAttribute('onclick', 'EditRec(this)')
        // btnD.setAttribute('onclick', 'discardRec(this)')
        // btnE.classList.add('liBtn')
        // btnD.classList.add('liBtn')
        // btnE.textContent = 'Edit'
        // btnD.textContent = 'Delete'
        // p.textContent = rVal.innerHTML
        // li.style.listStyleType = "none"
        // li.appendChild(p)
        // li.appendChild(btnE)
        // li.appendChild(btnD)
        // toDoUl.appendChild(rVal)
}