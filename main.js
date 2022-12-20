

$(document).ready(function () {
    $('form').on('submit', function(e) {
        e.preventDefault();

        const conteudo = $('#nomeTarefa').val();
        if (conteudo == ' ') {
            alert('Preencha o campo para prosseguir!')
        } else {
            const novoItem = $(`<li>${conteudo}</li>`);
            $(novoItem).appendTo('ul');
            $('#nomeTarefa').val('');
        }
    })
    
    $('li').on('click', function() {
        $(this).addClass('decoracao');
    });
})
