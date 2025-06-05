// Dados do quiz sobre enchentes para o GeoChuva
const quizGeoChuvaData = [
    {
        pergunta: "Qual é a principal causa de enchentes em áreas urbanas?",
        opcoes: [
            "Chuvas intensas e impermeabilização do solo",
            "Terremotos e tsunamis",
            "Erupções vulcânicas",
            "Derretimento de geleiras"
        ],
        resposta: 0
    },
    {
        pergunta: "O que é uma planície de inundação?",
        opcoes: [
            "Uma área que nunca sofre com enchentes",
            "Uma área naturalmente sujeita a inundações periódicas",
            "Um tipo de barragem para conter enchentes",
            "Um sistema artificial de drenagem"
        ],
        resposta: 1
    },
    {
        pergunta: "Qual destas ações NÃO ajuda a prevenir enchentes?",
        opcoes: [
            "Reflorestamento de encostas",
            "Construção de sistemas de drenagem",
            "Descarte de lixo em rios e córregos",
            "Criação de áreas permeáveis nas cidades"
        ],
        resposta: 2
    },
    {
        pergunta: "O que é um piscinão no contexto de prevenção de enchentes?",
        opcoes: [
            "Uma piscina pública para lazer",
            "Um reservatório para captação de água da chuva",
            "Um sistema de tratamento de esgoto",
            "Uma área de preservação ambiental"
        ],
        resposta: 1
    },
    {
        pergunta: "Qual doença tem maior risco de surto durante enchentes?",
        opcoes: [
            "Catapora",
            "Leptospirose",
            "Caxumba",
            "Sarampo"
        ],
        resposta: 1
    },
    {
        pergunta: "O que é um pluviômetro e qual sua importância para o monitoramento de enchentes?",
        opcoes: [
            "Um equipamento que mede a velocidade dos ventos",
            "Um instrumento que mede a quantidade de chuva",
            "Um dispositivo que purifica a água contaminada",
            "Um sistema que controla o nível dos rios"
        ],
        resposta: 1
    },
    {
        pergunta: "Qual destas medidas é mais eficaz para reduzir o impacto de enchentes em áreas urbanas?",
        opcoes: [
            "Construir mais prédios",
            "Aumentar a área pavimentada",
            "Implementar sistemas de alerta precoce",
            "Remover a vegetação das margens dos rios"
        ],
        resposta: 2
    },
    {
        pergunta: "O que é o fenômeno 'ilha de calor urbana' e como ele se relaciona com enchentes?",
        opcoes: [
            "É um fenômeno que reduz as chuvas e previne enchentes",
            "É o aquecimento das áreas urbanas que pode intensificar tempestades e aumentar o risco de enchentes",
            "É uma técnica de construção que evita inundações",
            "É um tipo de barreira contra enchentes"
        ],
        resposta: 1
    },
    {
        pergunta: "Qual é a função das áreas de várzea naturais dos rios?",
        opcoes: [
            "Servir apenas como área de lazer",
            "Funcionar como depósito de resíduos",
            "Absorver o excesso de água durante períodos de cheia",
            "Bloquear o fluxo de água do rio"
        ],
        resposta: 2
    },
    {
        pergunta: "O que deve ser feito imediatamente após receber um alerta de enchente?",
        opcoes: [
            "Ignorar o alerta e continuar as atividades normais",
            "Dirigir-se para áreas mais baixas",
            "Desligar a eletricidade e mover-se para um local mais alto",
            "Abrir todas as janelas da casa"
        ],
        resposta: 2
    }
];


