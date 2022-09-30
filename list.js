
console.log('mobutu')
// const data = JSON.parse(localStorage.getItem('Personal Details'))

let people = []




// Person class
class Person {
  constructor(first,last, email) {
    this.first = first
    this.last = last
    this.email = email
  }
}


// Display items to the UI
class UI {
  static displaypeople () {
    people.forEach(per => UI.addto(per))
  }

  static addto(item) {
    const table = document.getElementById('table')
    const row = document.createElement('tr')
    row.innerHTML = `
      <td>${item.first}</td>
      <td>${item.last}</td>
      <td>${item.email}</td>
    `
    table.appendChild(row)
  }


}

// instatiate person object
const form = document.querySelector('#form')
const wewe = (e) => {
  e.preventDefault()
  const f_name = document.querySelector('#first').value.trim()
  const l_name = document.querySelector('#last').value.trim()
  const email = document.querySelector('#email').value.trim()
  const inst_person = new Person(f_name, l_name, email)
  UI.addto(inst_person)
}
form.addEventListener('submit', wewe)

document.addEventListener('DOMContentLoaded', UI.displaypeople)
