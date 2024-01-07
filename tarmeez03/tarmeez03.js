document.title = "From JS"

let input = document.getElementById('input')
const sned = document.getElementById('send')
const showName = document.getElementById('showData')
const ul = document.getElementById('list')
const instr = document.getElementById('instr')

isFound()

Events(input, () => ((input.value).length > 0)? showName.textContent = input.value: '', 'mouseover')
Events(input, () => showName.textContent = '', 'mouseleave')

Events(sned, function() {
    if (input.value.length > 0) {
        const newEl = document.createElement('li')
        const name = document.createTextNode(input.value)
        newEl.appendChild(name)
        newEl.classList.add('li')
        ul.appendChild(newEl)
    }
    isFound()
})


Events(instr, () => instr.style.backgroundColor = 'red', 'mouseover')
Events(instr, () => instr.style.backgroundColor = '', 'mouseleave')
Events(ul, () => ul.style.backgroundColor = 'green', 'mouseover')
Events(ul, () => ul.style.backgroundColor = '', 'mouseleave')


function isFound(){
    const all_li = document.getElementsByClassName('li')
    if (all_li.length > 0) {
        instr.style.display = 'none'
    }
}

function Events(element, handler, event = 'click'){
    element.addEventListener(event, handler)
}
