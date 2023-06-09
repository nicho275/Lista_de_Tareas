document.addEventListener("DOMContentLoaded", function (){

    
    let creador; //creador, es una variable unicamente para crear elementos
    let ayudador; //ayuda a creador a crear una variable dentro de otra

    //CREAR DIVS PRINCIPALES
creador = document.createElement("div"); 
creador.id = "contenedor_invisible";
 document.body.appendChild(creador);
 ayudador = creador;
 creador = document.createElement("div");
 creador.id = "principal";
 ayudador.appendChild(creador);



//CREAR CARACTERISTICAS DEL DIV PRINCIPAL
ayudador = document.getElementById("principal");
creador = document.createElement("h1");
creador.id = "titulo";
creador.align = "center";
creador.innerText = "ORGANIZA TUS TAREAS";
ayudador.appendChild(creador);

//SELECCIONADOR

creador = document.createElement("div");
creador.id = "seleccionador";
principal.appendChild(creador);

ayudador = creador;
creador = document.createElement("div");
creador.id = "seleccionador_tarea";
ayudador.appendChild(creador);

ayudador = creador;
creador = document.createElement("button");
creador.id = "otro";
creador.innerText = "OTRO";
ayudador.appendChild(creador);

creador = document.createElement("input");
creador.id = "tarea";
creador.type = "text";
creador.placeholder = "Hacer ejercicios de la pagina 10";
creador.size = "30";
ayudador.appendChild(creador);
creador.style.display = "none";

creador = document.createElement("button");
creador.id = "aceptar_tarea";
creador.innerText = "ACEPTAR";
ayudador.appendChild(creador);
creador.style.display ="none";

creador = document.createElement("button");
creador.id = "cancelar_tarea";
creador.innerText = "CANCELAR";
ayudador.appendChild(creador);
creador.style.display ="none";

ayudador = document.getElementById("seleccionador");
creador = document.createElement("div");
creador.id = "seleccionador_materia";
ayudador.appendChild(creador);

ayudador = creador;
creador = document.createElement("input");
creador.id = "color_materia";
creador.type = "color";
ayudador.appendChild(creador);

creador = document.createElement("h3");
creador.id = "agregar_text";
creador.innerText = "Agrega tu nueva Materia";
ayudador.appendChild(creador);

creador = document.createElement("button");
creador.id = "agregar_materia";
creador.innerText = "AÑADIR";
ayudador.appendChild(creador);

creador = document.createElement("button");
creador.id = "borrar_materia";
creador.innerText = "BORRAR";
ayudador.appendChild(creador);

creador = document.createElement("input");
creador.id = "materia";
creador.type = "text";
creador.placeholder = "Matemáticas";
creador.size = "30";
ayudador.appendChild(creador);

creador = document.createElement("select");
creador.id = "seleccionar_materia";
ayudador.appendChild(creador);

ayudador = creador;
creador = document.createElement("option");
creador.id = "p.";
creador.innerHTML = "Sin seleccionar";
ayudador.appendChild(creador);


//ANIDADOR
creador = document.createElement("div");
creador.id = "anidador";
ayudador = document.getElementById("principal");
ayudador.appendChild(creador);

let gridAnidador = "50px";
creador.style = "grid-template-rows:"+gridAnidador+";";

ayudador = creador;
creador = document.createElement("div");
creador.id = "info_anidador";
ayudador.appendChild(creador);

ayudador = creador;
creador = document.createElement("p");
creador.id = "contador";
let contador = 0;
creador.innerText = "Número de tareas: " + contador;
ayudador.appendChild(creador);

creador = document.createElement("p");
creador.id = "completadas";
let completadas = 0;
creador.innerText = "Completadas: " + completadas;
ayudador.appendChild(creador);


// //CREACION DEL MODAL
// let texto = "";

// creador = document.createElement("div");
// creador.className = "modal fade";
// creador.id = "modalmio";
// creador.role = "dialog";
// document.body.appendChild(creador);
// ayudador = creador;
// creador = document.createElement("div");
// creador.className = "modal-dialog";
// ayudador.appendChild(creador);
// ayudador = creador;
// creador = document.createElement("div");
// creador.className = "modal-content";
// ayudador.appendChild(creador);
// ayudador = creador;
// creador = document.createElement("div");
// creador.className = "modal-header";
// ayudador.appendChild(creador);
// creador = document.createElement("div");
// creador.className = "modal-body";
// ayudador.appendChild(creador);
// creador = document.createElement("div");
// creador.className = "modal-footer";
// ayudador.appendChild(creador);
// ayudador = document.getElementsByClassName("modal-header").item(0);
// creador = document.createElement("h5");
// creador.className = "modal-title";
// creador.innerText = "Ha ocurrido un error";
// ayudador.appendChild(creador);
// creador = document.createElement("button");
// creador.className = "btn-close";
// ayudador.appendChild(creador);
// ayudador = (document.getElementsByClassName("modal-body"))[0];
// creador = document.createElement("p");
// ayudador.appendChild(creador);
// ayudador = (document.getElementsByClassName("modal-footer"))[0];
// creador = document.createElement("button");
// creador.className = "btn btn-primary";
// creador.innerText = "Aceptar";
// ayudador.appendChild(creador);

//Funciones

const buttonOtro = document.getElementById("otro");
const buttonAceptarTarea = document.getElementById("aceptar_tarea");
const buttonCancelarTarea = document.getElementById("cancelar_tarea");
const textTarea = document.getElementById("tarea");
const colorMateria = document.getElementById("color_materia");
const textMateria = document.getElementById("seleccionar_materia");
const anidador = document.getElementById("anidador");
let elementos = [];
let materias = [];
const materiaText = document.getElementById("materia");
let completadasP = document.getElementById("completadas");
let contadorP = document.getElementById("contador");
const info = document.getElementById("info_anidador");
let text = "";
let bodymodal = document.getElementById("modificar");

buttonOtro.addEventListener("click", function (){

    buttonAceptarTarea.style.display ="block";
    buttonCancelarTarea.style.display = "block";
    textTarea.style.display = "block";
    buttonOtro.style.display = "none";

});

buttonCancelarTarea.addEventListener("click", function (){

    buttonAceptarTarea.style.display ="none";
    buttonCancelarTarea.style.display = "none";
    textTarea.style.display = "none";
    buttonOtro.style.display = "block";
    textTarea.value = "";

});

buttonAceptarTarea.addEventListener("click", function (){
    let bandera = true;

    if(elementos.length != 0){
   elementos.forEach(element =>{
        if(element.firstChild.innerText == textTarea.value){
            bandera = false;
            bodymodal.innerText = "La tarea se repite, vuelva a intentarlo";
            $('#mimodal').modal();
        }

   });
}else{
    bandera = true;
}

if(textTarea.value.trim() == "" &&bandera){
    bandera = false;
    bodymodal.innerText = "No se ha puesto ninguna tarea, vuelva a intentarlo";
    $('#mimodal').modal();
}

if(textMateria.value == "Sin seleccionar" && bandera){
    bandera = false;
    bodymodal.innerText = "No se ha seleccionado ninguna materia, vuelva a intentarlo";
    $('#mimodal').modal();

}

if(bandera){
   
    gridAnidador += " 50px";
    anidador.style = "grid-template-rows:"+gridAnidador+";";


    creador = document.createElement("div");
    creador.className = "opciones";
    anidador.appendChild(creador);
    console.log(creador);
    elementos.push(creador);

    contador++;
    ayudador = contadorP.cloneNode(true);
    ayudador.innerText = "Número de tareas: " + contador;
    contadorP.remove();
    info.appendChild(ayudador);
    contadorP = ayudador;
    

    

    ayudador = creador;
    creador = document.createElement("p");
    creador.className = "tareaText";
    creador.innerText = textTarea.value;
    ayudador.appendChild(creador);

    let styletextmateria;
    materias.forEach(element => {

        if(element.innerText == textMateria.value){
            styletextmateria = window.getComputedStyle(element);
        }

    });
    
    creador = document.createElement("div");
    creador.className = "color";
    ayudador.appendChild(creador);
    creador.style.backgroundColor = styletextmateria.getPropertyValue('color');
    creador.style.width = "50px";
    creador.style.height = "50px";

    

    creador = document.createElement("p");
    creador.className = "materiaText";
    creador.innerText = textMateria.value;
    ayudador.appendChild(creador);
    creador.style.color = styletextmateria.getPropertyValue('color');

    creador = document.createElement("img");
    creador.className = "trashCan";
    creador.src = "./statics/media/trashCan.png";
    creador.style.width = "50px";
    creador.style.height = "50px";
    ayudador.appendChild(creador);

    creador.addEventListener("click",function (){
        this.parentNode.classList.add("removed");
        this.parentNode.addEventListener("transitionend", function (){
            this.remove();
        });
        
        contador--;
        creador = contadorP.cloneNode(true);
        creador.innerText = "Número de tareas: " + contador;
        contadorP.remove();
        info.appendChild(creador);
        contadorP = creador;
        if(this.parentNode.lastChild.checked){
            completadas--;
            creador = completadasP.cloneNode(true);
        creador.innerText = "Completadas: " + completadas;
        completadasP.remove();
        info.appendChild(creador);
        completadasP = creador;
        }
        const trash = this;

        if(elementos.length != 0){
            let indice;
            let n = 0;
            
            elementos.forEach(elements => {

                if(elements.innerHTML == trash.parentNode.innerHTML){
                    indice = n;

                }
                n++;

            });

            elementos.splice(indice,1);

        }

    });

    creador = document.createElement("input");
    creador.className = "checkear";
    creador.type = "checkbox";
    ayudador.appendChild(creador);
    creador.addEventListener("change", function (){

        if(this.parentNode.lastChild.checked){
            completadas++;
            creador = completadasP.cloneNode(true);
        creador.innerText = "Completadas: " + completadas;
        completadasP.remove();
        info.appendChild(creador);
        completadasP = creador;
        }
        if(!this.parentNode.lastChild.checked){
            completadas--;
            creador = completadasP.cloneNode(true);
        creador.innerText = "Completadas: " + completadas;
        completadasP.remove();
        info.appendChild(creador);
        completadasP = creador;
        }

    });
    buttonAceptarTarea.style.display ="none";
    buttonCancelarTarea.style.display = "none";
    textTarea.style.display = "none";
    buttonOtro.style.display = "block";
    textTarea.value = "";

}
    



});

const buttonAgregarMateria = document.getElementById("agregar_materia");
const buttonBorrarMateria = document.getElementById("borrar_materia");


buttonAgregarMateria.addEventListener("click",function (){
    let bandera = true;
    if(materias.length != 0){

        materias.forEach(element => {
            if(element.innerText == materiaText.value){
                bandera = false;
                bodymodal.innerText = "La materia se repite, vuelva a intentarlo";
            $('#mimodal').modal();
            }
        });
    }else{
        bandera = true;
    }
    if(materiaText.value.split() == ""&&bandera){
        bandera = false;
        bodymodal.innerText = "No se ha puesto ninguna materia, vuelva a intentarlo";
            $('#mimodal').modal();
    }

    if(bandera){
        creador = document.createElement("option");
        creador.innerText = materiaText.value;
        textMateria.appendChild(creador);
        creador.style.color = colorMateria.value;
        materias.push(creador);
        materiaText.value = "";

    }


});

buttonBorrarMateria.addEventListener("click", function (){

let indice;
materiaText.value = "";
    if(materias.length != 0){
        let n = 0;

        materias.forEach(element => {
            
            if(element.innerHTML == textMateria.value){

                indice = n;

            }
            n++;
        });
        materias[indice].remove();
        materias.splice(indice,1);



    }else{
        bodymodal.innerText = "No existen materias que eliminar";
        $('#mimodal').modal();
        
    }
    


});


textMateria.addEventListener("change", function (){

    let styletextmateria;
    materias.forEach(element => {

        if(element.innerText == textMateria.value){
            styletextmateria = window.getComputedStyle(element);
        }

    });

    

textMateria.style.color =  styletextmateria.getPropertyValue("color");

});





});