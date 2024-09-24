console.log('Olá mundo!');
// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);

novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';

const h1 = document.createElement('h1');
    h1.innerText = 'Minijogo: Adivinhe o Número!';
    document.body.appendChild(h1);

    const pIntro = document.createElement('p');
    pIntro.innerText = 'Estou pensando em um número entre 1 e 100.';
    document.body.appendChild(pIntro);

    const input = document.createElement('input');
    input.type = 'number';
    input.id = 'palpite';
    input.placeholder = 'Digite seu palpite';
    document.body.appendChild(input);

    const button = document.createElement('button');
    button.innerText = 'Enviar Palpite';
    document.body.appendChild(button);

    const resultado = document.createElement('p');
    document.body.appendChild(resultado);

    // Gerar um número aleatório entre 1 e 100
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;

    const enviarPalpite = () => {
        const palpite = Number(input.value);
        tentativas++;
        
        if (palpite < 1 || palpite > 100) {
            resultado.innerText = "Por favor, escolha um número entre 1 e 100.";
        } else if (palpite < numeroAleatorio) {
            resultado.innerText = "Muito baixo! Tente novamente.";
        } else if (palpite > numeroAleatorio) {
            resultado.innerText = "Muito alto! Tente novamente.";
        } else {
            resultado.innerText = `Parabéns! Você adivinhou o número ${numeroAleatorio} em ${tentativas} tentativas!`;
        }
    };

button.addEventListener('click', enviarPalpite);