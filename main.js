document.querySelector("#nav-links").addEventListener("click", () => {
    console.log("esto funciona");
    document.querySelector("#nav-links").classList.toggle("show");
  });


  document.querySelector("#burguer-btn").addEventListener("click", () => {
    console.log("esto funciona");
    document.querySelector("#nav-links").classList.toggle("show");
  });


let scrollPrevio = window.scrollY;
window.onscroll = function () {
    let scrollActual = window.scrollY;

    if (scrollPrevio > scrollActual) {
        document.getElementById("main-header").style.top = "0";
        document.getElementById("main-header").style.transition = "top 0.7s";
        document.getElementById("main-header").style.marginTop = "0";
    } else {
        document.getElementById("main-header").style.top = "-100%";
    }
    scrollPrevio = scrollActual;

    if (scrollActual == 0 && document.getElementById("main-header").style.marginTop < "10"){
      document.getElementById("main-header").style.marginTop = "10px";
    }

}

// Acomodar el margin del main al detectar un cambio de pantalla.
window.onresize = function (){
  const element = document.querySelector("#main-header");
  const style = getComputedStyle(element);
  const altura = parseFloat(style.marginTop) + parseFloat(style.height) + 25;  //le agrego 25 pixeles extra. O sea, tomo el height + margin del header y le sumo 25pixeles
  document.getElementById("main-section").style.marginTop = altura+"px";//le asigno la altura del header al margin del main-section, asi se me adapta al diseño responsive
  console.log("La altura es"+ altura);
}
