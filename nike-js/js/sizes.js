const productSizesButtons = document.querySelectorAll(".product__sizes-button");


productSizesButtons.forEach(button => {
  button.addEventListener('click', () => {

    productSizesButtons.forEach(btn => {
      btn.classList.remove("product__sizes-button--active")
    })

    button.classList.add("product__sizes-button--active")
  })
})

