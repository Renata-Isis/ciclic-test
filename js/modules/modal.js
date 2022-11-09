export default function initModal() {
    let nome = document.querySelector("input[name='nome']");
    let mensalidade = document.querySelector("input[name='mensalidade']");
    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const botaoFechar = document.querySelector('[data-modal="fechar"]');
    const simularNovamente = document.querySelector('[data-modal="simular-novamente"]');
    const containerModal = document.querySelector('[data-modal="container"]');
    
    if(botaoAbrir && botaoFechar && containerModal) {
      
      function abrirModal() {
        containerModal.classList.add('ativo');
      }

      function fecharModal() {
        containerModal.classList.remove('ativo');
        nome.value = '';
        mensalidade.value = '';
      }

      function cliqueForaModal(event) {
        if(event.target === this) {
            fecharModal(event);
        }
      }
    
      botaoAbrir.addEventListener('click', abrirModal);
      botaoFechar.addEventListener('click', fecharModal);
      simularNovamente.addEventListener('click', fecharModal);
      containerModal.addEventListener('click', cliqueForaModal);
    }
  }