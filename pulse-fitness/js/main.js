

(function () {

    // /Бургер
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        console.log(document.documentElement.clientWidth)

        if (!burgerIcon && !burgerNavLink) return

        if (document.documentElement.clientWidth > 1200) return


        if (!document.body.classList.contains('body--open-menu')) {
            document.body.classList.add('body--open-menu')
        } else {
            document.body.classList.remove('body--open-menu')
        }

    }
    // Свайпер

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.about__pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<button class="' + className + '">' + (index + 1) + "</button>";
            },
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });




    // Табы
    const tabControlsLink = document.querySelectorAll('.tab-controls__link')
    const tabControls = document.querySelector('.tab-controls')
    const tabCoontent = document.querySelectorAll('.tab__content')


    tabControlsLink.forEach(el => {
        el.addEventListener('click', (event) => {
            event.preventDefault();

            console.log(el)

            const tabContentID = el.getAttribute('href');
            const tabContent = document.querySelector(tabContentID)
            console.log(tabContent)

            //Убираем active у всех кнопок и контента в этом блоке
            tabControlsLink.forEach(btn => btn.classList.remove("tab-controls__link--active"))
            tabCoontent.forEach(item => item.classList.remove("tab-content--show"))

            //Добавляем active нажатой кнопке и нужному блоку
            el.classList.add("tab-controls__link--active")
            tabContent.classList.add("tab-content--show")

        })
    })

    // Аккордеон 
    const accordionLists = document.querySelectorAll('.accordion-list')

    accordionLists.forEach(el => {
        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget

            const accordionOpendItem = accordionList.querySelector('.accordion-list__item--active')
            //Меняем контент 
            const accordionOpendContent = accordionList.querySelector('.accordion-list__item--active .accordion-content')


            const accordionControl = e.target.closest('.accordion-list__control')
            if (!accordionControl) return

            e.preventDefault()

            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpendItem && accordionItem != accordionOpendItem) {
                accordionOpendItem.classList.remove('accordion-list__item--active');
                accordionOpendContent.style.maxHeight = null;
            }

            accordionItem.classList.toggle('accordion-list__item--active');

            if (accordionItem.classList.contains('accordion-list__item--active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }
        })
    })






})()