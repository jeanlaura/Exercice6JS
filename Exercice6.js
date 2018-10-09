function validateForm() {
  var firstNumber1 = document.forms["form6"]["firstNumber"].value;
  var secondNumber1 = document.forms["form6"]["secondNumber"].value;
  var result = firstNumber1/secondNumber1;
  var regex = /[0-9]/ ;
  if (!regex.test(firstNumber1)||firstNumber1 == ""||isNaN(firstNumber1)) {
    alert('Erreur numéro 1 !');
  }else if (!regex.test(secondNumber1)||secondNumber1 == ""||isNaN(secondNumber1)) {
    alert('Erreur numéro 2 !');
  }else{
      alert('Résultat : '+result);
  };
}
