const init = () => {

	const header = document.querySelector('.-header-')

	let prevScrollpos = window.pageYOffset

	const scrollHeader = () => {

		let currentScrollPos = window.pageYOffset
		let headerHeight = header.clientHeight

		prevScrollpos > currentScrollPos ? header.style.setProperty('--top', '0') : header.style.setProperty('--top', `-${headerHeight}px`)

		prevScrollpos = currentScrollPos

	}

	document.addEventListener('scroll', scrollHeader)

}

export default { init }