var addingRec = false;
var rVal = "<li></li>";
var colors = ["#7acbbd", "#ffb72b", "#855fc1", "#ea4986", "#ff8737"]
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thirsday", "Friday", "Saturday"]
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var colInd = 0;
setInterval(GetTime, 1000)

function GetTime(){
    var dateTime = new Date()
    var day = document.getElementById('day')
    var date = document.getElementById('date')
    var time = document.getElementById('time')
    var formattedMinutes = dateTime.getMinutes()
    var formattedHours = dateTime.getHours()
    day.innerHTML = days[dateTime.getDay()];
    date.innerHTML = months[dateTime.getMonth()] + ' ' + dateTime.getDate() + ', ' + dateTime.getFullYear();
    if(formattedMinutes < 10)
        formattedMinutes = "0" + formattedMinutes
    if(formattedHours < 10)
        formattedHours = "0" + formattedHours
        
    time.innerHTML = formattedHours + ':' + formattedMinutes
}

function addToDo(){
    if(!addingRec){
        addingRec = true;
        var toDoUl = document.getElementById("toDoUl")
        var li = document.createElement('li')
        var input = document.createElement('input')
        var btnC = document.createElement('button')
        var btnA = document.createElement('button')
        btnA.className = "btn btn-success liBtnTAdd fa fa-check"
        btnC.className = "btn btn-danger liBtnAdd fa fa-times"
        btnA.setAttribute('onclick', 'AddRec(this)')
        btnC.setAttribute('onclick', 'discardRec(this)')
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
        btnE.className = "btn btn-success liBtn fa fa-pencil"
        btnD.className = "btn btn-danger liBtn fa fa-trash"
        btnE.style.display = "none"
        btnD.style.display = "none"
        p.setAttribute('id', 'toDos')
        li.setAttribute('onmouseover', 'showBtn(this)')
        li.setAttribute('onmouseout', 'hideBtn(this)')
        btnE.setAttribute('onclick', 'EditRec(this)')
        btnD.setAttribute('onclick', 'discardRec(this)')
        p.textContent = inVal
        p.style.backgroundColor = colors[colInd]
        if(colInd<4)
            colInd++
        else
            colInd = 0
        li.style.listStyleType = "none"
        li.appendChild(p)
        li.appendChild(btnE)
        li.appendChild(btnD)
        toDoUl.insertBefore(li, id.parentNode.nextSibling)
        id.parentNode.remove()
    }
}
function EditRec(id){
    if(!addingRec){
        addingRec = true;
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
    }
}
function cancelUpdateRec(id){
        addingRec = false;
        toDoUl.insertBefore(rVal, id.parentNode.nextSibling)
        id.parentNode.remove()
}
function DelAll(){
    addingRec = false;
    var toDoUl = document.getElementById("toDoUl")
    var first = toDoUl.firstElementChild;
    while (first) { 
        first.remove(); 
        first = toDoUl.firstElementChild;
    }
}
function showBtn(id){
    var btnE = id.getElementsByClassName('liBtn')[0]
    var btnD = id.getElementsByClassName('liBtn')[1]
    btnE.style.display = "inline"
    btnD.style.display = "inline"
}
function hideBtn(id){
    var btnE = id.getElementsByClassName('liBtn')[0]
    var btnD = id.getElementsByClassName('liBtn')[1]
    btnE.style.display = "none"
    btnD.style.display = "none"
}
