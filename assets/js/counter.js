const firstsCounter = document.querySelectorAll('.counter')
const targetElement = firstsCounter[0]
var isFirstTime = true

window.addEventListener('scroll', verificarElementoNoScroll)

function counterAnimation() {
	const counters = document.querySelectorAll('.counter')

	counters.forEach((counter) => {
		counter.innerText = '0'

		const updateCounter = () => {
			const target = counter.getAttribute('data-target')
			const c = +counter.innerText

			var increment = target / 10

			// console.log(increment)

			if (c < target) {
				counter.innerText = `${Math.ceil(c + increment)}`

				setTimeout(updateCounter, 300)
			}
		}

		console.log('Try')
		updateCounter()
	})
}

function verificarElementoNoScroll() {
	const posicaoElemento = targetElement.getBoundingClientRect()

	if (posicaoElemento.top < window.innerHeight) {
		if (isFirstTime) {
			counterAnimation()
		}

		isFirstTime = false
	}
}