document.addEventListener('DOMContentLoaded', function() {
    const quizContainer = document.querySelector('.quizBox');
    const quizForm = document.getElementById('quizForm');
    const quizPergunta = document.getElementById('quizPergunta');
    const quizOpcoes = document.querySelector('.quizOpcoes');
    const quizFeedback = document.getElementById('quizFeedback');
    
    let perguntaAtual = 0;
    let pontuacao = 0;
    let respostasUsuario = Array(quizGeoChuvaData.length).fill(undefined);
    let quizFinalizado = false;

    function iniciarQuiz() {
        perguntaAtual = 0;
        pontuacao = 0;
        respostasUsuario = Array(quizGeoChuvaData.length).fill(undefined);
        quizFinalizado = false;
        mostrarPergunta();
        
        quizFeedback.innerHTML = '';
        quizFeedback.className = '';
        
        quizForm.style.display = 'block';
    }

    function mostrarPergunta() {
        const perguntaAtualData = quizGeoChuvaData[perguntaAtual];
        
        quizPergunta.innerHTML = `
            <p>${perguntaAtualData.pergunta}</p>
            <span class="contador-perguntas">Pergunta ${perguntaAtual + 1} de ${quizGeoChuvaData.length}</span>
        `;
        
        quizOpcoes.innerHTML = '';
        
        perguntaAtualData.opcoes.forEach((opcao, index) => {
            const opcaoHTML = `
                <label>
                    <input type="radio" name="quizOpcao" value="${index}" ${respostasUsuario[perguntaAtual] === index ? 'checked' : ''} required>
                    ${opcao}
                </label><br>
            `;
            quizOpcoes.innerHTML += opcaoHTML;
        });
        
        const submitBtn = quizForm.querySelector('button[type="submit"]');
        if (perguntaAtual === quizGeoChuvaData.length - 1) {
            submitBtn.textContent = 'Finalizar Quiz';
        } else {
            submitBtn.textContent = 'Próxima Pergunta';
        }
    }

    function processarResposta(event) {
        event.preventDefault();
        
        const opcaoSelecionada = document.querySelector('input[name="quizOpcao"]:checked');
        
        if (!opcaoSelecionada) {
            alert('Por favor, selecione uma opção!');
            return;
        }
        
        const respostaIndex = parseInt(opcaoSelecionada.value);
        respostasUsuario[perguntaAtual] = respostaIndex;
        
        if (respostaIndex === quizGeoChuvaData[perguntaAtual].resposta) {
            pontuacao++;
        }
        
        if (perguntaAtual < quizGeoChuvaData.length - 1) {
            perguntaAtual++;
            mostrarPergunta();
        } else {
            finalizarQuiz();
        }
    }

    function finalizarQuiz() {
        quizFinalizado = true;
        
        const erros = quizGeoChuvaData.length - pontuacao;
        const percentual = Math.round((pontuacao / quizGeoChuvaData.length) * 100);
        
        quizForm.style.display = 'none';
        
        let feedbackMessage = '';
        let feedbackClass = '';
        
        if (percentual >= 90) {
            feedbackMessage = 'Excelente! Você é um especialista em prevenção de enchentes!';
            feedbackClass = 'feedback-excelente';
        } else if (percentual >= 70) {
            feedbackMessage = 'Muito bom! Você tem um bom conhecimento sobre enchentes.';
            feedbackClass = 'feedback-bom';
        } else if (percentual >= 50) {
            feedbackMessage = 'Regular. Você tem conhecimento básico sobre enchentes.';
            feedbackClass = 'feedback-regular';
        } else {
            feedbackMessage = 'Você precisa aprender mais sobre enchentes e como se prevenir.';
            feedbackClass = 'feedback-ruim';
        }
        
        quizFeedback.innerHTML = `
            <div class="resultado-quiz">
                <h3>Resultado do Quiz</h3>
                <div class="resultado-stats">
                    <div class="resultado-item">
                        <span class="resultado-label">Acertos:</span>
                        <span class="resultado-valor acertos">${pontuacao}</span>
                    </div>
                    <div class="resultado-item">
                        <span class="resultado-label">Erros:</span>
                        <span class="resultado-valor erros">${erros}</span>
                    </div>
                    <div class="resultado-item">
                        <span class="resultado-label">Pontuação:</span>
                        <span class="resultado-valor pontuacao">${percentual}%</span>
                    </div>
                </div>
                <p class="${feedbackClass}">${feedbackMessage}</p>
                <button id="reiniciarQuiz" class="btn-reiniciar">Tentar Novamente</button>
            </div>
        `;
        
        document.getElementById('reiniciarQuiz').addEventListener('click', iniciarQuiz);
    }

    quizForm.addEventListener('submit', processarResposta);

    iniciarQuiz();
});
