// Espera a que el DOM (la estructura HTML) esté cargado
document.addEventListener("DOMContentLoaded", () => {

    // Función para cargar un componente (header/footer)
    const loadComponent = (url, elementId) => {
        fetch(url)
            // Comprueba
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
    };
    // Carga el header y footer
    loadComponent('/pages/header.html', 'header-placeholder');
    loadComponent('/pages/footer.html', 'footer-placeholder');
});