let title = document.querySelector("#title");
let paragraph = document.querySelector("#paragraph");
let imageUrl = document.querySelector("#url");
let postBtn = document.querySelector("#post");
let form = document.querySelector("form");
// let imageTitle = document.querySelector(".imgTitle");
// let paraText = document.querySelector(".text");
// let imageDisplay = document.querySelector(".img")

let userInput = title;
let userUrl =imageUrl;
let userQuote = paragraph;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addPost();
  e.target.reset();
});

function addPost(){

  let bodyElement = document.body;
  let post = document.createElement("div")
  let image =  document.createElement("img");
  let imgTitle =  document.createElement("h1");
  let paraDiv = document.createElement("div");
  let pTag = document.createElement("p");
  let categoryBtn = document.createElement("button");


  post.className= "post";
  image.className= "img";
  imgTitle.className= "imgTitle";
  paraDiv.className = "para";
  pTag.className= "text";
  categoryBtn.className = "category"

  image.src = userUrl.value;
  imgTitle.innerHTML = userInput.value;
  pTag.innerHTML = userQuote.value;
  categoryBtn.innerHTML = "Category"
  bodyElement.appendChild(post);
  post.append(image,imgTitle,paraDiv,categoryBtn);
  paraDiv.appendChild(pTag);
  

  console.log(post,userQuote.value);

}