const form = document.getElementById("form")
const table = document.getElementById('imp')
let Array1 = []
const data = JSON.parse(localStorage.getItem('Personal Details'))


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


const dispalydata = () => {
  const row = document.createElement('div')
  row.className = 'row'
  data.map(item => {
    row.innerHTML += `
    <p>first</p>
    <p>second</p>
    <p>lst</p>
  `
  // table.appendChild(row)
})
table.appendChild(row)
}

dispalydata()
