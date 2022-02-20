function login(){
  console.log("Executing login function ...");
  // basic: get the values from the input
  let username=$("#txtUsername").val();
  let password=$("#txtPassword").val();
  // medium: display the values on the console
  console.log(username,password);
  // high: compare the values with the email and password in the localstorage
  let users=readUsers();
  console.log(users);
  let flag=false;
  for(let i=0;i<users.length;i++){
    // this is the var === this is in LS
    if(username===users[i].email && password===users[i].password){
      console.log("I found it!");
      flag=true;
      window.location="home.html";
    }
  }

  if(!flag){
    console.log("Invalid Credentials");
    $("#alertError").removeClass("hide");
    setTimeout(function(){
      $("#alertError").addClass("hide");
    },3000);
  }

}

function init() {
  console.log("Loging script");
  //hook events
  $("#btnLogin").click(login);
}

window.onload=init;