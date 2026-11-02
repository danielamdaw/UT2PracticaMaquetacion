// Conmutador para activar la hoja alternativa de alto contraste.
(() => {
    const hojaContraste = document.getElementById("hojaAltoContraste");
    const botonTema = document.querySelector("[data-conmutar-tema]");

    if (!hojaContraste || !botonTema) return;

    const clavePreferencia = "secondLifeAltoContraste";
    let contrasteActivo = false;

    try {
        contrasteActivo = window.localStorage.getItem(clavePreferencia) === "true";
    } catch (error) {
    }

    const actualizarTema = () => {
        if (contrasteActivo) {
            hojaContraste.rel = "stylesheet";
            hojaContraste.removeAttribute("disabled");
        } else {
            hojaContraste.setAttribute("disabled", "");
            hojaContraste.rel = "alternate stylesheet";
        }
        botonTema.setAttribute("aria-pressed", String(contrasteActivo));
        botonTema.textContent = contrasteActivo ? "Tema normal" : "Alto contraste";
    };

    actualizarTema();

    botonTema.addEventListener("click", () => {
        contrasteActivo = !contrasteActivo;
        actualizarTema();

        try {
            window.localStorage.setItem(clavePreferencia, String(contrasteActivo));
        } catch (error) {
        }
    });
})();
