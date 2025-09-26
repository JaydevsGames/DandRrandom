// Loot ampliado y aleatorio por tipo de objeto (con stats)
const lootPorObjeto = {
    cofre: [
        { nombre: "Espada +1", tipo: "Arma (espada larga)", raridad: "Poco común", bono: "+1 a tiradas de ataque y daño" },
        { nombre: "Espada larga +2", tipo: "Arma (espada larga)", raridad: "Raro", bono: "+2 a tiradas de ataque y daño" },
        { nombre: "Espada corta encantada", tipo: "Arma (espada corta)", raridad: "Poco común", bono: "+1 a ataque", efecto: "Brilla en la oscuridad (6m)" },
        { nombre: "Hacha de batalla", tipo: "Arma marcial", daño: "1d8 cortante", propiedades: "Versátil (1d10)", raridad: "Común" },
        { nombre: "Maza de acero", tipo: "Arma simple", daño: "1d6 contundente", raridad: "Común" },
        { nombre: "Anillo de invisibilidad", tipo: "Objeto maravilloso", raridad: "Legendario", efecto: "Otorga invisibilidad hasta que se ataque o lance un conjuro" },
        { nombre: "Anillo de protección", tipo: "Objeto maravilloso", raridad: "Raro", bono: "+1 a CA y salvaciones" },
        { nombre: "Amuleto de salud", tipo: "Objeto maravilloso", raridad: "Raro", efecto: "Fija la Constitución del portador en 19" },
        { nombre: "Pergamino de fuego", tipo: "Conjuro (Bola de Fuego)", nivel: 3, raridad: "Poco común" },
        { nombre: "Pergamino de teletransportación", tipo: "Conjuro (Teleport)", nivel: 7, raridad: "Muy raro" },
        { nombre: "Poción de fuerza", tipo: "Poción", raridad: "Raro", efecto: "Aumenta la Fuerza a 21 por 1 hora" },
        { nombre: "Capa de resistencia", tipo: "Objeto maravilloso", raridad: "Poco común", bono: "+1 a salvaciones" },
        () => ({ nombre: `${Math.floor(Math.random() * 201) + 50} monedas de oro`, tipo: "Tesoro" }),
        () => ({ nombre: `${Math.floor(Math.random() * 101) + 50} gemas preciosas`, tipo: "Tesoro" }),
        { nombre: "Botella de elixir de vida", tipo: "Poción", raridad: "Muy raro", efecto: "Restaura 50 PV al beber" },
        { nombre: "Escudo mágico", tipo: "Escudo", raridad: "Poco común", bono: "+1 a CA" },
        { nombre: "Collar de sabiduría", tipo: "Objeto maravilloso", raridad: "Raro", efecto: "+2 a Sabiduría mientras se lleve" }
    ],
    alacena: [
        { nombre: "Pan mágico", tipo: "Comida", efecto: "Recupera 1d6 PV" },
        { nombre: "Poción de curación", tipo: "Poción", efecto: "Cura 2d4+2 PV" },
        { nombre: "Poción de invisibilidad", tipo: "Poción", raridad: "Raro", efecto: "Invisibilidad 1h o hasta atacar" },
        { nombre: "Poción de velocidad", tipo: "Poción", raridad: "Muy raro", efecto: "Duplica velocidad, +2 CA, ventaja en DEX por 1 min" },
        { nombre: "Llave antigua", tipo: "Objeto", efecto: "Abre un cofre olvidado" },
        { nombre: "Mapa del tesoro", tipo: "Objeto", efecto: "Señala una localización secreta" },
        { nombre: "Frasco de aceite sagrado", tipo: "Consumible", efecto: "Inflige 2d6 radiante a no-muertos" },
        { nombre: "Hierbas curativas", tipo: "Consumible", efecto: "Cura 1d4 PV" },
        { nombre: "Botella de vino élfico", tipo: "Objeto", efecto: "Valioso, puede venderse (25 po)" },
        { nombre: "Pergamino antiguo", tipo: "Objeto", efecto: "Contiene un conjuro menor aleatorio" },
        () => ({ nombre: `${Math.floor(Math.random() * 51) + 10} monedas de oro`, tipo: "Tesoro" }),
        { nombre: "Frasco de veneno", tipo: "Consumible", efecto: "Añadir al arma: 1d4 veneno" },
        { nombre: "Polvo de sueño", tipo: "Consumible", efecto: "Induce sueño (CD 13)" },
        { nombre: "Set de componentes mágicos", tipo: "Objeto", efecto: "Útil para lanzar conjuros" }
    ],
    armario: [
        { nombre: "Capa de sigilo", tipo: "Objeto maravilloso", raridad: "Poco común", efecto: "Ventaja en DEX (Sigilo)" },
        { nombre: "Capa de resistencia al fuego", tipo: "Objeto maravilloso", raridad: "Raro", efecto: "Resistencia a daño de fuego" },
        { nombre: "Botas de velocidad", tipo: "Objeto maravilloso", raridad: "Raro", efecto: "Duplica la velocidad de movimiento" },
        { nombre: "Botas de sigilo", tipo: "Objeto maravilloso", raridad: "Poco común", efecto: "+5 a DEX (Sigilo)" },
        { nombre: "Guantes encantados", tipo: "Objeto maravilloso", efecto: "+1 a Fuerza" },
        { nombre: "Guantes de fuerza", tipo: "Objeto maravilloso", raridad: "Raro", efecto: "Fuerza fijada en 19" },
        { nombre: "Sombrero del sabio", tipo: "Objeto maravilloso", efecto: "+2 a INT mientras se lleve" },
        { nombre: "Monedas de plata", tipo: "Tesoro" },
        () => ({ nombre: `${Math.floor(Math.random() * 101) + 50} monedas de plata`, tipo: "Tesoro" }),
        { nombre: "Escudo ligero", tipo: "Escudo", bono: "+1 a CA" },
        { nombre: "Escudo pesado", tipo: "Escudo", bono: "+2 a CA" },
        { nombre: "Armadura de cuero", tipo: "Armadura ligera", CA: "11 + DES" },
        { nombre: "Armadura de placas ligera", tipo: "Armadura pesada", CA: "16" },
        { nombre: "Bolsa de hierbas curativas", tipo: "Consumible", efecto: "Cura 1d8 PV" }
    ],
    mesa: [
        { nombre: "Libro de hechizos", tipo: "Objeto", efecto: "Contiene 1d6 conjuros aleatorios" },
        { nombre: "Varita mágica", tipo: "Varita", efecto: "Lanza un conjuro aleatorio (niv 1)" },
        { nombre: "Varita de hielo", tipo: "Varita", raridad: "Raro", efecto: "Lanza Rayo de Escarcha (cantrip)" },
        { nombre: "Pluma de ave rara", tipo: "Objeto", efecto: "Material valioso (10 po)" },
        { nombre: "Pergamino antiguo", tipo: "Conjuro", efecto: "Nivel 1 aleatorio" },
        { nombre: "Piedra misteriosa", tipo: "Objeto", efecto: "Brilla cuando hay magia cerca" },
        { nombre: "Pergamino de invocación", tipo: "Conjuro", efecto: "Invoca criatura CR 2" },
        { nombre: "Bolsa de componentes mágicos", tipo: "Objeto", efecto: "Necesario para lanzar conjuros" },
        { nombre: "Pequeño relicario", tipo: "Objeto religioso", efecto: "Protección menor contra no-muertos" },
        () => ({ nombre: `${Math.floor(Math.random() * 21) + 5} monedas de oro`, tipo: "Tesoro" }),
        { nombre: "Cristal encantado", tipo: "Objeto", efecto: "+1 a CD de conjuros al usarse como foco" },
        { nombre: "Amuleto de protección", tipo: "Objeto maravilloso", raridad: "Poco común", efecto: "Ventaja en 1 tirada de salvación al día" },
        { nombre: "Tintero mágico", tipo: "Objeto", efecto: "No se acaba nunca" },
        { nombre: "Mapa del reino", tipo: "Objeto", efecto: "Aumenta la velocidad de viaje un 25%" }
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
    lootDiv.innerHTML = "";
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

        // Si es función, ejecutarla
        if (typeof loot === "function") loot = loot();

        // Mostrar loot
       // Mostrar loot
if (typeof loot === "object") {
    // Determinar clase de rareza
    let claseRaridad = "";
    if (loot.raridad) {
        switch (loot.raridad.toLowerCase()) {
            case "común":
                claseRaridad = "comun";
                break;
            case "poco común":
                claseRaridad = "poco-comun";
                break;
            case "raro":
                claseRaridad = "raro";
                break;
            case "muy raro":
                claseRaridad = "muy-raro";
                break;
            default:
                claseRaridad = "otro";
        }
    }

    let nombreHTML = `<span class="loot-nombre ${claseRaridad}">${loot.nombre}</span>`;
    let detalles = "";

    if (loot.tipo) detalles += `<br>Tipo: ${loot.tipo}`;
    if (loot.raridad) detalles += `<br>Raridad: ${loot.raridad}`;
    if (loot.bono) detalles += `<br>Bono: ${loot.bono}`;
    if (loot.efecto) detalles += `<br>Efecto: ${loot.efecto}`;
    if (loot.daño) detalles += `<br>Daño: ${loot.daño}`;
    if (loot.propiedades) detalles += `<br>Propiedades: ${loot.propiedades}`;
    if (loot.CA) detalles += `<br>CA: ${loot.CA}`;
    if (loot.nivel) detalles += `<br>Nivel de conjuro: ${loot.nivel}`;

    lootDiv.innerHTML = `¡Has encontrado: ${nombreHTML}!<br>${detalles}`;
} else {
    lootDiv.innerHTML = `¡Has encontrado: <span class="loot-nombre comun">${loot}</span>!`;
}

        dadoImg.style.display = "none";
    }, 1000); // duración de la animación
}
