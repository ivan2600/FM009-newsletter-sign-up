const submit = document.querySelector('.submit');
const mail = document.querySelector('.mail');
const alertMsg = document.querySelector('.alert-msg');
const primaryPage = document.querySelector('.primary-page');
const secondaryPage = document.querySelector('.secondary-page');
const spanMail = document.querySelector('.span-mail');

submit.addEventListener('click', (e)=>{

  e.preventDefault();

  mail.classList.remove('active');
  alertMsg.classList.remove('active');

  const pattern =  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  if (mail.value == "") {
    
    mail.classList.add('active');   
    alertMsg.classList.add('active');
  
  } else if (!mail.value.match(pattern)) {
    
    mail.classList.add('active');   
    alertMsg.classList.add('active');
   
  } else {
    
    primaryPage.style.display = "none";
    secondaryPage.style.display = "grid";
    spanMail.innerHTML = mail.value;
    console.log(mail.value);

  }
})