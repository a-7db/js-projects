// counter

const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');
const countLabel = document.getElementById('countLabel');
let counter = 0;

increaseBtn.onclick = () => {
    counter++;
    countLabel.textContent = counter;
}

decreaseBtn.onclick = () => {
    if(counter > 0)
        counter--;

    countLabel.textContent = counter;
}

resetBtn.onclick = () => {
    counter = 0;
    countLabel.textContent = counter;
}