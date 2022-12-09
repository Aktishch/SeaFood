const init = () => {

    const search = document.querySelector('.-search-')

    if (search) {

        const input = search.querySelector('.-search-input-')
        const close = search.querySelector('.-search-close-')

        const openContent = () => {

            search.classList.add('news-search--open')

        }

        const closeContent = () => {

            search.classList.remove('news-search--open')

        }


        const inputReset = () => {

            input.value = ''

        }

        input.addEventListener('focus', openContent)
        close.addEventListener('click', inputReset)

        document.addEventListener('click', (event) => {

            if (!event.target.closest('.-search-')) closeContent()

        })

    }

}

export default { init }