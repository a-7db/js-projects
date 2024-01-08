const display = document.getElementById('dispaly')

function appendToDisplay(input){
    if(display.value === 'Error'){
        display.value = input
    }else {
        display.value += input
    }
}

function clearDisplay(){
    display.value = ''
}

function calculate(){
    try {
        if(display.value !== ''){
            display.value = eval(display.value)

        }
        
    } catch (error) {
        display.value = 'Error'
    }
}