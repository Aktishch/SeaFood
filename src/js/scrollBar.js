const init = () => {

    const html = document.querySelector('html')

    html.classList.remove('overflow-hidden')
    html.style.marginRight = '0'

}

const destroy = () => {

    const html = document.querySelector('html')
    const documentWidth = document.documentElement.clientWidth
    const windowWidth = window.innerWidth
    const scrollBarWidth = windowWidth - documentWidth

    html.classList.add('overflow-hidden')
    html.style.marginRight = `${scrollBarWidth}px`

}

export default { init, destroy }