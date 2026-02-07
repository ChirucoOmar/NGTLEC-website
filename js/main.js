// Mostrar ou esconder disciplinas extras
function verMais() {
    const extra = document.getElementById("extra");

    if (extra.style.display === "block") {
        extra.style.display = "none";
    } else {
        extra.style.display = "block";
    }
}
function verMais() {
    const extra = document.getElementById("extra");
    extra.classList.toggle("hidden");
}

