/*const signInForm = document.querySelector("#login-form");

var form = document.getElementById("login-form");


signInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = signInForm["login-email"].value;
  const password = signInForm["login-password"].value;

  // Authenticate the User
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    window.location="Principal.html";
    window.alert("Bienvenido");
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    //window.alert("Correo o contraseña incorrectos, corrige información");//comentarios
    window.alert("Mensaje : "+ errorMessage);
  });
})



$("#btn-reset").click(function(){
  
  var auth = firebase.auth();
  var email = $("#res-email").val();
  if(email != ""){
    auth.sendPasswordResetEmail(email).then(function(){
      window.alert("Se envio el cambio de contraseña exitosamente a tu correo");
      document.getElementById("res-email").value = "";
    }).catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message; 
      window.alert("Mesage : "+ errorMessage);
    });
  }else{
    window.alert("Campo vacio. Ingresa tu correo");
  }
}); */


var form = document.getElementById("login-form");
    const fireauth = firebase.auth();

form.addEventListener("submit", login, false);

function login () {
  window.alert("Hola");
  var email = form["login-email"].value,
      pw = form["login-password"].value ;

  fireauth.signInWithEmailAndPassword(email, pw)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    //window.location="Principal.html";
    window.alert("Bienvenido");
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
  
}