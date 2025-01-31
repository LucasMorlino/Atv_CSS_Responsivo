$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000', { 
        placeholder: 'EX: (00) 12345-6789'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            tenisInteresse: {
                required: false,
            },
        },
        messages: {
            nome: "Por favor, insira seu nome!",
            telefone: "Por favor, insira seu telefone!",
            email: "Por favor, insira seu email!"
        }, 
        submitHandler: function(form){
            alert(`Sua compra foi um sucesso!`)
            form.reset();
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos)
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos invalidos.`)
            }
        }
    })

    $('.listaProdutos button').click(function(){
        const destino = $('#contato');

        const nomeProduto = $(this).parent().find('h3').text();

        $('#tenis-interesse').val(nomeProduto);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

})