//exo 1
//items 1
let li = document.querySelectorAll("li");
let body = document.querySelector("body");
for (let i = 0; i < li.length; i = i + 1) {
  li[i].textContent = i + " " + li[i].innerText;
}
// paragraph  2
let para = [];
for (let i = 0; i < 10; i++) {
  para[i] = document.createElement("p");
  para[i].textContent = "paragraph" + " " + i;
  body.append(para[i]);
}
// color generator  3
var rgb = "0123456789ABCDEF";
var hash = "#";
var gettd = document.querySelectorAll("td");
function color(rgb, hash) {
  for (var i = 0; i < 6; i++) {
    hash += rgb[Math.floor(Math.random() * 16)];
  }
  return hash;
}
for (let i = 0; i < gettd.length; i = i + 1) {
  gettd[i].style.backgroundColor = color(rgb, hash);
}

//  4

for (let i = 0; i < li.length; i = i + 1) {
  if (i % 2 !== 0) {
    li[i].style.display = "none";
  }
}

//  5

let arr = ["Pomme", "Banane", "Orange"];
let div = [];
for (let i = 0; i < arr.length; i++) {
  div.push(document.createElement("li"));
  div[i].innerText = `${arr[i]}` + " ";
  div[i].style.listStyle = "circle";
  body.append(div[i]);
}

console.log(div);

// exo 2

// 1
let divs = document.querySelectorAll("div");
for (let i = 0; i < divs.length; i++) {
  divs[i].append((document.createElement("p").textContent = " Child added"));
}

// 2

// let ul = document.querySelector("ul");

// let childrenUl = ul.children;
// for (let i = 0; i < childrenUl.length; i++) {
//   childrenUl[i].style.display = "none";
// }

// 3
let node = document.querySelector("span");
while (node.parentElement && node.parentElement.tagName !== "HTML") {
  node = node.parentElement;
  console.log(node.tagName);
}

//4

let swap = document.getElementById("swap");
let parent = swap.parentNode;
parent.replaceChildren("section", "div");
