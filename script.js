const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:"Qual é o nado mais rápido?",
        alternativas: [
            {
                texto:"Nado livre, também conhecido como crawl.",
                afirmação:"Repota coreta",
                pontos:1
            },
            {
                texto:"Nado Costas",
                afirmação:"Resposta errada",
                pontos:0
            }
            
        ]

    },
    {
        enunciado:"Para que serve o nado?",
        alternativas: [
            {
                texto:"Liberação de tensões, resistência muscular, diminuição do estresse, do colesterol e da pressão arterial, melhora a circulação sanguínea.",
                afirmação:"Repota coreta",
                pontos:1
            },
            {
                texto:"É considerada um dos exercícios mais dificeis de natação",
                afirmação:"Resposta errada",
                pontos:0
            }
            
        ]

    },
    {
        enunciado:"Quem criou o nado artístico?",
        alternativas: [
            {
                texto:"A australiana Annette Kellerman foi a responsável pelos primeiros passos do nado artístico",
                afirmação:"Repota coreta",
                pontos:1
            },
            {
                texto:"John Trudgen",
                afirmação:"Resposta errada",
                pontos:0
            }
            
        ]

    },
    {
        enunciado:"Em que ano a natação começou?",
        alternativas: [
            {
                texto:"Foi em 1696",
                afirmação:"Repota coreta",
                pontos:1
            },
            {
                texto:"1887",
                afirmação:"Resposta errada",
                pontos:0
            }
            
        ]

    },
    {
        enunciado:"Qual nado surgiu primeiro?",
        alternativas: [
            {
                texto:"Nado peito",
                afirmação:"Repota coreta",
                pontos:1
            },
            {
                texto:"Nado borboleta",
                afirmação:"Resposta errada",
                pontos:0
            }
            
        ]

    }
]

let atual=0;
let perguntaAtual;
let historiaFinal="";
let pontos=0;

function mostraPergunta(){
    perguntaAtual=perguntas[atual];
    caixaPerguntas.textContent=perguntaAtual.enunciado;
    caixaAlternativas.textContent="";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(alternativa) { 
    const afirmacao = alternativa.afirmacao; 
    historiaFinal = afirmacao; 
    pontos += alternativa.pontos;  
    atual++; 

    if (atual < perguntas.length) { 
        mostraPergunta();  
    } else {
        exibeResultado();  
    }
}

function exibeResultado() { 
    caixaPerguntas.textContent = "Fim do Quiz!"; 
    caixaAlternativas.textContent = "";  
    textoResultado.textContent = `Sua pontuação final é: ${pontos} pontos.`;  

    if (pontos === perguntas.length) {
        textoResultado.textContent += " Parabéns! Você acertou todas as questões!"; 
    } else if (pontos > perguntas.length / 2) {
        textoResultado.textContent += " Bom trabalho, você teve um desempenho legal!"; 
    } else {
        textoResultado.textContent += " Você pode melhorar! Tente novamente!"; 
    }
}

mostraPergunta();
