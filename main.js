'use strict';

const tablaServicios = document.getElementById('tabla-servicios');

// Definir un array de objetos para los servicios y sus costos
const servicios = [
    { nombre: 'Consulta Médica', costo: '$5.000' },
    { nombre: 'Baño y Peluquería', costo: '$12.000' },
    { nombre: 'Alojamiento', costo: '$10.000 por noche' },
    { nombre: 'Vacunación y Prevención', costo: '$3.000' },
    { nombre: 'Dentista Canino', costo: '$4.000' },
    { nombre: 'Atención de Emergencia', costo: 'Consultar'},
    { nombre: 'Cuidado Geriátrico', costo: '$7.000' },
    { nombre: 'Cirugía', costo: 'Consultar' }
];

tablaServicios.addEventListener('click', function (event) {
    const fila = event.target.closest('tr'); // Obtener la fila clickeada
    if (!fila) return; // Salir si no se hizo clic en una fila

    const servicio = fila.cells[0].textContent; // Obtener el nombre del servicio

    // Buscar el costo del servicio en el array de servicios
    const servicioSeleccionado = servicios.find(serv => serv.nombre === servicio);

    if (servicioSeleccionado) {
        alert(`El costo de "${servicioSeleccionado.nombre}" es: ${servicioSeleccionado.costo}`);
    } else {
        alert('Servicio no encontrado');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los contenedores de carousel
    const carousels = document.querySelectorAll('.carousel');

    // Agregar evento de clic a las imágenes de cada carousel
    carousels.forEach(carousel => {
        carousel.addEventListener('click', function(event) {
            const img = event.target.closest('img'); // Obtener la imagen clickeada dentro del carousel
            if (!img) return; // Salir si no se hizo clic en una imagen

            const descripcion = img.getAttribute('data-descripcion'); // Obtener la descripción desde el atributo data-descripcion

            // Mostrar la descripción en un contenedor designado (por ejemplo, un elemento <div>)
            mostrarDescripcion(descripcion);
        });
    });

    // Función para mostrar la descripción
    function mostrarDescripcion(texto) {
        const descripcionContainer = document.getElementById('descripcion-producto');
        descripcionContainer.textContent = texto;
    }
});


