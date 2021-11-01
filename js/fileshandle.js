var storage = firebase.storage(),
    storageRef = firebase.storage().ref(),
    button = document.getElementById ("subir"), 
    file = document.getElementById ("file"),
    maRef = storageRef.child("Material_Apoyo"),
    output = document.getElementById ("output");

    mostrarLista();

button.addEventListener("click", function (){
    if (!file.files[0]) {
        window.alert ("Selecciona un archivo");
    }
        else{   maRef.child(getFileName(file.value)).put(file.files[0]).then((snapshot) => {
                window.alert("¡Archivo subido con éxito!");
                mostrarLista();
            });
    }
    } , false);

    async function mostrarLista () {
        output.innerHTML = "";
        maRef.listAll().then((res) => {
            /*res.prefixes.forEach((folderRef) => {

            }); */
            res.items.forEach((itemRef) => {
                    output.innerHTML += `<p>
                                            ${itemRef.name}
                                            <button data-refName = "${itemRef.name}" onclick = "javascript:bajarArchivo(this)">Descargar</button>
                                            <button data-refName = "${itemRef.name}" onclick = "javascript:eliminarArchivo(this)">Eliminar</button>
                                        </p>`;
            });
        }).catch((error) => {
            console.error(error);
        });
    }

    async function bajarArchivo(file){
        var refName = file.getAttribute("data-refName");
        maRef.child(refName).getDownloadURL().then((url) => {
            /*var xhr = new XMLHttpRequest();
            xhr.responseType = "blob";
            xhr.onload = (event) => {
                var blob = xhr.response;
            };
            xhr.open("GET", url);
            xhr.send();*/
            window.location.assign(url);
        })
        .catch((error) => {
            console.error("Error al Descargar: ", error);
        });
    }

    async function eliminarArchivo(file){
        var refName = file.getAttribute("data-refName");
       maRef.child(refName).delete()
       .then(() => {
           window.alert("Eliminado Exitosamente");
           mostrarLista();
       })
       .catch((error) => {
           console.error("Error al Eliminar: ", error);
       });
    }

    function getFileName(file){
        return file.slice(12);
       }