let form = document.querySelector("form");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

const savetodo = (e) => {
  e.preventDefault();
  if (input.value === "") {
    alert("Please Enter a Todo");
  } else {
    let li = document.createElement("li");
    li.innerText = input.value;
    li.className = "list-item";
    let dltbtn = document.createElement("button");
    dltbtn.className = "dbtn";
    dltbtn.innerText = "del";
    li.appendChild(dltbtn);
    ul.appendChild(li);
    form.reset();
  }
};


const remove = (e) => {
  if (e.target.className.includes("dbtn")) {
    e.target.parentElement.remove();
  }
};

ul.addEventListener("click", remove);
form.addEventListener("submit", savetodo);
