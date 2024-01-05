const acordeonTrigger = document.querySelectorAll('.arcodeon .trigger')

acordeonTrigger.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const arcodeon = trigger.parentElement
        const isOpen = arcodeon.classList.contains('open')

        if (isOpen) {
            arcodeon.classList.remove('open')
        } else {
            arcodeon.classList.add('open')
        }
    })
})