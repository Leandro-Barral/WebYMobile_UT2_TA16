const aOcultar = document.getElementById("aOcultar");
const botonOcultar = document.getElementById("btnOcultar");

botonOcultar.addEventListener("click", () => {
    if (aOcultar.hasAttribute("hidden")) {
        aOcultar.removeAttribute("hidden");
        botonOcultar.innerHTML = "Ocultar";
    } else {
        aOcultar.setAttribute("hidden", "");
        botonOcultar.innerHTML = "Mostrar";
    }
});
