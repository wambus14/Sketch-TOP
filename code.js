function createGrid() {
    if(document.getElementById('units').value > 100){alert("too big"); return}
 let units = document.getElementById("units").value
 grid.innerHTML = ''
for (u=0;u<units;u++){
 for (i=0;i<units;i++){
const newSpan = document.createElement("span")
grid.appendChild(newSpan)
}}
let size = grid.getBoundingClientRect().width / units
document.documentElement.style.setProperty('--grid-size', `${size}px`)
let items = document.querySelectorAll('span')
items.forEach((item) => item.classList.toggle('border'))
}

function toggleBorder(){
const toggle = document.getElementById('borderToggle')
let items = document.querySelectorAll('span')
items.forEach((item) => item.classList.toggle('border'))
toggle.innerText = toggle.innerText=== 'Border' ? "No Border" : 'Border'
}

let units = 20
const grid = document.getElementById("container")
grid.addEventListener('click', function(event)
     {   if (event.target.style.backgroundColor === 'black') {event.target.style.backgroundColor = 'white'; return}
         if(event.target.style.backgroundColor === 'white' || 'grey'){event.target.style.backgroundColor = 'black'}
    })
for (u=0;u<units;u++){
 for (i=0;i<units;i++){
const newSpan = document.createElement("span")
grid.appendChild(newSpan)
}}
let size = grid.getBoundingClientRect().width / units
document.documentElement.style.setProperty('--grid-size', `${size}px`)

let items = document.querySelectorAll('span')
items.forEach((item) => item.classList.toggle('border'))
