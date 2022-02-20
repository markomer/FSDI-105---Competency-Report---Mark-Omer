//create the constructor ES2015 / class
class User{
  //this are the parameters <----------------------------->
  constructor(email,password,first,last,age,address,phone,payment,color){
    this.email=email;
    this.password=password;
    this.fname=first; // **
    this.lname=last; // **
    this.age=age;
    this.address=address;
    this.phone=phone;
    this.payment=payment;
    this.color=color;
  }
}

// this is a local var-->
function isValid(user){
  //return false when the user is not valid
  //return true when the user is valid
  let valid=true;
  //we need to reset the origianl appearance of inputs
  //by removing the class alert-error
  $("input").removeClass("alert-error");
  //validations
  if(user.email.length==0){
    // if we get here it means that the eamil is empty
    valid=false;
    $("#txtEmail").addClass("alert-error");
    console.log("Missing email");
  }
  if(user.password.length==0){
    valid=false;
    $("#txtPassword").addClass("alert-error");
    console.log("Missing Password");
  }

  if(user.fname.length==0){
    valid=false;
    $("#txtFirst").addClass("alert-error");
    console.log("Missing First Name");
  }

  if(user.lname.length==0){
    valid=false;
    $("#txtLast").addClass("alert-error");
    console.log("Missing Last Name");
  }

  if(user.age.length==0){
    valid=false;
    $("#txtAge").addClass("alert-error");
    console.log("Missing Age");
  }

  return valid;
}


function registerUser(){
  let email = $("#txtEmail").val(); // *check your id on the html
  let password = $("#txtPassword").val();
  let first = $("#txtFirst").val();
  let last = $("#txtLast").val();
  let age = $("#txtAge").val();
  let address = $("#txtAddress").val();
  let phone = $("#txtPhone").val();
  let payment = $("#selPayment").val();
  let color = $("#txtColor").val();

  let user =new User(email,password,first,last,age,address,phone,payment,color);
  console.log(user);
  //validate the user
  if(isValid(user)){
    saveUser(user); //this fn is in the storeManager.js
  
  }
  /* to clear the form - see in clearForm function
  clearForm();*/
}

/* for clearing the form - see in registerUser function
function clearForm(){
  $("#txtEmail").val("");
  $("#txtPassword").val("");
  $("#txtFirst").val("");
  $("#txtLast").val("");
  $("#txtAge").val("");
  $("#txtAddress").val("");
  $("#txtPhone").val("");
  $("#selPayment").val("");
  $("#txtColor").val("");
}*/

function init(){
  console.log("Init Register");
  //hook events
  $("#btnRegister").click(registerUser);
}

function newFunction(){
  document.getElementById("reset").reset();
}

/*jquery text of mine
$( "li" ).hover(
  function() {
    $( this ).append( $( "<span> ***</span>" ) );
  }, function() {
    $( this ).find( "span" ).last().remove();
  }
);
 
$( "li.fade" ).hover(function() {
  $( this ).fadeOut( 100 );
  $( this ).fadeIn( 500 );
});*/

window.onload=init;
