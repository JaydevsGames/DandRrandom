// Loot ampliado y aleatorio por tipo de objeto
const lootPorObjeto = {
    cofre: [
        "Espada +1",
        "Espada larga +2",
        "Espada corta encantada",
        "Hacha de batalla",
        "Maza de acero",
        "Anillo de invisibilidad",
        "Anillo de protección",
        "Amuleto de salud",
        "Pergamino de fuego",
        "Pergamino de teletransportación",
        "Poción de fuerza",
        "Capa de resistencia",
        () => `${Math.floor(Math.random() * 201) + 50} monedas de oro`, // 50-250 oro
        () => `${Math.floor(Math.random() * 101) + 50} gemas preciosas`, // 50-150 gemas
        "Botella de elixir de vida",
        "Escudo mágico",
        "Collar de sabiduría"
    ],
    alacena: [
        "Pan mágico",
        "Poción de curación",
        "Poción de invisibilidad",
        "Poción de velocidad",
        "Llave antigua",
        "Mapa del tesoro",
        "Frasco de aceite sagrado",
        "Hierbas curativas",
        "Botella de vino elfico",
        "Pergamino antiguo",
        () => `${Math.floor(Math.random() * 51) + 10} monedas de oro`, // 10-60 oro
        "Frasco de veneno",
        "Polvo de sueño",
        "Set de componentes mágicos"
    ],
    armario: [
        "Capa de sigilo",
        "Capa de resistencia al fuego",
        "Botas de velocidad",
        "Botas de sigilo",
        "Guantes encantados",
        "Guantes de fuerza",
        "Sombrero del sabio",
        "Monedas de plata",
        () => `${Math.floor(Math.random() * 101) + 50} monedas de plata`, // 50-150 plata
        "Escudo ligero",
        "Escudo pesado",
        "Armadura de cuero",
        "Armadura de placas ligera",
        "Bolsa de hierbas curativas"
    ],
    mesa: [
        "Libro de hechizos",
        "Varita mágica",
        "Varita de hielo",
        "Pluma de ave rara",
        "Pergamino antiguo",
        "Piedra misteriosa",
        "Pergamino de invocación",
        "Bolsa de componentes mágicos",
        "Pequeño relicario",
        () => `${Math.floor(Math.random() * 21) + 5} monedas de oro`, // 5-25 oro
        "Cristal encantado",
        "Amuleto de protección",
        "Tintero mágico",
        "Mapa del reino"
    ]
};

// Referencias al DOM
const botones = document.querySelectorAll('.objeto');
const dadoImg = document.getElementById('dado');
const lootDiv = document.getElementById('loot');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const tipo = boton.dataset.tipo;
        mostrarDadoYLoot(tipo);
    });
});

function mostrarDadoYLoot(tipo) {
    lootDiv.textContent = "";
    dadoImg.style.display = "block";
    dadoImg.src = "img/1d20logo.png"; // Imagen del dado

    // Reiniciar animación
    dadoImg.style.animation = "none";
    dadoImg.offsetHeight; // Trigger reflow
    dadoImg.style.animation = "girar 1s ease-in-out forwards";

    // Esperar a que termine la animación
    setTimeout(() => {
        const lootArray = lootPorObjeto[tipo];
        let loot = lootArray[Math.floor(Math.random() * lootArray.length)];

        // Si el loot es función, ejecutarla (para oro/gemas aleatorias)
        if (typeof loot === "function") loot = loot();

        lootDiv.textContent = `¡Has encontrado: ${loot}!`;
        dadoImg.style.display = "none";
    }, 1000); // duración de la animación
}
