// JavaScript Document
// Función para consultar estudiantes usando XMLHttpRequest y mostrar resultados
function consultarEstudiante() {
    let numControl = document.getElementById("numControl").value;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "estudiantes.xml", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let xmlDoc = xhr.responseXML;
            let estudiantes = xmlDoc.getElementsByTagName("estudiante");
            let encontrado = false;

            for (let estudiante of estudiantes) {
                let num = estudiante.getElementsByTagName("numControl")[0].textContent;
                if (num === numControl) {
                    let nombre = estudiante.getElementsByTagName("nombre")[0].textContent;
                    let edad = estudiante.getElementsByTagName("edad")[0].textContent;
                    let carrera = estudiante.getElementsByTagName("carrera")[0].textContent;
                    let correo = estudiante.getElementsByTagName("correo")[0].textContent;

                    let html = `<h2>Datos del Estudiante</h2>
                                <li>Número de Control: ${num}</li>
                                <li>Nombre: ${nombre}</li>
                                <li>Edad: ${edad}</li>
                                <li>Carrera: ${carrera}</li>
                                <li>Correo: ${correo}</li>`;
                    document.getElementById("resultadoEstudiante").innerHTML = html;
                    encontrado = true;
                    break;
                }
            }

            if (!encontrado) {
                document.getElementById("resultadoEstudiante").innerHTML = "<p>No se encontró el estudiante</p>";
            }
        }
    };
    xhr.send();
}
