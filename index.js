const age = 10;
if (age<5) {
    console.log("you are a baby. You get in free!")
}else if (age<10) {
    console.log("You are a child. Pay $10!")
} else if (age<65) {
    console.log("You are an adult. You Pay $20!")
} else if (age>65) {
    console.log("You are a senior. You pay $10!")
}

const password = prompt("please enter a new password");
if (password.length>=6){
    console.log("long enough password!")
} else{
    console.log("password too short! must be 6+ characters")
}
for (let i = 1; i <= 10; i++){
    console.log(i);
}



function greet (firstName, lastName) {
    console.log('hey there, ${firstName} ${lastName[0]}.')
}

const add = function (x, y) {
    return x + y;
}

const container = document.queryselector('#container');
const baseURL = 'https://raw.githubusercontent.com/pokeAPI/sprites/master/pokemon/1.png'



for (let i = 1; i < 151; i++) {
    const newImg = document.createElement('img');
    newImg.src = '${baseURL}${i}.png'
    container.appendchild(newImg)
}
