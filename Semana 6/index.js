var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var {expect} = require('chai');


//-----------------------LOGIN FAILED/SUCCESFUL-----------------------//
Given('I go to losestudiantes home screen', () => {
  browser.url('/');
  if($('button=Cerrar').isDisplayed()) {
    $('button=Cerrar').click();
  }
});

When('I open the login screen', () => {
  $('button=Ingresar').waitForExist(5000);
  $('button=Ingresar').waitForDisplayed(5000);
  $('button=Ingresar').click();
});

// When('I fill a wrong email and password', () => {
//   var cajaLogIn = $('.cajaLogIn');

//   var mailInput = cajaLogIn.$('input[name="correo"]');
//   mailInput.click();
//   mailInput.setValue('wrongemail@example.com');

//   var passwordInput = cajaLogIn.$('input[name="password"]');
//   passwordInput.click();
//   passwordInput.setValue('123467891');
// });

When('I try to login', () => {
  var cajaLogIn = $('.cajaLogIn');
  cajaLogIn.$('button=Ingresar').click();
});

Then('I expect to not be able to login', () => {
  $('.aviso.alert.alert-danger').waitForDisplayed(5000);
});

When(/^I fill in my (.*) and (.*)$/ , (email, password) => {
  var cajaLogIn = $('.cajaLogIn');

 var mailInput = cajaLogIn.$('input[name="correo"]');
 mailInput.click();
 mailInput.keys(email);

 var passwordInput = cajaLogIn.$('input[name="password"]');
 passwordInput.click();
 passwordInput.keys(password)
});

// Failure
Then('I expect to see {string}', error => {

  if(browser.$('.aviso.alert.alert-danger').waitForDisplayed(5000)) {
    var alertText = browser.$('.aviso.alert.alert-danger').getText();
    expect(alertText).to.include(error);
  }
});

//Success
Then('I see {string}', result => {

  if(!browser.$('.botonDropdown.dropdown-toggle.btn.btn-default').waitForDisplayed(5000)){
    var cuenta = browser.$('.botonDropdown.dropdown-toggle.btn.btn-default');
    cuenta.click();
    mensaje = $('a[role="menuitem"]').getText();
    expect(mensaje).to.include(result);
 }
});

//-----------------------Register FAILED/SUCCESFUL-----------------------//

When(/^I fill my (.*), (.*) and (.*)$/ , (name, lastName, email) => {

  var cajaSignUp = $('.cajaSignUp');

  var nameInput = cajaSignUp.$('input[name="nombre"]');
  nameInput.click();
  nameInput.keys(name);
 
  var lastNameInput = cajaSignUp.$('input[name="apellido"]');
  lastNameInput.click();
  lastNameInput.keys(lastName);

  var emailInput = cajaSignUp.$('input[name="correo"]');
  emailInput.click();
  emailInput.keys(email);

});

When(/^I choose a (.*)$/,university =>{

  var cajaSignUp = $('.cajaSignUp');
  cajaSignUp.$('select[name="idUniversidad"]').value=university;

});

When(/^I choose my (.*)$/,career =>{

  var cajaSignUp = $('.cajaSignUp');
  cajaSignUp.$('select[name="idPrograma"]').value=parseInt(career);

});

When(/^I fill with (.*)$/,(password)=>{

  var cajaSignUp= $('.cajaSignUp');

  var passwordInput = cajaSignUp.$('input[name="password"]');
  passwordInput.click();
  passwordInput.keys(password);

});

When('I accept terms and conditions', () =>{

  var cajaSignUp = $('.cajaSignUp');
  cajaSignUp.$('input[name="acepta"]').click();

});


When('I try to register', () => {
  var cajaSignUp = $('.cajaSignUp');
  cajaSignUp.$('button=Registrarse').click();
});

//Succesful
Then('I expect {string}', result=>{

  if(browser.$('div[class="sweet-alert"]').waitForDisplayed(5000)) {
    var alertText = browser.$('div[class="sweet-alert"]').getText();
    expect(alertText).to.include(result);  
  }
});
