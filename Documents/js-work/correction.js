// let numOfUser;
// let costPerUsers;
// numOfUser = 100;
// costPerUsers = 100000;
// function Total(numOfUser, costPerUsers) {
//   return console.log("Total cost :" + numOfUser * costPerUsers);
// }

// Total(numOfUser, costPerUsers);

// let age = 48;
// function reduction(age) {
//   if (age <= 18) {
//     return true;
//   }
//   return false;
// }

// console.log(reduction(age));

// exo

// let note1 = Number(prompt("enrter note 1"));
// let note2 = Number(prompt("enrter note 2"));
// let note3 = Number(prompt("enrter note 3"));
// let notes = [note1, note2, note3];
// let sum = notes.reduce((acc, curr) => acc + curr, 0);
// let average = sum / notes.length;

// console.log(average);

// ex5

// let nom = "Merveille";
// let age = 30;
// let inscrit = false;

// console.log(typeof nom);
// console.log(typeof age);
// console.log(typeof inscrit);

// ex6

// let table = ["Ken", "Farelle", "Herve"];
// let name = table.push("Kevin");

// console.log(table);

// // ex7

// let name = prompt("Enter your name");
// alert("Hello " + name);

// ex 2

// function calculatesum(a, b) {
//   return a + b;
// }
// console.log(calculatesum(3, 4));
// ex: 3;
// function changingtouppercaseletter(word) {
//   let word = "bievenue a la facultes des genie ";
//   return console.log.changingtouppercaseletter(word);
// }
// console.log(changingtouppercaseletter());
// const personne = [
//   {
//     femmes: {
//       fille: {
//         age: 20,
//       },
//     },
//     homme: {
//       garcon: {
//         age: 45,
//         moy: [
//           56,
//           78,
//           98,
//           34,
//           {
//             test: 78.67,
//             name: {
//               test: "patate",
//             },
//           },
//         ],
//       },
//     },
//   },
// ];
// let map = personne[0].homme.garcon.moy[4].name.test.toUpperCase();
// console.log(map);

/* ext ob */
const film = {
  title: "les tourment d'exo",
  realisator: "setane",
  yearOfRelease: 2035,
  actor: ["Enzo Kazano", "yamazaki Soda", "Anayam baki"],
};

console.log(film);
let firstActor = film.actor[0];
console.log(firstActor);

const pc = {
  brand: "HP",
  model: "820",
  processor: "2.1 hertz",
  ram: "8 Giga",
  memory: "1 Tera",
};
for (let key in pc) {
  console.log(key + " " + pc[key]);
}

const Students = [
  {
    name: "Arthur",
    age: "25",
    average: "10",
  },
  {
    name: "Raissa",
    age: "14",
    average: "15",
  },
  {
    name: "Kalash",
    age: "50",
    average: "1",
  },
  {
    name: "Mini ferme",
    age: "35",
    average: "15",
  },
  {
    name: "Mr N",
    age: "55",
    average: "15",
  },
];

let student = Students.filter((student) => student.average == 15);
for (let i = 0; i < student.length; i++) {
  console.log(student[i].name);
}

const cars = [
  {
    brand: "toyota corana",
    model: "255",
    year: 2010,
  },
  {
    brand: "honda",
    model: "exo",
    year: 2020,
  },
  {
    brand: "tesla",
    model: "bbl",
    year: 1998,
  },
  {
    brand: "ford",
    model: "exo dus",
    year: 2015,
  },
  {
    brand: "toyota panther",
    model: "123 limited edition",
    year: 2016,
  },
  {
    brand: "toyota corana",
    model: "256",
    year: 2015,
  },
];
let res = cars.filter((car) => car.year >= 2015);
for (let i = 0; i < res.length; i++) {
  console.log(res[i].brand);
}

let product = [
  {
    name: "key board rgb",
    price: 5000,
  },
  {
    name: "mouse rgb",
    price: 5000,
  },
  {
    name: "nap rgb",
    price: 5000,
  },
];
let newArry;

product.forEach((element) => console.log(element.name));
let employees = [
  {
    name: "Exo",
    post: "Developer",
    salarie: 3000000,
  },
  {
    name: "Noah",
    post: "HRM",
    salarie: 200000,
  },
  {
    name: "syria",
    post: "HRM",
    salarie: 150000,
  },
  {
    name: "Yohann",
    post: "PDG",
    salarie: 6000000,
  },
  {
    name: "Martial",
    post: "Developer",
    salarie: 2000000,
  },
];

/* const groupBySalarie = Map.groupBy(employees, (employee) => employee.post);
console.log(groupBySalarie);
for (const [salarie] of groupBySalarie) {
  console.log(`post: ${salarie}`);
}
 */
const groupBySalarie = employees.reduce((acc, { post, salarie }) => {
  acc[post] = (acc[post] || 0) + salarie;
  return acc;
}, {});
console.log(groupBySalarie);

let books = [
  {
    title: "The broken heart of ja'far",
    author: "Luna",
    pages: 100,
  },
  {
    title: "Noah's legacy",
    author: "Exo",
    pages: 150,
  },
  {
    title: "UMA",
    author: "Jakson west",
    pages: 50,
  },
  {
    title: "Love and Thunder",
    author: "Arcan Mc snow",
    pages: 99,
  },
  {
    title: "Mind",
    author: "EXO",
    pages: 140,
  },
];

const page = function (books) {
  const op = books.sort((a, b) => a.pages - b.pages);
  return op;
};
console.log(page(books));

let commands = [
  {
    id: "1",
    cost: 1000,
  },
  {
    id: "2",
    cost: 1500,
  },
  {
    id: "3",
    cost: 5000,
  },
  {
    id: "4",
    cost: 9000,
  },
  {
    id: "5",
    cost: 1400,
  },
];

const totalComkments = function (com) {
  const Tot = com.reduce((acc, curr) => acc + curr.cost, 0);
  return Tot;
};
console.log(totalComkments(commands));
