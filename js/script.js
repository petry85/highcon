document.addEventListener('DOMContentLoaded', function() {
    checkElementsVisibility();
    window.addEventListener('scroll', checkElementsVisibility);
    window.addEventListener('resize', checkElementsVisibility);
});


//FAZER COM QUE DESCRIÇÃO MUDE CONFORME CLICK
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona um evento de clique a todas as imagens
    var imagens = document.querySelectorAll('.imagem');
    imagens.forEach(function(img) {
        img.addEventListener('click', function() {
            // Remove a classe 'ativo' de todas as imagens
            imagens.forEach(function(imagem) {
                imagem.classList.remove('ativo');
            });
            // Adiciona a classe 'ativo' à imagem clicada
            this.classList.add('ativo');
            // Obtém o valor do atributo data-persona
            var persona = this.getAttribute('data-persona');
            // Oculta todos os parágrafos de descrição
            var paragrafos = document.querySelectorAll('#descricao p');
            paragrafos.forEach(function(paragrafo) {
                paragrafo.style.display = 'none';
            });
            // Exibe o parágrafo correspondente à persona clicada
            var paragrafo = document.querySelector('#descricao .' + persona);
            if (paragrafo) {
                paragrafo.style.display = 'block';
            }
        });
    });
});