var boton = document.querySelector(".btn");
boton.addEventListener("click", function () {
    mostrar();
});

var contenido = document.querySelector("#contenido");

function mostrar()
{
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(datos => 
        {
            contenido.innerHTML =
            `
            <img src="${datos.results['0'].picture.large}" class="rounded-circle" alt="...">
            <p></p>
            <p>Nombre: ${datos.results['0'].name.first}</p>
            `
            
        })
}

