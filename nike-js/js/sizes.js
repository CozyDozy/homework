const productSizesButtons = document.querySelectorAll(".product__sizes-button");
const x = document.querySelector('.product__sizes-button--active')


const local = localStorage.getItem('activeButton');
if (local) {
    productSizesButtons.forEach(btn => {
        btn.classList.toggle('product__sizes-button--active', btn.textContent.trim() === local);
    });
}


productSizesButtons.forEach(button => {
  button.addEventListener('click', () => {

    productSizesButtons.forEach(btn => {
      btn.classList.remove("product__sizes-button--active")
    })

    button.classList.add("product__sizes-button--active")

    localStorage.setItem('activeButton', button.textContent.trim())
  })
})

