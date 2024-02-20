const navigation = document.querySelector('.primary-navigation');

//const navigationHeight = navigation.offsetHeight;
//document.documentElement.style.setProperty('--scroll-padding', navigationHeight + 'px');


window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animado');
    let animacion2 = document.getElementById('animado2');
    //let animacion3 = document.getElementById('animado');
    let posicionObj = animacion.getBoundingClientRect().top;
    console.log(posicionObj);
    let ventana = this.window.innerHeight/3;
    if (posicionObj < ventana){
        animacion.style.animation = 'mover 2s ease-in-out';
        animacion2.style.animation = 'mover 2s ease-out';
    }
})

window.onscroll = function efectoHabilidades(){
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300){
        let habilidad = document.getElementsByClassName("progreso");
        habilidad[0].classList.add("javascript");
        habilidad[1].classList.add("htmlcss");
        habilidad[2].classList.add("comunicacion");
        habilidad[3].classList.add("trabajo");
        habilidad[4].classList.add("creatividad");
        habilidad[5].classList.add("dedicacion");
        habilidad[6].classList.add("proyect");
    }
}
let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}