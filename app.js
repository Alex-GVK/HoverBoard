const board = document.querySelector('#board')
const colors = ['#fb0808', '#1cfb08', '#08fbfb', '#0820fb', '#d208fb', '#fb0808', '#10fb08', '#d6fb08']
const SQUARES_NUMBER = 700

for (let i = 0; i < SQUARES_NUMBER; i++) {
   const square = document.createElement('div')
   square.classList.add('square')

   square.addEventListener('mouseover', () => setColor(square))
   square.addEventListener('mouseleave', () => removeColor(square))

   board.append(square)
}

function setColor(element) {
   const color = getRandonColor()
   element.style.backgroundColor = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
   element.style.backgroundColor = '#1d1d1d'
   element.style.boxShadow = `0 0 2px #000`
}

function getRandonColor() {
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]    
}

