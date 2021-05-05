const url = "https://jsonplaceholder.typicode.com/photos";
const lista = document.getElementById("lista");

fetch(url)
    .then(response => response.json())
    .then(fotos => {
        fotos.map(foto =>{
            let li = document.createElement("li");
            li.innerHTML = `<a href="detalle.html?id=${foto.id}">${foto.id}</a> ${foto.title}`
            lista.appendChild(li);
        })
    })
    .catch(error=> {
        console.log(error);
        document.getElementById("error").innerHTML = error.message;
    })
    .finally(()=> {
        document.getElementById("cargando").innerHTML = "";
        document.getElementById("gif").src = "";
        console.log("proceso terminado")
    })