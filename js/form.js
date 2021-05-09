const form = document.querySelector('#contact-form');
const name = document.querySelector('#name');
const nameError = document.querySelector('#nameError');
const subject = document.querySelector('#subject');
const subjectError = document.querySelector('#subjectError');
const address = document.querySelector('#address');
const addressError = document.querySelector('#addressError');
const email = document.querySelector('#email');
const emailError = document.querySelector('#emailError');
const succsess = document.querySelector('.succsess');

function formValidation(event) {
  event.preventDefault();

  let validationFailure = true;

  if (checkLength(name.value, 0)) {
    nameError.style.display = 'none';
  } else {
    nameError.style.display = 'block';
    validationFailure = false;
  }

  if (checkLength(subject.value, 9)) {
    subjectError.style.display = 'none';
  } else {
    subjectError.style.display = 'block';
    validationFailure = false;
  }

  if (checkLength(address.value, 24)) {
    addressError.style.display = 'none';
  } else {
    addressError.style.display = 'block';
    validationFailure = false;
  }

  if (validateEmail(email.value)) {
    emailError.style.display = 'none';
  } else {
    emailError.style.display = 'block';
    validationFailure = false;
  }

  if (validationFailure) {
    succsess.style.display = 'block';
  } else {
    succsess.style.display = 'none';
  }
}

form.addEventListener('submit', formValidation);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const matchPattern = regEx.test(email);
  return matchPattern;
}
