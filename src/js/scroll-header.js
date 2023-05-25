import scrolledPage from './scrolled-page'

const init = () => {

  const header = document.querySelector('.-header-')

  if (!header) return

  let prevOffsetTop = scrolledPage.init().top

  const scrollHeader = () => {

    const currentOffsetTop = scrolledPage.init().top
    const headerHeight = header.offsetHeight

    prevOffsetTop > currentOffsetTop ? header.style.setProperty('--top', '0') : header.style.setProperty('--top', `-${headerHeight}px`)

    prevOffsetTop = currentOffsetTop

  }

  document.addEventListener('scroll', scrollHeader)

}

export default { init }