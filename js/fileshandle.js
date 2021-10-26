var storage = firebase.storage(),
    storageRef = firebase.storage().ref(),
    button = document.getElementById ("subir"), 
    file = document.getElementById ("file"),
    listref = storageRef.child("files/uid"),
    output = document.getElementById ("output");

button.addEventListener("click", function (){
    if (!file.files[0]) {
        window.alert ("Selecciona un archivo");
    }
        else{ 
            storage.ref(file.value).put(file.files[0]);
    }
    } , false);

    async function mostrarLista () {
        listref.listAll().then((res) => {
            res.prefixes.forEach((folderRef) => {

            });
            res.items.forEach((itemRef) => {
                    output.innerHTML += `<p id = "${itemRef}">${itemRef}</p>`;
            });
        }).catch((error) => {
            console.error(error);
        });
    }