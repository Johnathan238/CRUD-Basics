let form = document.getElementById("form")
let input = document.getElementById("input")
let msg = document.getElementById("msg")

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
  input.value.push(data)
}