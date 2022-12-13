let pw1 = document.querySelector('#pw')
let pw2 = document.querySelector('#confirm_pw')
let div = document.querySelector('div.error')
let btn = document.querySelector('button')

function checkPasswords() {
  if (pw1.value != "" && pw1.value != "" && pw1.value == pw2.value) {
    div.classList.remove('error')
  } else {
    div.classList.add('error')
  }
}

function submitReady() {
  if (pw1.value != "" && pw1.value != "" && pw1.value == pw2.value) {
    pw1.setCustomValidity("");
    pw2.setCustomValidity("");
  } else if (pw1.value == "") {
    pw1.setCustomValidity("Field cannot be blank.");
    pw2.setCustomValidity("");
  } else if (pw2.value == "") {
    pw1.setCustomValidity("");
    pw2.setCustomValidity("Field cannot be blank.");
  } else if (pw1.value != pw2.value)  {
    pw1.setCustomValidity("");
    pw2.setCustomValidity("Passwords do not match.");
  } else {
    pw1.setCustomValidity("Field cannot be blank.");
    pw2.setCustomValidity("Field cannot be blank.");
  }
}

pw1.addEventListener('input', checkPasswords)
pw2.addEventListener('input', checkPasswords)
btn.addEventListener('click', submitReady)