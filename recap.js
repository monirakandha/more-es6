// 1. let and const 
const hubby = 'Omar Sani'; // const not changable
let phone = 'Samsung'; // it's changeable
const wife = 'Sultana'



// template string 

const myNote = `I am mojnu. I don't have a laili, But I a have ${wife}. We are using same brand phone . Brand name is ${phone}`
console.log(myNote);

// defult perameter  and spreed or three dot
function maxNumber(array = []){
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber();
console.log(biggest);

// arraow function 

const square = x => x* x;
console.log(square(8));

