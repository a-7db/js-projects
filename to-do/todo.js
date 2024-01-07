let todos = []
const addBtn = document.querySelector('#add-btn')
const editBtn = document.getElementById('edit-btn')
const todo_list = document.querySelector('.todo-list')

if (!localStorage.key('todos')) {
    localStorage.setItem('todos', [])
}
showTodos()


Events(addBtn, () => {
    let lastID = 1
    let tasks = []
    if (todos.length > 0) {
        lastID = todos[todos.length - 1].ID + 1
        for (let t of todos) { tasks.push(t.task_name) }
    } else {
        lastID = 1
    }
    const input = document.querySelector('#task-name').value


    if (input !== '') {
        if (!tasks.includes(input)) {
            const date = new Date();
            const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
            let new_todo = {
                ID: lastID,
                task_name: input,
                date: formattedDate,
                status: false
            }
            todos.push(new_todo)
            const json = JSON.stringify(todos)
            localStorage.setItem('todos', json)
            showTodos()
            document.querySelector('#task-name').value = ''
        } else {
            alert(`${input} is Exist, please add another title`)
        }
    } else {
        alert('Please Type A Task Name')
    }
})

Events(editBtn, () => {
    const input = document.querySelector('#task-name')
    const taskID = editBtn.getAttribute('elementID')
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].ID === Number(taskID)) {
            todos[i].task_name = (input.value).trim()
            break;
        }
    }

    const json = JSON.stringify(todos)
    localStorage.setItem('todos', json)

    document.getElementById('add-btn').style.display = 'block'
    document.getElementById('edit-btn').style.display = 'none'
    document.getElementById('edit-btn').removeAttribute('elementID')
    document.querySelector('#task-name').value = ''
    showTodos()
})


function showTodos() {
    todos = localStorage.todos !== '' ? JSON.parse(localStorage.todos) : []

    todo_list.innerHTML = ''
    if (todos !== null) {
        todos.forEach(({ task_name, date, status, ID }) => {
            const isDone = status ? 'red' : 'green'
            const icon = status ? 'bx-x' : 'bx-check'
            todo_list.innerHTML +=
                `
        <div class="box">
            <div class="texts">
                <h3>${task_name}</h3>
                <p class="date"><i class='bx bx-calendar'></i>${date}</p>
            </div>
            <div class="icons">
                <a class="ic ${isDone}" onclick="UpdateStatus(${ID})" id="done"><i class='bx ${icon}'></i></a>
                <a class="ic" id="edit" onclick="EditTask(${ID})"><i class='bx bxs-edit-alt'></i></a>
                <a class="ic" id="delete" onclick="RemoveTask(${ID})"><i class='bx bx-x'></i></a>
            </div>
        </div>
    `
        })
    }
}

function UpdateStatus(selectedID) {
    for(let i = 0; i < todos.length; i++)
    {
        if(todos[i].ID === selectedID)
        {
            let status = todos[i].status
            todos[i].status = status? false : true
            break;
        }
    }
    const json = JSON.stringify(todos)
    localStorage.setItem('todos', json)
    showTodos()
}

function EditTask(selectedID) {
    const input = document.querySelector('#task-name')
    let task = todos[selectedID - 1]
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].ID === selectedID) {
            input.value = todos[i].task_name
            break;
        }
    }

    document.getElementById('add-btn').style.display = 'none'
    document.getElementById('edit-btn').style.display = 'block'
    document.getElementById('edit-btn').setAttribute('elementID', selectedID)
}

function RemoveTask(taskID) {
    todos = todos.filter((task) => task.ID !== taskID)
    const json = JSON.stringify(todos)
    localStorage.setItem('todos', json)
    showTodos()
}

function Events(element, handler, event = 'click') {
    element.addEventListener(event, handler)
}