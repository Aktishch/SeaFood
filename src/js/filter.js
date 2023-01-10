const filtering = (category, elements) => {

    elements.forEach(card => {

        const absence = !card.classList.contains(category)

        if (absence) {

            card.classList.add('d-none')
            card.classList.remove('filter__card--active')

        } else {

            card.classList.remove('d-none')
            card.classList.add('filter__card--active')

        }

    })

}

const init = () => {

    const filter = document.querySelector('.-filter-')

    if (filter) {

        const line = filter.querySelector('.-filter-line-')
        const btns = filter.querySelectorAll('.-filter-item-')
        const cards = filter.querySelectorAll('.-filter-card-')

        if (line) line.style.width = `${btns[0].offsetWidth}px`

        btns.forEach(btn => {

            btn.addEventListener('click', event => {

                const currentBtn = filter.getElementsByClassName('filter__item--active')
                const currentCard = String(event.target.dataset.filter)

                currentBtn[0].className = currentBtn[0].className.replace('filter__item--active', '')
                btn.className += ' filter__item--active'

                const coordinates = {

                    left: event.currentTarget.offsetLeft,
                    width: event.currentTarget.offsetWidth,

                }

                line.style.width = `${coordinates.width}px`
                line.style.left = `${coordinates.left}px`

                filtering(currentCard, cards)

            })

        })

        if (window.top.location.hash.substr(1)) {

            for (const [index, card] of cards.entries()) {

                if (card.querySelector(`#${window.top.location.hash.substr(1)}`)) {

                    const currentBtn = filter.getElementsByClassName('filter__item--active')

                    currentBtn[0].className = currentBtn[0].className.replace('filter__item--active', '')
                    btns[index].classList.add('filter__item--active')

                    line.style.left = `${btns[index].offsetLeft}px`
                    line.style.width = `${btns[index].offsetWidth}px`

                    cards[0].classList.add('d-none')
                    card.classList.remove('d-none')

                }
            }

        }

    }

}

export default { init }