const numbers = [1,2,3,4,5,6]

const maiorQueZero = el => el > 0
const maiorQueDez = el => el >= 10
const even = el => el % 2 === 0

console.log(numbers.filter(el => el > 0))
console.log(numbers.filter(maiorQueZero))
console.log(numbers.filter(maiorQueDez))
console.log(numbers.filter(even))

const students = [

    {name: 'Jake' , score: 6.4 },
    {name: 'Susan' , score: 8.6 },
    {name: 'Emma' , score: 9.4 },
    {name: 'Peter' , score: 9.1 },
    
]

const bomAluno = students => students.score > 9

console.log(students.filter(bomAluno))