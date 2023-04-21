async function  user(){
    const data = await fetch("https://640c253994ce1239b0a68d8d.mockapi.io/userlist2");
    const data1= await data.json();

    var details= document.querySelector(".samsim");
    details.innerHTML="";
console.log(data1)
   data1.forEach((users) => {
        details.innerHTML+=`
        <div class="samsim">
        <div class="sim">
        <div><img src=${users.avatar}/></div>
        <div class="detail">
        <ul>
        <li class="list1"><h3>${users.First_name}</h3></li>
        <li class="list1">${users.Email}</li>
        <li class="list1">${users.Phonenumber}</li>
        <li class="list1">${users.Address}</li>
        </ul>
        <div class="btn">
        <button onclick="deleteuser(${users.id})"><i class="fa fa-trash fa-lg"> </i></button>
        <button onclick="Edituser(${users.id})"><i class="fa fa fa-pencil-square-o fa-lg"> </i></button>
        <button onclick="Adduser(${users.id})"><i class="fa fa-plus fa-lg"> </i></button>
        </div>
        </div>

        </div>
    
        </div>`
   });

}
user();

 async function deleteuser(id){
     const data=await fetch("https://640c253994ce1239b0a68d8d.mockapi.io/userlist2/" +id ,{method:"DELETE"})

console.log("delete" ,id);
user();
 }
 deleteuser();


