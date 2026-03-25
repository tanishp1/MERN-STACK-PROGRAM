console.log("We are using javascript")

// variables
const name = "Tanish"
var  surname = "Pawar"
let middleName = "Satish"

// function 
// normal function

function getMyName(){
    console.log("function 1");
}

getMyName()

// arrow function

const getYourName = () => {
    console.log("function 2")
}

getYourName()

// parameter

const getMyFullName = (data = "No name") => {
    console.log("my full name", data)
}

const myName = "Tanish Pawar"
getMyFullName(myName)

const test = "Satish Pawar"
getMyFullName(test)

getMyFullName()

// array

const iteam = [ "test 1" , "test 2" , "test 3" , "test 4"]
console.log(iteam , "full iteam print")
console.log(iteam[0], "print only index 0 -(first value)")
console.log(iteam[2])

// object
 
const studentDetails = {
    name : "Tanish Pawar",
    city : "karad"
}

console.log(studentDetails , "=> studentDetails full object")
console.log(studentDetails , "=> studentDetails name only")