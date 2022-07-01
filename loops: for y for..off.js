var estudiantes = ["maria", "sergio", "rosa", "daniel"];
function saludarestudiantes(estudiante){
    console.log('hola, ${estudiante}');

}

for(var i = 0; i < estudiante.length; i++){
    saludarestudiantes(estudiantes[i]);

}

for(var estuadiante of estudiantes){
    saludarestudiantes(estudiante);

}