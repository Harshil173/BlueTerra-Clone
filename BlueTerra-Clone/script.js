const navbarToggler = document.querySelector('.navbar-toggler');
const navbarItems = document.querySelector('.unlist');
const icon = document.getElementById('hello');
const close = document.getElementById('navbar-close');

navbarToggler.addEventListener('click', () => {
  navbarItems.classList.toggle('show');
  navbarToggler.style.display="none";
  close.style.display="flex";
  close.style.float="right";
  close.classList.toggle('close-show');
  // navbarItems.classList.toggle('harshil');
  // icon.style.display="none";
  icon.classList.toggle('logo-show');
});

function myhello() {
  navbarItems.style.display="none";
  navbarToggler.style.display="flex";
  icon.style.display="flex";
  close.style.display="none"; 
}

document.getElementById("myForm").addEventListener("submit", function(event) 
{
  event.preventDefault(); // Prevent the default form submission

  var name = document.getElementById("name").value;
  var designation = document.getElementById("desig").value;
  var phoneNumber = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var instituteName = document.getElementById("institute").value;

  var nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
  var phoneNumberRegex = /^\d{10}$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  var isValid = true;
  if (!nameRegex.test(name)) 
  {
     document.getElementById("nameError").innerHTML="Name should only have characters";
  }
  if (!nameRegex.test(designation)) 
  {
     document.getElementById("desigError").innerHTML="Designation should only have characters";
  }
  if (!phoneNumberRegex.test(phoneNumber)) 
  {
     document.getElementById("phoneError").innerHTML="*Number must have 10 Digits";
  }
  if (!emailRegex.test(email)) 
  {
     document.getElementById("emailError").innerHTML="Invalid Format";
  }
  if (!nameRegex.test(instituteName)) 
  {
     document.getElementById("instituteError").innerHTML="Institute Name should only have characters";
  }
})

