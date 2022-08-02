function sayHello() {
    console.log('Hello world')
}

sayHello()

function sayHalloto(name) {
    console.log(`Hello ${name}!`)
}

sayHalloto('Felipe')

const incremet1 = n => n + 1 

console.log(incremet1(55))

const sum = (a,b) => a + b

console.log(sum(10,20))



function logNuns(...nums){
       console.log(nums)
    
}

logNuns(1,2,3,4,5)