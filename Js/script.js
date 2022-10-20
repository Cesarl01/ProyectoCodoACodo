console.log("Saludos por acaita")

/*const getName = idPost =>{
  fetch(`http://jsonplaceholder.typicode.com/posts/${idPost}`)
  .then(res =>{
        return res.json()
  })
    .then( post =>{
      console.log(post.userId);
      document.getElementById("userId").innerHTML = post.userId;
      document.getElementById("title").innerHTML = post.title ;
      document.getElementById("body").innerHTML = post.body;
      
      fetch(`http://jsonplaceholder.typicode.com/users/${post.userId}`)
      .then(res =>{
        return res.json()
      })
      .then(user =>{console.log(user.name)
        document.getElementById("id").innerHTML = user.name;
      })
  })

}
getName(86)


const getNameAsinc = async idPost =>{
  
  try{

      const resPost = await fetch(`http://jsonplaceholder.typicode.com/posts/${idPost}`);
      const post = await resPost.json();
      const resUser = await fetch(`http://jsonplaceholder.typicode.com/users/${post.userId}`);
      const User = await resUser.json();
      console.log(User.name);
      document.getElementById("userId").innerHTML = post.userId;
      document.getElementById("title").innerHTML = post.title ;
      document.getElementById("body").innerHTML = post.body;
      document.getElementById("id").innerHTML = User.name;
  }catch(e){
    console.log(e);
  }  
}

getNameAsinc(55);*/

const getNameAxios = async idPost =>{
        
  try{
      numid = parseInt(idPost);
      //alert('el numero entrada '+idPost);
      const resPost = await axios(`https://jsonplaceholder.typicode.com/posts/${numid}`);
      const resUser = await axios(`https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`);
      //alert('el numero entrada numid '+numid);
      console.log(resPost);
      console.log(resUser);
      console.log(resUser.data.username);
      alert('el numero username '+resUser.data.username)
      document.getElementById("userId").innerHTML = '<b>Id ususario: </b>' + resPost.data.userId;
      document.getElementById("title").innerHTML ='<b>Título: </b>' + resPost.data.title ;
      document.getElementById("body").innerHTML ='<b>Comnteario: </b>'+ resPost.data.body;
      document.getElementById("name").innerHTML ='<b>Nombre: </b>'+ resUser.data.name;
      document.getElementById("username").innerHTML ='<b>UserName: </b>'+ resUser.data.username;
      document.getElementById("email").innerHTML ='<b style="color: white">Email: </b>'+ resUser.data.email;
      document.getElementById("phone").innerHTML ='<b>Teléfono: </b>'+ resUser.data.phone;
      document.getElementById("company").innerHTML ='<b>Compañía: </b>'+ resUser.data.company.name;
      document.getElementById("catchPhrase").innerHTML ='<b>CatchPhrase: </b>'+ resUser.data.company.catchPhrase;
      /*document.getElementById("id").innerHTML = resUser.data.name;
      document.getElementById("id").innerHTML = resUser.data.name;*/

  }catch(e){
    console.log(e);
  }  
}


function GetFuntionName(){  
    var numero  
  alert('saludos, entre en la funcion') 
       numero = Math.floor(Math.random() * 100);
      if (numero != 0) {
        getNameAxios(numero);
      }else{
        numero = Math.floor(Math.random()*100) ;
        getNameAxios(numero);
      }

}
//var numid = Math.floor(Math.random()*10) ;
/*document.getElementById("numero").innerHTML  = Math.floor(Math.random()*10) ;
alert(numid);
console.log(numid);
if (numid != 0) {
 getNameAxios(numid) ;
}else{
  numid = Math.floor(Math.random()*10) ;
  getNameAxios(numid) ;
}*/
