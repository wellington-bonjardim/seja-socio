const btn = document.querySelector('#btn')
const principal = document.querySelector('#principal')
const vantagens = document.querySelector('#vantagens')

btn.addEventListener('click', () => {
    principal.classList.toggle('show')
    vantagens.classList.toggle('show')
})