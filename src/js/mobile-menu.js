import scrollBar from './scrollBar'

const init = () => {

    const burger = document.querySelector('.-burger-')
    const close = document.querySelector('.-close-')
    const mobile = document.querySelector('*[data-mobile]')

    const openModal = () => {

        scrollBar.destroy()
        burger.classList.add('pointer-none')
        mobile.classList.add('mobile--show')

    }

    const closeModal = () => {

        scrollBar.init()
        burger.classList.remove('pointer-none')
        mobile.classList.remove('mobile--show')

    }

    burger.addEventListener('click', openModal)
    close.addEventListener('click', closeModal)

    document.addEventListener('click', (event) => {

        if (!event.target.hasAttribute('data-mobile') && !event.target.closest('[data-mobile]') && !event.target.closest('.-burger-')) closeModal()


    })

}

export default { init }