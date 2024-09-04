document.addEventListener("DOMContentLoaded", function() {
    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            const proyectosContainer = document.querySelector('.proyectos');
            data.forEach(proyecto => {
                const proyectoElement = document.createElement('div');
                proyectoElement.classList.add('proyecto');

                proyectoElement.innerHTML = `
                    <img src="${proyecto.image}" alt="${proyecto.title}">
                    <h3>${proyecto.title}</h3>
                    <p>${proyecto.description}</p>
                    <div class="lenguajes">
                        ${proyecto.languages.map(lenguaje => `<span class="lenguaje">${lenguaje}</span>`).join('')}
                    </div>
                `;

                proyectosContainer.appendChild(proyectoElement);
            });
        })
        .catch(error => console.error('Error al cargar los proyectos:', error));
});
