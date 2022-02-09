// Ex. 2

const person = {fname: "Kate", lname: "Kogler"};
console.log(person.fname, person.lname);

var text = (document.getElementById("result") as HTMLElement);

function output (){

    const arr = [];
    for (let i = 0; i < 10; i++) {
    arr.push(person.fname);
    }

    var fullname = "";

    arr.forEach(function outputText() {
    fullname += ` ${person.fname} ${person.lname} `;
    });

    // console.log(fullname);
    text.innerHTML = fullname;
}

setTimeout(output, 5000);

//Ex. 3

