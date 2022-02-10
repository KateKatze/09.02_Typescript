// Ex. 1

var array: number[] = [];
for (let i=1; i<=10; i++){
    array.push(i);
}
for (let j: number = 0; j < array.length; j++) {
    for (let i: number = 0; i < array.length; i++) {
        var result: number = array[i]*array[j];
        var text: string = `${array[i]}x${array[j]} = ${result}`
        console.log(text);
    }
}


// Ex. 2

// const person = {fname: "Kate", lname: "Kogler"};
// console.log(person.fname, person.lname);

// var text = (document.getElementById("result") as HTMLElement);

// function output (){

//     const arr = [];
//     for (let i = 0; i < 10; i++) {
//     arr.push(person.fname);
//     }

//     var fullname = "";

//     arr.forEach(function outputText() {
//     fullname += ` ${person.fname} ${person.lname} `;
//     });

//     // console.log(fullname);
//     text.innerHTML = fullname;
// }

// setTimeout(output, 5000);

// //Ex. 3

// const ppl: String [] = ["John", "Jill", "Marie", "Peter", "Kate"];

// for (let index in ppl) {
//     console.log(index);
// }

// for (let value of ppl) {
//     console.log(value);
// }

// for (let index in ppl) {
//     console.log(index, ppl[index]);
// }


// Advanced

// const text = (document.getElementById("result") as HTMLElement);

// const salami: String [] = ["Cheese", "Salami", "Olives", "Onion", "Oregano"];

// text.innerHTML = "Salami Pizza: <br>";

// for (let index in salami) {
//     text.innerHTML += `${Number (index) + 1} - ${salami[index]} <br>`;
// }

// const text1 = (document.getElementById("next") as HTMLElement);

// const mafioso: String [] = ["Corn", "Ham", "Pepperoni", "Onion", "Salami"];

// text1.innerHTML = "Mafioso Pizza: <br>";

// for (let index in mafioso) {
//     text1.innerHTML += `${Number (index) + 1} - ${mafioso[index]} <br>`;
// }

