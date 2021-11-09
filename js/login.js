const signInForm = document.querySelector("#login-form");


signInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = signInForm["login-email"].value;
  const password = signInForm["login-password"].value;

  // Authenticate the User
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    firebase.firestore().collection("tipoUsuario").doc(email).get().then((doc)=> {
          if (doc.data().tipo==0) {
            window.location="principal.html";
            window.alert("Bienvenido");
          } else if (doc.data().tipo==1) {
            window.location="principal1.html";
            window.alert("Bienvenido");
          }else if (doc.data().tipo==2) {
            window.location="principal2.html";
            window.alert("Bienvenido");
          }else if (doc.data().tipo==3) {
            window.location="principal3.html";
            window.alert("Bienvenido");
          }else if (doc.data().tipo==4) {
            window.location="principal4.html";
            window.alert("Bienvenido");
          }
    });

    
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Correo o contraseña incorrectos, corrige información");
    console.log ("Mensaje : "+ errorMessage);
  });
})



/* $("#btn-reset").click(function(){
  
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


/*var form = document.getElementById("login-form");
    const fireauth = firebase.auth();

form.addEventListener("submit", login, false);

function login () {
  var email = form["login-email"].value,
      pw = form["login-password"].value ;
      window.alert(email+" "+pw);

  fireauth.signInWithEmailAndPassword(email, pw)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    window.alert(user);
    //window.location.href="principal.html";
    //window.alert("Bienvenido");
    // ...

  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
  
} */