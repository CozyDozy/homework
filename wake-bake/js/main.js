

(
    function () {

        //Бургер
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

       // Модалка
        
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
    // Табы

    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {
        const tabControl = e.target.closest('.tab-controls__link')

        if(!tabControl) return
        e.preventDefault()
        if(tabControl.classList.contains('tab-controls__link--active')) return

        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tab-content--show')

        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active')
        }

        if (activeContent) {
            activeContent.classList.remove('tab-content--show')
        }

        tabContent.classList.add('tab-content--show')
        tabControl.classList.add('tab-controls__link--active')


    }

    // Аккордеон

    const accordionLists = document.querySelectorAll('.accordion-list')

    accordionLists.forEach(el => {
        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpendItem = accordionList.querySelector('.accordion-list__item--open')
            const accordionOpendContent = accordionList.querySelector('.accordion-list__item--open .accordion-list__content')
           
            const accordionControl = e.target.closest('.accordion-list__control')
            if(!accordionControl) return
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if(accordionOpendItem && accordionItem != accordionOpendItem) {
                accordionOpendItem.classList.remove('accordion-list__item--open');
                accordionOpendContent.style.maxHeight = null;
            }
            
            accordionItem.classList.toggle('accordion-list__item--open');

            if(accordionItem.classList.contains('accordion-list__item--open')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }
        })
       
    })


    }
)()

// document.addEventListener('click', function(event){
//      console.log(event.target); 
//     });


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
