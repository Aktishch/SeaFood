import chart from './chart';

const outNum = (elem, time, step) => {

	const items = document.querySelectorAll(`.${elem}`)

	items.forEach(item => {

		if (item) {

			const timer = Math.round(time / (Number(item.dataset.number) / step))

			let number = 0

			const interval = setInterval(() => {

				number = number + step

				if (number == Number(item.dataset.number) || number > Number(item.dataset.number)) {

					clearInterval(interval)

					item.innerHTML = String(item.dataset.number)

				} else {

					item.innerHTML = String(number.toFixed(2))

				}

			}, timer)

		}

	})

}

const getProgress = (elem) => {

	const progressLines = document.querySelectorAll(`.${elem}`)

	progressLines.forEach(line => {

		line.style.width = `${line.dataset.percent}%`

	})

}

const scrollToPercent = () => {

	const block = document.querySelector('.-visitors-')

	if (block) {

		const blockTop = block.getBoundingClientRect().top

		if (screen.height >= blockTop) {

			outNum('-number-', 2000, 0.2)
			getProgress('-progress-line-')
			chart.init()

			document.removeEventListener('scroll', scrollToPercent)

		}

	}

}

const init = () => {

	document.addEventListener('scroll', scrollToPercent)

}

export default { init }