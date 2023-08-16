document.getElementById('btn-submit').addEventListener('click',function (){
  const emailField = document.getElementById('email-field');
  const emailValue = emailField.value;
  const passwordField = document.getElementById('password-field');
  const passwordValue = passwordField.value;
   if (emailValue === 'tanjib.com' && passwordValue === 'tanjib') {
      window.location.href = 'bankpage.html';
   }else{
      alert("Your email or password is wrong")
   }
})