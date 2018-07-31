const panels = document.querySelectorAll('.panel')
function toggleOpen() {
	this.classList.toggle('open')
}
function toggleActive(e) {
	if (e.propertyName.includes('flex')) {
		this.classList.toggle('open-active')
	}
}
panels.forEach(panel => panel.addEventListener('click',toggleOpen))
panels.forEach(panel => panel.addEventListener('transitionend',toggleActive))

const manhattanButton = document.querySelector('#manhattan')
manhattanButton.addEventListener('click', e => {
	window.location.href = 'bookManhattan.html'
})

const brooklynButton = document.querySelector('#brooklyn')
brooklynButton.addEventListener('click', e => {
	window.location.href = 'bookBrooklyn.html'
})

const bronxButton = document.querySelector('#bronx')
bronxButton.addEventListener('click', e => {
	window.location.href = 'bookBronx.html'
})

const queensButton = document.querySelector('#queens')
queensButton.addEventListener('click', e => {
	window.location.href = 'bookQueens.html'
})

const statenButton = document.querySelector('#staten')
statenButton.addEventListener('click', e => {
	window.location.href = 'bookStaten.html'
})