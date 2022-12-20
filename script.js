const form = document.getElementById('form-number')
const numberA = document.getElementById('numberA')
const numberB = document.getElementById('numberB')
const containerResultado = document.querySelector('.mensagemResultado')

function validarNumero(numeroValido) {
    numberA < numberB
    return numeroValido
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = `Como o número <b>${numberA.value}</b> é menor que o número <b>${numberB.value}</b> o seu formulário é valido!`
    const mensagemErro = '<b>ERRO:</b> Como o primeiro número inserido é maior ou igual ao segundo número inserido o seu formulário é inválido!'

    formEValido = numberA.value < numberB.value
    if (formEValido == true) {
        containerResultado.innerHTML = mensagemSucesso
        containerResultado.style.display = 'block'
        containerResultado.style.color = 'green'

        numberA.value = '';
        numberB.value = '';

    } else {
        containerResultado.innerHTML = mensagemErro
        containerResultado.style.display = 'green'
        containerResultado.style.color = 'red'
    }
})