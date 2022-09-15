
console.log('mobutu')
// const data = JSON.parse(localStorage.getItem('Personal Details'))


// Display items to the UI
class UI {
  static displaypeople () {
    const people = [
      {
        first: 'Alphonce',
        last: 'Mobutu',
        email: 'alponcemobutu100@gmail.com'
      },
      {
        first: 'Troon',
        last: 'Onyango',
        email: 'johntroon001@gmal.com'
      }
    ]
    people.map(item => UI.addto(item))
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

document.addEventListener('DOMContentLoaded', UI.displaypeople)
