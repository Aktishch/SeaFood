const init = () => {

	const header = document.querySelector('.-header-')

	let prevScrollpos = window.pageYOffset

	const scrollHeader = () => {

		let headerHeight = header.clientHeight

		prevScrollpos > headerHeight ? header.classList.add('header--top') : header.classList.remove('header--top')

	}

	document.addEventListener('scroll', scrollHeader)

}

export default { init }