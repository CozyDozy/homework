
const buttonOpen = document.querySelector('.btn-open')
const buttonClose = document.querySelector('.modal__close-btn')
const modal = document.querySelector('.modal')
const modalWindow = document.querySelector('.modal__window')
const body = document.body

// Самостоятельная работа
/*
buttonOpen.addEventListener('click', () => {
    modal.style.display = 'flex'
})
buttonClose.addEventListener('click', () => {
    modal.style.display = 'none'
})
modal.addEventListener('click', (event) => {
    console.log(event)
    if (event.target === event.currentTarget) {
        modal.style.display = 'none'
    } 
})
*/

// По видео
const openModal =() => {
     modal.classList.add('modal--open')
     body.classList.add('body--fixed')
}
const closeModal = () => {
    modal.classList.remove('modal--open')
    body.classList.remove('body--fixed')
}

buttonOpen.addEventListener('click', openModal)

modal.addEventListener('click', event => {
     const target = event.target 
    if (target && target.classList.contains('modal') || buttonClose) {
     closeModal()
    }
})

document.addEventListener('keydown', event => {
    if(event.code ==='Escape' && modal.classList.contains('modal--open')) {
        closeModal()
    }
})
