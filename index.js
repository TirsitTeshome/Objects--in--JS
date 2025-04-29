// Question 1

function Employee(name, position, salary){
    this.name = name;
    this.position = position
    this.salary = salary
}

const employees= [
    new Employee("Tirsit", "developer", "80000"),
    new Employee("Lana", "senior developer", "120000"),
    new Employee("Ray", "manager", "200000"),
    new Employee("Bella", "developer", "80000"),
    new Employee("Hadid", "QA", "60000")
]

employees.forEach(employee=>{
    if (employee.position === "developer"){
        employee.salary*= 1.10;
    }

    console.log(`${employee.name}, ${employee.position}, $${employee.salary}`)
})


// Question 2

function manageStock(products){
const inStock= products.filter(product=> product.inStock).sort((a,b)=>a.price-b.price)

return inStock
}

const products=[
    {name:"PC", price:1500, inStock:true},
    {name:"Half ring", price:2, instock:false},
    {name:"book", price:16, instock:true},
    {name: "vase", price: 23, instock:true},
]

console.log(manageStock(products))

//Question 3

function calculateAve(grades){
    for (let student in grades){
        const scores= grades[student];
        const average= scores.reduce((sum, score)=> sum + score, 0)/scores.length
        const result = average> 70? "Pass": "Fail";
        console.log(`${student}, Average=${average}, ${result}`)
    }
}

const grades = {
Tirsit: [80,90,100],
Queen: [85,80,70],
Lucy: [24,52,79]
};

calculateAve(grades)



// let inActive=["Hellen"]
// username.forEach(user=>{
//     if (activeUsers.includes(user.username)){
//         user.isActive= false
//     }
// });

//Question 4

function User(username, email, isActive){
    this.username= username
    this.email= email
    this.isActive= isActive
}

const users=[
    new User("Hellen","hellen@gmail.com", true),
    new User ("Tirsit", "tirsitberihu@gmail.com", false),
    new User ("Mercylin", "mercylinmuthoni@gmail.com", true),
]


if (User.isActive= false){
    console.log("This account has been deactivated")
}


const activeUsers=[];
activeUsers.forEach(user=>{
    if (user.isActive){
        activeUsers.push(user.username)
    }
})

console.log( activeUsers)

//Question 5

