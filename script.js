function tirarDado() {
    const dado = document.getElementById("dado");
    const result = document.getElementById("result");

    // Añadir animación de rotación al dado
    dado.classList.add("tirando");

    // Simular lanzamiento del dado
    setTimeout(() => {
        dado.classList.remove("tirando");

        // Generar un resultado aleatorio (de 1 a 6)
        const resultado = Math.floor(Math.random() * 6) + 1;
        
        if (resultado <= 3) {
            // "Ingresa"
            result.textContent = "¡Felicidades futuro Bicho 2025!";
            result.classList.add("bienvenida");
            result.classList.remove("larva");
            document.body.style.backgroundColor = "#a3ffaf";
        } else {
            // "No ingresa"
            result.textContent = "Fudeu, futura larva 2025";
            result.classList.add("larva");
            result.classList.remove("bienvenida");
            document.body.style.backgroundColor = "#cccccc";
        }
    }, 500); // Duración de la animación
}
