document.addEventListener('DOMContentLoaded', function(){ //evento de ira funcionar quando carregar o documento
    const buttons = document.querySelectorAll('[data-tab-button]') //para selecionar atributos é usado os colchetes "[]"

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
})

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