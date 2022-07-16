function toggle() {
    let btn = document.getElementById('btn')
    let principal = document.getElementById('principal')
    let vantagens = document.getElementById('vantagens')

    if(vantagens.classList.contains('show')) {
        vantagens.classList.remove('show')
    } else {
        vantagens.classList.add('show')
        principal.remove()
    }
    btn.addEventListener('click', toggle)
}