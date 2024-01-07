let data = document.getElementById('data')


const colors = ['#28e27c', '#2866e2', '#e228a1', '#e22828', '#28bae2', '#e27c28', '#9e28e2', '#c7078a', '#07c771', '#124b5b', '#5b124b', '#125b2d'];


document.getElementById('start-btn').addEventListener('click', () => {
    let btncolor = Math.floor(Math.random() * 13)
    document.getElementById('start-btn').style.backgroundColor = colors[btncolor]
    setInterval(() => {
        let body = document.querySelector('body');
        let i = Math.floor(Math.random() * 13)
        body.style.backgroundColor = colors[i]
    }, 3000)
})