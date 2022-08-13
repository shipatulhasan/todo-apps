// sector and asign variable
const newTask = document.querySelector('#new-task')
const form = document.querySelector('form')
const dateElement = document.querySelector('#date')
const todoUl = document.querySelector('#items')
const completeUl = document.querySelector('#citems')



// date
const option = {weekday:'long', month:'short', day:'numeric'}
const today = new Date()
dateElement.innerHTML = today.toLocaleDateString('en-uK', option)

// add task 
function createTask(task){
    let listItems = document.createElement('li')
    let checkbox = document.createElement('input')
    let label = document.createElement('label')
    label.className = 'ml-1.5 text-gray-300 font-semibold text-base'
    label.innerText = task
    checkbox.type = 'checkbox'
    listItems.appendChild(checkbox)
    listItems.appendChild(label)

    return listItems
    

}

// input 
function addTask(event){
    event.preventDefault()
    let listItems = createTask(newTask.value)
    todoUl.appendChild(listItems)
    newTask.value = ''

    bindInCompleteTask(listItems,completeTask)

}

// inCompleteTask function
function bindInCompleteTask(taskItem, checkBoxClick){
    let checkbox = taskItem.querySelector('input[type="checkbox"]')
    checkbox.onchange = checkBoxClick
}

// complete function

function completeTask(){
    let listItem = this.parentNode

    listItem.className = 'flex justify-between items-center text-gray-300 font-semibold text-base'

    let deleteBtn = document.createElement('button')
    deleteBtn.innerHTML=`
    <i class="fa-solid fa-trash-can text-red-400"></i>`
    listItem.appendChild(deleteBtn)

    // remove checkbox
    let checkbox = listItem.querySelector('input[type="checkbox"]')
    checkbox.remove()

    completeUl.appendChild(listItem)
    bindCompleteTask(listItem, deleteTask)
}


// delete task
function deleteTask(){
    let listItem = this.parentNode
    let ul = listItem.parentNode
    ul.removeChild(listItem)
}

// delete button

function bindCompleteTask(taskItem, deleteBtnClick){
    let deleteBtn = taskItem.querySelector('button')
    deleteBtn.onclick = deleteBtnClick
}



form.addEventListener('submit', addTask)

