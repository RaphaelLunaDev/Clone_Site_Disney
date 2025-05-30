document.addEventListener('DOMContentLoaded', function(){ //evento de ira funcionar quando carregar o documento
    const buttons = document.querySelectorAll('[data-tab-button]') //para selecionar atributos é usado os colchetes "[]"

    //faq
    const questions = document.querySelectorAll('[data-faq-question]')

    //funçao para o header aparecer asasim que passar do hero
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;     //aqui ele ira ver a altura do hero para saber quando a rolagem passou

    window.addEventListener('scroll', function() {   //evento de scroll
        const posiçãoAtual = window.scrollY;      //aqui mostra o eixo do scroll que é Y (verticaL)

        //aqui vai fazer tudo funcionar
        if (posiçãoAtual < alturaHero) {
            ocutaElementosDoHeader();
        }                                   //Muito auto-explicativo e extremamente foda         
        else {
            exibeElementosDoHeader();
        }
    })

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);    //função de adicionar a classe na aba para troca-la
            escondeTodasAbas()
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo()
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    //faq 

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})
    //faq
function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe)    //efeito de toggle no elemento pai do 'faq__questions__item--is-open' (no caso o 'faq__questions__list')
}
    // função de adicionar a classe ao header (vai esconder tudo)   (muito foda)
    function ocutaElementosDoHeader() {
        const header = document.querySelector('header')
        header.classList.add('header--is-hidden')
    }
    
    //função de remover a classe ao header (muito foda tambem)
    function exibeElementosDoHeader() {
    const header = document.querySelector('header')
    header.classList.remove('header--is-hidden')
    }

//botoes do começo
function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');  //função de remover a classe do botao para ele nao ficar com a borda
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]'); //para selecionar atributos é usado os colchetes "[]"

    for (let i = 0; i < tabsContainer.length; i++ ) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}