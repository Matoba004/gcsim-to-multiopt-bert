// src/lib/utils/konamiCode.js

export function initKonamiCode(callback) {
    const KONAMI_CODE = [
        "ArrowUp",
        "ArrowUp",
        "ArrowDown",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "ArrowLeft",
        "ArrowRight",
        "b",
        "a"
    ];

    let inputSequence = [];

    // Escuchar eventos de teclado
    window.addEventListener("keydown", (event) => {
        inputSequence.push(event.key);

        // Mantener solo las últimas N entradas (longitud del código)
        inputSequence = inputSequence.slice(-KONAMI_CODE.length);

        // Verificar si la secuencia coincide con el Konami Code
        if (inputSequence.join(",") === KONAMI_CODE.join(",")) {
            callback(); // Ejecutar la función de callback cuando se activa
        }
    });
}