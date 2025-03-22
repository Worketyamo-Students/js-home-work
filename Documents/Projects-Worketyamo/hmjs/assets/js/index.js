let li = document.querySelectorAll("li");
let body = document.querySelector("body");
for (let i = 0; i < li.length; i = i + 1) {
  li[i].textContent = i + " " + li[i].innerText;
}
let para = [];
for (let i = 0; i < 10; i++) {
  para[i] = document.createElement("p");
  para[i].textContent = "paragraph" + " " + i;
  body.append(para[i]);
}

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
