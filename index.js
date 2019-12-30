console.log('I have been loaded');

// var dropDownItems = document.getElementsByTagName('a');
// document represents html current html page 
// 
var dropDownItems = document.getElementsByClassName('dropdown-item');
var randomElement = document.getElementById('random');

// access home

var homeTag = document.getElementById('home');

console.log(home);


randomElement.addEventListener('mouseenter', (event) => {
    console.log({
        event
    });
    homeTag.style.background = 'red';

})

randomElement.addEventListener('mouseleave', (event) => {
    console.log({
        event
    });
    homeTag.style.background = 'white';

})

// console.log({
//     randomElement
// });

// var oneItem = dropDownItems[0];

// console.log(oneItem);

// console.log(oneItem.innerHTML);

var document = {
    getElementsByClassName:() => {

    },
    body: () => {

    },
    location: () => {

    }
}

// oneItem.innerHTML = 'Subutai is a monster';

// console.log({dropDownItems});

// console.log(dropDownItems);

// console.log(dropDownItems.length);

var dropDownArray = Array(...dropDownItems);

// console.log(dropDownArray);

var array = [1,2,3,4,5,6,7,8];
array[0];
array[1];
array[2];
array[array.length - 1];
// index = index + 1;


// for (let index = 0; index < array.length; index++) {
//     // console.log(index);
//     console.log(array[index]);
// }

for (let index = 0; index < dropDownArray.length; index++) {
    // console.log(index);
    // console.log(dropDownArray[index]);
}

const string = "looks like this";

const number = 8;

const boolean = true // or false

const array = ["just numbers", "something here", "Another thign here", "Final thing"];

const obj = {
    prop: 1,
    prop: 2,
}


