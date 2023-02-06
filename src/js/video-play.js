const init = () => {

    const video = document.querySelector('.-video-')

    if (!video) return

    video.play()

}

export default { init }