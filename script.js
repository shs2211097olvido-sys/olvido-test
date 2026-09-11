console.log("hello pring.");
const Myname = "Nica Olvido";
console.log("name: " + Myname);
let age = 20;
let number = "09705643839";
console.log("Age: " + age)
console.log("Number: " + number);


const address = "Brgy 2, Victorias City";
console.log("Address: " + address);

//functions
function greet(name) {
    return `good morning, ${name}`;
}
console.log(greet("Rene"));


function mdas(num1, num2) {
    let m = num1 * num2;
    let d = num1 / num2;
    let a = num1 + num2;
    let s = num1 - num2;


    return (`Values: ${num1} and ${num2}. PRODUCT: ${m}, Quotient: ${d}, Sum: ${a}, Difference: ${s}`);
}
console.log(mdas(5, 3));

const heading = document.querySelector("h1")
console.log(heading);

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const serviceHeading = document.querySelector("#services h2");
console.log(serviceHeading);

const projectHeading = document.querySelector("#projects h2");
console.log(projectHeading);

//Text Context

heading.textContent = "My portfolio";
contactHeading.textContent = "Let's Connect!";
serviceHeading.textContent = "My Services";
projectHeading.textContent = "My Projects";

//.style
heading.style.color = "purple";
heading.style.backgroundColor = "yellow";
contactHeading.style.color = "purple";
serviceHeading.style.color = "purple";
projectHeading.style.color = "purple";