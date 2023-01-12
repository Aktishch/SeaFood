const init = () => {

    const panel = document.querySelector('#bx-panel')

    if (panel) {

        const header = document.querySelector('.-header-')

        header.style.top = `${panel.offsetHeight}`

    }

}

export default { init }