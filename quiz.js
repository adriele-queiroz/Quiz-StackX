document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Captura das respostas
    const q1 = document.getElementById('q1').value.trim().toLowerCase(); // Converter para minúsculas
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = parseInt(document.getElementById('q3').value);
    const q4 = document.getElementById('q4').value.trim().toLowerCase(); // Converter para minúsculas
    const q5 = document.getElementById('q5').value.trim().toLowerCase(); // Converter para minúsculas

    // Validação das respostas
    if (q1 === '' || !q2 || isNaN(q3) || q4 === '' || q5 === '') {
        alert('Por favor, responda a todas as perguntas.');
        return;
    }

    // Processamento das respostas e determinação do resultado
    let score = 0;
    const incorrectAnswers = []; // Array para armazenar as perguntas com respostas incorretas

    // Verifica a resposta da pergunta 1
    if (q1 === 'brasília' || q1 === 'brasilia') { // Comparação com ou sem acento
        score++;
    } else {
        incorrectAnswers.push(1); // Adiciona o número da pergunta ao array de respostas incorretas
    }

    // Verifica a resposta da pergunta 2
    if (q2.value === 'azul') {
        score++;
    } else {
        incorrectAnswers.push(2);
    }

    // Verifica a resposta da pergunta 3
    if (q3 === 7) {
        score++;
    } else {
        incorrectAnswers.push(3);
    }

    // Verifica a resposta da pergunta 4
    if (q4 === 'júpiter' || q4 === 'jupiter') { // Comparação com ou sem acento
        score++;
    } else {
        incorrectAnswers.push(4);
    }

    // Verifica a resposta da pergunta 5
    if (q5 === 'tóquio' || q5 === 'toquio') { // Comparação com ou sem acento
        score++;
    } else {
        incorrectAnswers.push(5);
    }

    // Exibe o resultado
    const resultDiv = document.getElementById('result');
    if (score === 5) {
        resultDiv.innerHTML = '<p>Parabéns! Você acertou todas as perguntas!</p>';
    } else {
        let message = `<p>Você acertou ${score} de 5 perguntas.</p>`;
        if (incorrectAnswers.length > 0) {
            message += '<p>Você errou nas seguintes perguntas:';
            incorrectAnswers.forEach(question => {
                message += ` ${question},`;
            });
            message = message.slice(0, -1); // Remove a vírgula extra
            message += '.</p>';
        }
        resultDiv.innerHTML = message;
    }
});

document.getElementById('retryButton').addEventListener('click', function() {
    // Limpa as respostas e o resultado
    document.getElementById('quizForm').reset();
    document.getElementById('result').innerHTML = '';
});