const inputText = document.getElementById('input-text');
const form = document.getElementById('form')
const btnEncrypt = document.getElementById('btn-encrypt');
const btnDecrypt = document.getElementById('btn-decrypt');
const containerError = document.getElementById('container-error');
const containerMessage = document.getElementById('container-message');
const messageParagraph = document.getElementById('message__paragraph');


form.addEventListener('submit', (e) => {
  e.preventDefault();

  if(inputText.value.trim() !== '') {

    containerError.style.display = 'none';
    
    messageParagraph.innerText = inputText.value;
    
    containerMessage.style.display = 'flex';

  }else {
    
    containerError.style.display = 'block';

    containerMessage.style.display = 'none';

  };

  inputText.value = '';

});
