let form = document.getElementById("form")
let input = document.getElementById("input")
let msg = document.getElementById("msg")
let posts = document.getElementById("posts")


form.addEventListener("submit", (e) => {
  e.preventDefault()
  console.log('button clicked');
  formValidation()
})

let formValidation = () => {
  if (input.value === "") {
    console.log("Error");
    msg.innerHTML = "Post Can't be blank"
  } else {
    console.log("Succes");
    msg.innerHTML = ""
    acceptData()
  }
}

let data = {}

let acceptData = () => {
  data["text"] = input.value
  createPost()
  console.log(data);
}

let createPost = () => {
  posts.innerHTML += `
  <div>
  <p>${data.text}</p>
  <span class="options">
    <i onClick="editPost(this)" class="fas fa-edit"></i>
    <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
  </span>
</div>` 
  input.value = ""
}