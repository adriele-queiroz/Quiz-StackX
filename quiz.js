document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    // Captura das respostas
    const q1 = document.getElementById('q1').value.trim();
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = parseInt(document.getElementById('q3').value);
    const q4 = document.getElementById('q4').value;
    const q5 = document.getElementById('q5').value.trim();

    // Validação das respostas
    if (q1 === '' || !q2 || isNaN(q3) || q4 === '' || q5 === '') {
        alert('Por favor, responda a todas as perguntas.');
        return;
    }

    // Processamento das respostas e determinação do resultado
    let score = 0;

    // Verifica a resposta da pergunta 1
    if (q1.toLowerCase() === 'brasília') {
        score++;
    }

    // Verifica a resposta da pergunta 2
    if (q2.value === 'azul') {
        score++;
    }

    // Verifica a resposta da pergunta 3
    if (q3 === 7) {
        score++;
    }

    // Verifica a resposta da pergunta 4
    if (q4 === 'júpiter') {
        score++;
    }

    // Verifica a resposta da pergunta 5
    if (q5.toLowerCase() === 'tóquio') {
        score++;
    }

    // Exibe o resultado
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Você acertou ${score} de 5 perguntas.</p>`;
});

document.getElementById('retryButton').addEventListener('click', function() {
    // Limpa as respostas e o resultado
    document.getElementById('quizForm').reset();
    document.getElementById('result').innerHTML = '';
});
