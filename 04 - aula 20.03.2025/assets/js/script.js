
let form = document.getElementById('formTarefa');
let input = document.getElementById('inputTarefa');
let lista = document.getElementById('listaTarefas');

form.addEventListener('submit', (event) => {

    event.preventDefault();

    const textoTarefa = input.value.trim();

    if (textoTarefa != '') {
        const li = document.createElement('li');
        li.textContent = textoTarefa;

        const botaoRemover = document.createElement('button');

        botaoRemover.textContent = 'X';
        botaoRemover.classList.add('remover');

        botaoRemover.addEventListener('click', () => {
            lista.removeChild(li);
        });

        li.appendChild(botaoRemover);

        lista.appendChild(li);

        input.value = '';
    }
});
