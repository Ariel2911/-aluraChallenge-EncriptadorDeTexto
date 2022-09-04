const inputText = document.getElementById('input-text');
const form = document.getElementById('form')
const btnEncrypt = document.getElementById('btn-encrypt');
const btnDecrypt = document.getElementById('btn-decrypt');
const containerError = document.getElementById('container-error');
const containerMessage =document.getElementById('container-message');


form.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log(e.submitter.id, inputText.value);
  
  inputText.value = '';

});
