//const myObserver = new IntersectionObserver((entries) => {
//    entries.forEach((entry) => {
//        if (entry.isIntersecting) {
//            entry.target.classList.add('show')
//        } else {
//            entry.target.classList.remove('show')
//        }
//    })
//})

//const elements = document.querySelectorAll('.hidden') //procura todas as classes hidden

//elements.forEach((element) => myObserver.observe(element))

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function checkElementsVisibility() {
    var elements = document.querySelectorAll('#imersao .paragrafo h1, #converter .paragrafo h1');
    elements.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('on-screen');
        }
    });
}

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