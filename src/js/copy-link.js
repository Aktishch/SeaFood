const init = () => {

    document.addEventListener('click', (event) => {

        if (event.target.closest('.-copy-btn-')) {

            const link = event.target.querySelector('.-copy-link-')
            const input = event.target.querySelector('.-copy-value-')

            if (link.classList.contains('materials-info__link--hidden')) link.classList.remove('materials-info__link--hidden')

            setTimeout(() => {

                input.select()
                document.execCommand('copy')

            }, 100)

            setTimeout(() => {

                link.classList.add('materials-info__link--hidden')

            }, 1500)

        }

    })

}

export default { init }