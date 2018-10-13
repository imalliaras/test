console.log("destructuring");

// const person = {
//     name: 'John',
//     age: 32,
//     location: {
//         city: 'Athens',
//         temp: 32
//     }
// }

// const name = person.name;
// const age = person.age;

// const { name, age } = person;

// console.log(`${person.name} is ${person.age}`);



// function skata({name = "Malakas", surname = "Paparas"}) {

//     return `Hello, ${name} ${surname}`;

// }

// skata({
//     name:"Giannis",
//     surname: "Maliaras"
// });

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } =  book.publisher;

// console.log(publisherName);

// const address = ['Ainianon 44', 'Lamia', 'Greece', '22100'];

// const [, state = 'New York' , country] = address;

// console.log(`You are in ${state}`);

const item = ['Coffee', '2$', '2.5$', '3$'];

const [type, , medium, ] = item;

console.log(`A medium ${type} costs ${medium}`);

// console.log('A medium Coffee costs 2.5$');