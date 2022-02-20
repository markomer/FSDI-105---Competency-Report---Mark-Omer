const LS_KEY="users";
function saveUser(user){
  //load the old data from the LS - localStorage
  let oldData=readUsers();
  //merge the data - old and new
  oldData.push(user);
  //console.log(user); // this is the object
  let val=JSON.stringify(oldData);//parse into a JSON string
  //console.log(val);//this is the string in JSON
  localStorage.setItem(LS_KEY,val);//send it to the localStorage
}
function readUsers(){
  //get the values from the localstorage
  let data = localStorage.getItem(LS_KEY);
  //create the array the first regisrtation
  if(!data){ //NOT users?
    return [];//creating the array the first registration
  }else{
    let list=JSON.parse(data); //parse string back into object
    return list;
  }
  
  //console.log(users);

}

/*function saveUser(user){
  console.log(user);// this is the object
  let val=JSON.stringify(user);//parse into a JSON string
  console.log(val);//this is the string in JSON
  localStorage.setItem("users",val);//send it to the localStorage
}*/

/*function readUsers(){

}*/
