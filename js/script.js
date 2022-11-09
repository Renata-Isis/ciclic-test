const botaoSimular = document.querySelector(".botao-simular");
let nome = document.querySelector("input[name='nome']");
let mensalidade = document.querySelector("input[name='mensalidade']");
let tempoContribuicao = document.querySelector("select[name='tempo-contribuicao']");
let modalInfo = document.querySelector(".modal-info");

async function simularInvestimento() {
    event.preventDefault();
    if(mensalidade.value == '' || nome.value == '') {
       console.log('Preencher campos corretamente para realizar a simulação!');
    } else {
        try {
            let requisicao = await fetch('http://api.mathjs.org/v4/', {
                method: 'POST',
                body: JSON.stringify({
                    expr: `${mensalidade.value} * (((1 + 0.00517) ^ (${tempoContribuicao.value} * 12) - 1) / 0.00517)`
                })
            });
        
            let reqJson = await requisicao.json();
            modalInfo.innerHTML = 
            `Olá ${nome.value}, juntando ${parseFloat(mensalidade.value).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} todo mês, 
            você terá ${parseFloat(reqJson.result).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
            em ${tempoContribuicao.value} ano(s).`
        }
        catch(error) {
            console.log(error);
             
        }
    }
   
}


botaoSimular.addEventListener("click", simularInvestimento);

import initModal from './modules/modal.js';

initModal();