// const table = document.getElementById('table')

const data = JSON.parse(localStorage.getItem('Personal Details'))

data.map(item => {
  const row = document.createElement('tr')
  row.className = 'row'
  row.innerHTML += `
  <td>item.first</td>
  <td>item.last</td>
  <td>item.email</td>
  `
})

table.appendChild(row)