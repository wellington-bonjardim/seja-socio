function toggle() {
    let btn = document.getElementById('btn')
    let vantagens = document.getElementById('vantagens')

    if(vantagens.classList.contains('show')) {
        vantagens.classList.remove('show')
    } else {
        vantagens.classList.add('show')
    }
    btn.addEventListener('click', toggle)
}

