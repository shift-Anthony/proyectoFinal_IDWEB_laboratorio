// Espera a que el DOM (la estructura HTML) esté cargado
document.addEventListener("DOMContentLoaded", () => {

    // Función para cargar un componente (header/footer)
    const loadComponent = (url, elementId) => {
        fetch(url)
            // Comprueba si la respuesta de la red es exitosa
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo cargar el recurso: ' + url);
                }
                return response.text();
            })
            // Inserta el HTML cargado en el placeholder
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            })
            // Captura cualquier error
            .catch(error => {
                console.error('Error al cargar componente:', error);
                document.getElementById(elementId).innerHTML = `<p style="color:red;">Error al cargar ${elementId}.</p>`;
            });
    };

    // Carga el header en su placeholder
    loadComponent('pages/header.html', 'header-placeholder');

    // Carga el footer en su placeholder
    loadComponent('pages/footer.html', 'footer-placeholder');
});