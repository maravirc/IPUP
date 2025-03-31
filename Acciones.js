// Función para redirigir al formulario
function redirigir() {
    window.location.href = "https://20.51.224.205/Formularios/Formulario.html";
}

// Simulando progreso
let progress = document.getElementById('progress');
let imagenProgreso = document.getElementById('imagen-progreso');
let valorProgreso = 0;
let boton = document.getElementById('redirigir');
boton.disabled = true;  

let interval = setInterval(function() {
    if (valorProgreso >= 100) {
        clearInterval(interval);
        boton.disabled = false;  // Habilitamos el botón cuando el progreso es 100
    } else {
        valorProgreso += 1;
        progress.value = valorProgreso;
        // Cambiar imagen de progreso
        //imagenProgreso.src = `/Inicio/ipup.png${100 + valorProgreso}`;
    }
}, 35);
