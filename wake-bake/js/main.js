

(
    function () {
        document.addEventListener('click', burgerInit)

        function burgerInit(e) {

            const burgerIcon = e.target.closest('.burger-icon')
            const burgerNavLink = e.target.closest('.nav__link')

            // console.log(document.documentElement.clientWidth)
            if (!burgerIcon && !burgerNavLink) return

          if(document.documentElement.clientWidth >900)  return

            if (!document.body.classList.contains('body--opened-menu')) {
                document.body.classList.add('body--opened-menu')
            } else {
                document.body.classList.remove('body--opened-menu')
            }
        }

       // modal
        
    const modalButton = document.querySelector('.about__img-button')
    const buttonClose = document.querySelector('.modal__cancel')
    const modal = document.querySelector('.modal')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()
        const target = e.target
        if(target.classList.contains('modal') || target.classList.contains('modal__cancel')) {
            document.body.classList.remove('body--opened-modal')
        }
    }
    }
)()
document.addEventListener('click', function(event){
     console.log(event.target); 
    });


// modal

// const buttonOpen = document.querySelector('.about__img-button')
// const buttonClose = document.querySelector('.modal__cancel')
// const modal = document.querySelector('.modal')
// //открытие
// buttonOpen.addEventListener('click' , () => {
//     document.body.classList.add('body--opened-modal')
// })
// //закрытие
// const closeModal = () => {
//     document.body.classList.remove('body--opened-modal')
// }

// modal.addEventListener('click', event => {
//     target = event.target;
//     if( target && target.classList.contains('modal') || target.classList.contains('modal__cancel')) {
//         closeModal()
       
//     }
// })
