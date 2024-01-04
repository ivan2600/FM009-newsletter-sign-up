const submit = document.querySelector('.submit');
const mail = document.querySelector('.mail');
const alertMsg = document.querySelector('.alert-msg');
const primaryPage = document.querySelector('.primary-page');
const secondaryPage = document.querySelector('.secondary-page');
const spanMail = document.querySelector('.span-mail');

//Escuchar el evento click en SUBMIT
submit.addEventListener('click', (e)=>{
  //evitar la RECARGA de pantalla en cada CLICK
  e.preventDefault();
  //borrar todas las clases ACTIVE antes de arrancar
  mail.classList.remove('active');
  alertMsg.classList.remove('active');
  //patron de formato EMAIL
  const pattern =  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  //si el valor de MAIL esta VACIO
  if (mail.value == "") {
    //agregar clases ACTIVE
    mail.classList.add('active');   
    alertMsg.classList.add('active');
  //si el valor de mail hace MATCH con PATTERN
  } else if (!mail.value.match(pattern)) {
    //agregar clases ACTIVE
    mail.classList.add('active');   
    alertMsg.classList.add('active');
  //si el mail es CORRECTO
  } else {
    //desactiva PRIMARY PAGE y activa SECONDARY PAGE
    primaryPage.style.display = "none";
    secondaryPage.style.display = "grid";
    //cambia el SPAN por el valor de MAIL
    spanMail.innerHTML = mail.value;
  }
})
//al presionar una TECLA en MAIL
mail.addEventListener('keypress', ()=>{
  //borra las clases ACTIVE
  mail.classList.remove('active');
  alertMsg.classList.remove('active');
})