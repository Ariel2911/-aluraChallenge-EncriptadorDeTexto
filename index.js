const inputText = document.getElementById('input-text');
const form = document.getElementById('form')
const containerError = document.getElementById('container-error');
const containerMessage = document.getElementById('container-message');
const messageParagraph = document.getElementById('message__paragraph');

const btnEncrypt = document.getElementById('btn-encrypt');
const btnDecrypt = document.getElementById('btn-decrypt');

//función para encriptar
const encrypt = (message) => {

  let encryptedMessage = '';

  for(let i=0; i< message.length; i++) {

    let x = '';
    
    switch (message.charAt(i)) {
      case 'a':
        x = 'ai'
        break;
    
      case 'e':
        x = 'enter'
        break;
    
      case 'i':
        x = 'imes'
        break;
    
      case 'o':
        x = 'ober'
        break;
    
      case 'u':
        x = 'ufat'
        break;
    
      default:
        x = message.charAt(i)
        break;
    }

    encryptedMessage += x

  };

  return encryptedMessage
};


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = inputText.value.trim().toLowerCase();

  if(message !== '') {
    
    if(e.submitter.id === 'btn-encrypt') {
      
      messageParagraph.innerText = encrypt(message);
      
    }
   
    containerError.style.display = 'none';
    
    containerMessage.style.display = 'flex';

  }else {
    
    containerError.style.display = 'block';

    containerMessage.style.display = 'none';

  };

  inputText.value = '';

});
