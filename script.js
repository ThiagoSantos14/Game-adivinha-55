const input = document.querySelector('.input');
const textInfo = document.querySelector('.text-info');
const btnEnviar = document.querySelector('.btn-enviar');

btnEnviar.addEventListener('click', function(event) {
    event.preventDefault();

//Armazenando o valor de input na variavel inputValue
    const inputValue = input.value;
    
    const array = [10, 50, 100];

    if(array.includes(Number(inputValue))) {
        textInfo.innerHTML = `O número que estou pensando é ${inputValue} parabens`;
        textInfo.classList = 'text-info';
    } else {
        textInfo.innerHTML = `O número que estou pensando não é ${inputValue} tente novamente`;
        textInfo.classList = 'text-info';
    }
});