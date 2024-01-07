let students = [
    {
        firstName: 'Khaled',
        age: 15,
        year: 2009
    },
    {
        firstName: 'Ahmed',
        age: 23,
        year: 2001
    },
    {
        firstName: 'Sami',
        age: 11,
        year: 2011
    },
    {
        firstName: 'Ali',
        age: 11,
        year: 2011
    }
]


const tbody = document.getElementById('tbody');

students.forEach(function ({ firstName, age, year }){
    tbody.innerHTML += 
    `
        <tr>
            <td>${firstName}</td>
            <td>${age}</td>
            <td>${year}</td>
        </tr>
    `
})

// let st = {
//     firstName: 'Ali',
//     age: 11,
//     year: 2011
// }

// let {firstName, age} = st
// console.log(firstName, age);