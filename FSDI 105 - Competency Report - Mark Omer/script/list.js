function createRow(usersArray){
  for(let i=0;i<usersArray.length;i++){
    let user = usersArray[i];
    let tmp=`
      <tr>
        <td>${user.email}</td>
        <td>${user.fname}</td>
        <td>${user.lname}</td>   
        <td>${user.age}</td>
        <td>${user.address}</td>
        <td>${user.phone}</td>   
        <td>${user.payment}</td>
        <td>${user.color}</td>
      </tr>`;//creating the html template
    $("#userList").append(tmp);
  }
}

function init(){
  console.log("listing");
  let users=readUsers();
  console.log(users);
  createRow(users);
}

window.onload=init;

