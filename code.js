function createGrid() {
   let units = document.getElementById("units").value
    if(units > 100 ){alert("too big"); return}
    if(units <= 0){alert('not valid number'); return}
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
const toggleBorder = document.getElementById('borderToggle')
let items = document.querySelectorAll('span')
items.forEach((item) => item.classList.toggle('border'))
toggleBorder.innerText = toggleBorder.innerText=== 'Border' ? "No Border" : 'Border'
}

function toggleHover(){
    const hoverToggle = document.getElementById('hoverToggle')
let items = document.querySelectorAll('span')
items.forEach((item) => item.classList.toggle('hoveron'))

hoverToggle.innerText = hoverToggle.innerText=== 'Hover Off' ? "Hover On" : 'Hover Off'
}

document.getElementById("units").value = 20
let units = document.getElementById("units").value
const grid = document.getElementById("container")
const unitsInput = document.getElementById('units')

grid.addEventListener('mousedown', function(event){
    event.target.classList.toggle('clicked')
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
