document.querySelector("#nav-links").addEventListener("click", () => {
    console.log("esto funciona");
    document.querySelector("#nav-links").classList.toggle("show");
  });


  document.querySelector("#burguer-btn").addEventListener("click", () => {
    console.log("esto funciona");
    document.querySelector("#nav-links").classList.toggle("show");
  });


// let scrollPrevio = window.scrollY;
// window.onscroll = function () {
//     let scrollActual = window.scrollY;
//     if (scrollPrevio > scrollActual) {
//         document.getElementById("main-header").style.top = "0";
//     } else {
//         document.getElementById("main-header").style.top = "-100%";
//     }
//     scrollPrevio = scrollActual;
// }
