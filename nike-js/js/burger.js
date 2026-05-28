
  const burger = document.querySelector(".burger")
  const menu = document.querySelector(".header__menu")
  const body = document.querySelector("body")


  burger.addEventListener('click', (e) => {
    e.stopPropagation();

    burger.classList.toggle('burger--open');
    menu.classList.toggle('header__menu--open');
    body.classList.toggle("page__body--no-scroll")
  });

  menu.addEventListener('click', (e) => {
    const burgerNavLink = e.target.closest('.menu__link')

    if (burgerNavLink) {
      menu.classList.remove("header__menu--open")
      burger.classList.remove("burger--open")
      body.classList.remove("page__body--no-scroll")
    }
  })

  body.addEventListener('click', closeBurger)

  function closeBurger(e) {
    const target = e.target;
    
    if (!target.classList.contains('menu')) {
      menu.classList.remove("header__menu--open")
      burger.classList.remove("burger--open")
      body.classList.remove("page__body--no-scroll")
    }
  }


