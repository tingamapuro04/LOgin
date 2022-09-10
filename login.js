const form = document.getElementById("form")
let Array1 = []
const eventHandler = (e) => {
  e.preventDefault()
  const first = document.getElementById("first").value.trim()
  const last = document.getElementById("last").value.trim()
  const email = document.getElementById("email").value.trim()
  let values = {first, last, email}
  Array1.push(values)
  localStorage.setItem('Personal Details', JSON.stringify(Array1))
}
form.addEventListener("submit", eventHandler)

