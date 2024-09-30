// JavaScript para procesar la información de materias
var datos = datos || {}; // Si `datos` no existe, se inicializa como un objeto vacío

// Función para consultar materias
function consultarMateria() {
    console.log("Datos actuales de materias en `datos.materias`:", datos.materias); // Verificar contenido de `datos.materias`
    let nombreMateria = document.getElementById("nombreMateria").value.trim();
    
    if (!nombreMateria) {
        document.getElementById("resultadoMateria").innerHTML = "<p>Por favor, ingrese el nombre de la materia.</p>";
        return;
    }
    
    if (datos.materias && datos.materias.length > 0) {
        let resultado = datos.materias.find(materia => materia.nombre.toLowerCase() === nombreMateria.toLowerCase());
        
        if (resultado) {
            let html = "<h2>Datos de la Materia</h2>";
            for (let propiedad in resultado) {
                html += `<li>${propiedad}: ${resultado[propiedad]}</li>`;
            }
            document.getElementById("resultadoMateria").innerHTML = html;
        } else {
            document.getElementById("resultadoMateria").innerHTML = "<p>No se encontró la materia. Verifique el nombre ingresado.</p>";
        }
    } else {
        document.getElementById("resultadoMateria").innerHTML = "<p>Los datos de las materias no están disponibles en este momento.</p>";
    }
}
