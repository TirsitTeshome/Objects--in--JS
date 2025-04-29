// Question 1

function Employee(name, position, salary) {
    this.name = name;
    this.position = position
    this.salary = salary
}

const employees = [
    new Employee("Tirsit", "developer", "80000"),
    new Employee("Lana", "senior developer", "120000"),
    new Employee("Ray", "manager", "200000"),
    new Employee("Bella", "developer", "80000"),
    new Employee("Hadid", "QA", "60000")
]

employees.forEach(employee => {
    if (employee.position === "developer") {
        employee.salary *= 1.10;
    }

    console.log(`${employee.name}, ${employee.position}, $${employee.salary}`)
})





// Question 2

const products = [
    { name: "PC", price: 1500, inStock: true },
    { name: "Half ring", price: 2, inStock: false },
    { name: "book", price: 16, inStock: true },
    { name: "vase", price: 23, inStock: true },
];

   

function manageStock(products){
    let productInstock=products.filter(product=>product.inStock===true);
    productInstock.sort((a,b)=>a.price-b.price);
    return productInstock;
 };
 console.log(manageStock(products));




//Question 3

function calculateAve(grades) {
    for (let student in grades) {
        const scores = grades[student];
        const average = scores.reduce((sum, score) => sum + score, 0) / scores.length
        const result = average > 70 ? "Pass" : "Fail";
        console.log(`${student}, Average=${average}, ${result}`)
    }
}

const grades = {
    Tirsit: [80, 90, 100],
    Queen: [85, 80, 70],
    Lucy: [24, 52, 79]
};

calculateAve(grades)





//Question 4

function User(username, email, isActive) {
    this.username = username
    this.email = email
    this.isActive = isActive
}

const users = [
    new User("Hellen", "hellen@gmail.com", true),
    new User("Tirsit", "tirsitberihu@gmail.com", false),
    new User("Mercylin", "mercylinmuthoni@gmail.com", true),
]
let activeUsers = [];
users.forEach(user => {
    if (user.isActive === false) {
        console.log(`${user.username}'s account has been deactivated`)
    }else{
        activeUsers.push(user.username)
    };
});
console.log(activeUsers);





//Question 5

function destinationPlaces(destinations, maxDistance, budget) {
    const affordTrip = destinations.filter(destination => destination.distance <= maxDistance && destination.budgetRequired <= budget);

    if (affordTrip.length == 0) {
        return "No destination available for this budget."
    }
    else {
        return affordTrip
    }
}

const destinations = [
    { name: "NewYork", distance: 9800, budgetRequired: 1500 },
    { name: "Villages of France ", distance: 4500, budgetRequired: 900 },
    { name: "Addis", distance: 1300, budgetRequired: 500 }
]
console.log(destinationPlaces(destinations, 6700, 400));
console.log(destinationPlaces(destinations, 6700, 1900));