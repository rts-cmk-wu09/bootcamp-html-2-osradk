const arrowLeft= document.querySelector(".arrow-left");
const arrowRight= document.querySelector(".arrow-right"); 
const figure= document.querySelectorAll(".figure-div-figure");


for (let index = 0; index < figure-div-figure.length; index++) {
    const figure = array[figure];
}
console.log(figure-div-figure)




//validering


document.querySelector("#form1").addEventListener("submit", validate);
const messageField = document.querySelector("#besked");

function validate(evt) {
  let error;

  if (this.email.value == "") {
    evt.preventDefault();
    error = "Udfyld venligst din e-mail adresse!";
    messageField.textContent = error;
    this.email.focus();
    return false;
  }
  const atpos = this.email.value.indexOf("@");
  const dotpos = this.email.value.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 > this.email.value.length) {
    evt.preventDefault();
    error = "Din e-mail adresse skal værte gyldig(fx navn@mail.dk)!";
    messageField.textContent = error;
    this.email.focus();
    return false;
  }
}