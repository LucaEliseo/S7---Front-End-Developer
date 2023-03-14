const inputName = document.getElementById('inputField')
const saveButton = document.getElementById('save')
const resetButton = document.getElementById('reset')
let formReference = document.getElementById('form')

const renderList = function(){
let listName = []
let saveName = localStorage.getItem('Name')
if(saveName) {
    listName  = JSON.parse(saveName)
}

listName.forEach(app => {
    let newLi = document.createElement('li')
    newLi.innerText = app.listName
    listReference.appendChild(newLi)
});
    

}

const reset = function() {
    inputName.value = ''
}

const save = function() {
    const currentName = inputName.value
    localStorage.setItem('Name' , currentName)
}

resetButton.addEventListener('click' , reset)
saveButton.addEventListener('click' , save)