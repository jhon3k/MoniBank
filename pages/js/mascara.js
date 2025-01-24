const mask = document.querySelector("#cpf")

mask.addEventListener('keypress', () => {
    let masklength = mask.value.length

    if (masklength === 3 || masklength === 7) {
        mask.value += '.'
    }else if (masklength === 11) {
        mask.value += '-'
    }
    var inpedirLetra = va.value.replace(/\D/g, '')

    va.value = inpedirLetra
})
