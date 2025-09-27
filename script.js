// Loot ampliado y aleatorio por tipo de objeto (con stats)
// Probabilidades por rareza
const rarezaProbabilidades = {
    "común": 0.55,        // Verde
    "poco común": 0.22,   // Azul
    "raro": 0.13,         // Morado
    "muy raro": 0.07,     // Rojo
    "otro": 0.03          // Dorado
};

// Función para elegir loot según rareza
function elegirLootPorRareza(pool) {
    const grupos = {
        "común": [],
        "poco común": [],
        "raro": [],
        "muy raro": [],
        "otro": []
    };
    pool.forEach(obj => {
        let r = (obj.raridad || "común").toLowerCase();
        if (!grupos[r]) r = "otro";
        grupos[r].push(obj);
    });
    const rand = Math.random();
    let acumulado = 0;
    let elegida = "común";
    for (const [rar, prob] of Object.entries(rarezaProbabilidades)) {
        acumulado += prob;
        if (rand < acumulado) {
            elegida = rar;
            break;
        }
    }
    let grupo = grupos[elegida];
    if (grupo.length === 0) {
        grupo = grupos["común"].length ? grupos["común"] : pool;
    }
    return grupo[Math.floor(Math.random() * grupo.length)];
}

const lootPorObjeto = {
    cofre: [
        { nombre: "Espada larga", tipo: "Arma (espada)", raridad: "común", bono: "+0 a ataque" },
        { nombre: "Hacha de batalla", tipo: "Arma (hacha)", raridad: "común", bono: "+0 a ataque" },
        { nombre: "Daga de acero", tipo: "Arma (daga)", raridad: "común", bono: "+0 a ataque" },
        { nombre: "Arco corto", tipo: "Arma (arco)", raridad: "común", bono: "+0 a ataque" },
        { nombre: "Martillo de guerra", tipo: "Arma (martillo)", raridad: "común", bono: "+0 a ataque" },
        { nombre: "Escudo de madera", tipo: "Escudo", raridad: "común", bono: "+1 a CA" },
        { nombre: "Armadura de cuero", tipo: "Armadura ligera", raridad: "común", CA: "11 + DES" },
        { nombre: "Armadura de malla", tipo: "Armadura media", raridad: "poco común", CA: "14 + DES (máx 2)" },
        { nombre: "Espada corta mágica", tipo: "Arma (espada)", raridad: "poco común", bono: "+1 a ataque" },
        { nombre: "Hacha de batalla mágica", tipo: "Arma (hacha)", raridad: "poco común", bono: "+1 a ataque" },
        { nombre: "Daga venenosa", tipo: "Arma (daga)", raridad: "raro", bono: "+1 a ataque", efecto: "Inflige 1d4 veneno" },
        { nombre: "Arco largo élfico", tipo: "Arma (arco)", raridad: "raro", bono: "+2 a ataque" },
        { nombre: "Martillo de guerra enano", tipo: "Arma (martillo)", raridad: "raro", bono: "+2 a ataque" },
        { nombre: "Escudo de mithril", tipo: "Escudo", raridad: "muy raro", bono: "+2 a CA" },
        { nombre: "Armadura de placas", tipo: "Armadura pesada", raridad: "muy raro", CA: "18" },
        { nombre: "Espada flamígera", tipo: "Arma (espada)", raridad: "muy raro", bono: "+2 a ataque", efecto: "Inflige 1d6 fuego extra" },
        { nombre: "Hacha vorpal", tipo: "Arma (hacha)", raridad: "otro", bono: "+3 a ataque", efecto: "Decapita con crítico" },
        { nombre: "Daga de sombra", tipo: "Arma (daga)", raridad: "otro", bono: "+3 a ataque", efecto: "Invisibilidad al atacar" },
        { nombre: "Anillo de protección", tipo: "Objeto maravilloso", raridad: "raro", bono: "+1 a CA y salvaciones" },
        { nombre: "Amuleto de salud", tipo: "Objeto maravilloso", raridad: "raro", efecto: "Constitución 19" },
        { nombre: "Pergamino de bola de fuego", tipo: "Conjuro", raridad: "poco común", nivel: 3 },
        { nombre: "Pergamino de teleportación", tipo: "Conjuro", raridad: "muy raro", nivel: 7 },
        { nombre: "Poción de fuerza gigante", tipo: "Poción", raridad: "raro", efecto: "Fuerza 21 por 1 hora" },
        { nombre: "Capa de resistencia", tipo: "Objeto maravilloso", raridad: "poco común", bono: "+1 a salvaciones" },
        () => ({ nombre: `${Math.floor(Math.random() * 201) + 50} monedas de oro`, tipo: "Tesoro", raridad: "común" })
    ],
    alacena: [
        { nombre: "Pan élfico", tipo: "Comida", raridad: "común", efecto: "Recupera 1d6 PV" },
        { nombre: "Queso curado", tipo: "Comida", raridad: "común", efecto: "Recupera 1d4 PV" },
        { nombre: "Frutas exóticas", tipo: "Comida", raridad: "común", efecto: "Recupera 1d4 PV" },
        { nombre: "Hierbas curativas", tipo: "Consumible", raridad: "común", efecto: "Cura 1d4 PV" },
        { nombre: "Botella de vino élfico", tipo: "Objeto", raridad: "común", efecto: "Valioso, puede venderse (25 po)" },
        { nombre: "Frasco de miel", tipo: "Comida", raridad: "común", efecto: "Recupera 1d4 PV" },
        { nombre: "Set de componentes mágicos", tipo: "Objeto", raridad: "común", efecto: "Útil para lanzar conjuros" },
        { nombre: "Llave antigua", tipo: "Objeto", raridad: "común", efecto: "Abre un cofre olvidado" },
        { nombre: "Mapa del tesoro", tipo: "Objeto", raridad: "poco común", efecto: "Señala una localización secreta" },
        { nombre: "Frasco de aceite sagrado", tipo: "Consumible", raridad: "raro", efecto: "Inflige 2d6 radiante a no-muertos" },
        { nombre: "Frasco de veneno", tipo: "Consumible", raridad: "raro", efecto: "Añadir al arma: 1d4 veneno" },
        { nombre: "Polvo de sueño", tipo: "Consumible", raridad: "raro", efecto: "Induce sueño (CD 13)" },
        { nombre: "Poción de curación", tipo: "Poción", raridad: "poco común", efecto: "Cura 2d4+2 PV" },
        { nombre: "Poción de invisibilidad", tipo: "Poción", raridad: "raro", efecto: "Invisibilidad 1h o hasta atacar" },
        { nombre: "Poción de velocidad", tipo: "Poción", raridad: "muy raro", efecto: "Duplica velocidad, +2 CA, ventaja en DEX por 1 min" },
        { nombre: "Poción de restauración mayor", tipo: "Poción", raridad: "otro", efecto: "Restaura todos los PV" },
        { nombre: "Pergamino antiguo", tipo: "Objeto", raridad: "poco común", efecto: "Contiene un conjuro menor aleatorio" },
        { nombre: "Bolsa de especias raras", tipo: "Objeto", raridad: "poco común", efecto: "Valioso para alquimia" },
        { nombre: "Frasco de agua bendita", tipo: "Consumible", raridad: "raro", efecto: "Inflige 2d6 daño a demonios" },
        { nombre: "Caja de galletas mágicas", tipo: "Comida", raridad: "común", efecto: "Recupera 1d4 PV" },
        { nombre: "Frasco de poción de sueño", tipo: "Poción", raridad: "raro", efecto: "Induce sueño profundo" },
        { nombre: "Bolsa de semillas mágicas", tipo: "Objeto", raridad: "poco común", efecto: "Crecen plantas curativas" },
        { nombre: "Frasco de poción de resistencia", tipo: "Poción", raridad: "poco común", efecto: "Ventaja en salvaciones por 1h" },
        { nombre: "Caja de té de dragón", tipo: "Comida", raridad: "raro", efecto: "Cura 2d8 PV" },
        () => ({ nombre: `${Math.floor(Math.random() * 51) + 10} monedas de oro`, tipo: "Tesoro", raridad: "común" })
    ],
    armario: [
        { nombre: "Capa de viajero", tipo: "Objeto maravilloso", raridad: "común", efecto: "Ventaja en DEX (Sigilo)" },
        { nombre: "Botas de cuero", tipo: "Objeto maravilloso", raridad: "común", efecto: "Resistencia al frío" },
        { nombre: "Guantes de trabajo", tipo: "Objeto maravilloso", raridad: "común", efecto: "Mejora trabajos manuales" },
        { nombre: "Sombrero de ala ancha", tipo: "Objeto maravilloso", raridad: "común", efecto: "Protege del sol" },
        { nombre: "Collar de cuentas", tipo: "Objeto maravilloso", raridad: "común", efecto: "Decorativo" },
        { nombre: "Capa de invisibilidad", tipo: "Objeto maravilloso", raridad: "muy raro", efecto: "Otorga invisibilidad" },
        { nombre: "Botas de velocidad", tipo: "Objeto maravilloso", raridad: "poco común", efecto: "Duplica la velocidad de movimiento" },
        { nombre: "Guantes de fuerza", tipo: "Objeto maravilloso", raridad: "raro", efecto: "+1 a Fuerza" },
        { nombre: "Sombrero de sabiduría", tipo: "Objeto maravilloso", raridad: "raro", efecto: "+2 a INT mientras se lleve" },
        { nombre: "Collar de protección", tipo: "Objeto maravilloso", raridad: "poco común", efecto: "+1 a salvaciones" },
        { nombre: "Escudo ligero", tipo: "Escudo", raridad: "poco común", bono: "+1 a CA" },
        { nombre: "Escudo pesado", tipo: "Escudo", raridad: "raro", bono: "+2 a CA" },
        { nombre: "Armadura de cuero reforzada", tipo: "Armadura ligera", raridad: "poco común", CA: "12 + DES" },
        { nombre: "Armadura de placas ligera", tipo: "Armadura pesada", raridad: "raro", CA: "16" },
        { nombre: "Bolsa de hierbas curativas", tipo: "Consumible", raridad: "común", efecto: "Cura 1d8 PV" },
        { nombre: "Capa de resistencia elemental", tipo: "Objeto maravilloso", raridad: "raro", efecto: "Resistencia a un elemento" },
        { nombre: "Botas de salto", tipo: "Objeto maravilloso", raridad: "poco común", efecto: "Salto triple" },
        { nombre: "Guantes de ladrón", tipo: "Objeto maravilloso", raridad: "poco común", efecto: "Ventaja en abrir cerraduras" },
        { nombre: "Sombrero de disfraz", tipo: "Objeto maravilloso", raridad: "raro", efecto: "Permite cambiar apariencia" },
        { nombre: "Collar de sabiduría", tipo: "Objeto maravilloso", raridad: "raro", efecto: "+2 a Sabiduría" },
        { nombre: "Escudo de dragón", tipo: "Escudo", raridad: "muy raro", bono: "+3 a CA", efecto: "Resistencia al fuego" },
        { nombre: "Armadura de escamas de dragón", tipo: "Armadura pesada", raridad: "otro", CA: "19", efecto: "Resistencia a daño" },
        { nombre: "Capa de vuelo", tipo: "Objeto maravilloso", raridad: "muy raro", efecto: "Permite volar por 10 minutos" },
        { nombre: "Botas de sigilo", tipo: "Objeto maravilloso", raridad: "raro", efecto: "Ventaja en sigilo" },
        () => ({ nombre: `${Math.floor(Math.random() * 101) + 50} monedas de plata`, tipo: "Tesoro", raridad: "común" })
    ],
    mesa: [
        { nombre: "Libro de conjuros", tipo: "Objeto", raridad: "común", efecto: "Contiene conjuros de nivel 1" },
        { nombre: "Varita de luz", tipo: "Varita", raridad: "común", efecto: "Produce luz mágica" },
        { nombre: "Cristal de enfoque", tipo: "Objeto", raridad: "poco común", efecto: "+1 a CD de conjuros" },
        { nombre: "Amuleto de protección", tipo: "Objeto maravilloso", raridad: "poco común", efecto: "+1 a salvaciones" },
        { nombre: "Mapa mágico", tipo: "Objeto", raridad: "raro", efecto: "Revela ubicación de tesoros" },
        { nombre: "Pluma de ave rara", tipo: "Objeto", raridad: "común", efecto: "Material valioso (10 po)" },
        { nombre: "Pergamino de invocación", tipo: "Conjuro", raridad: "raro", efecto: "Invoca criatura CR 2" },
        { nombre: "Bolsa de componentes mágicos", tipo: "Objeto", raridad: "común", efecto: "Necesario para lanzar conjuros" },
        { nombre: "Pequeño relicario", tipo: "Objeto religioso", raridad: "común", efecto: "Protección menor contra no-muertos" },
        { nombre: "Tintero mágico", tipo: "Objeto", raridad: "común", efecto: "No se acaba nunca" },
        { nombre: "Reloj de arena encantado", tipo: "Objeto", raridad: "raro", efecto: "Controla el tiempo por 1 minuto" },
        { nombre: "Lámpara de escritorio mágica", tipo: "Objeto", raridad: "común", efecto: "Ilumina con luz mágica" },
        { nombre: "Bolsa de polvo de inspiración", tipo: "Consumible", raridad: "poco común", efecto: "Ventaja en la próxima tirada de habilidad" },
        () => ({ nombre: `${Math.floor(Math.random() * 21) + 5} monedas de oro`, tipo: "Tesoro", raridad: "común" })
    ],
    escritorio: [
        { nombre: "Pluma mágica", tipo: "Herramienta", raridad: "común", efecto: "Escribe sin gastar tinta" },
        { nombre: "Set de escritura", tipo: "Herramienta", raridad: "común", efecto: "Permite escribir cartas mágicas" },
        { nombre: "Libro de recetas mágicas", tipo: "Libro", raridad: "poco común", efecto: "Recetas para pociones raras" },
        { nombre: "Caja de sellos", tipo: "Herramienta", raridad: "común", efecto: "Sella documentos con magia" },
        { nombre: "Reloj de arena encantado", tipo: "Objeto", raridad: "raro", efecto: "Controla el tiempo por 1 minuto" },
        { nombre: "Lámpara de escritorio mágica", tipo: "Objeto", raridad: "común", efecto: "Ilumina con luz mágica" },
        { nombre: "Bolsa de polvo de inspiración", tipo: "Consumible", raridad: "poco común", efecto: "Ventaja en la próxima tirada de habilidad" },
        { nombre: "Diario secreto", tipo: "Libro", raridad: "raro", efecto: "Contiene secretos mágicos" },
        { nombre: "Mapa de rutas ocultas", tipo: "Mapa", raridad: "raro", efecto: "Revela caminos secretos" },
        { nombre: "Pergamino de protección", tipo: "Pergamino", raridad: "muy raro", efecto: "Protege contra daño por 1 minuto" },
        { nombre: "Amuleto de concentración", tipo: "Amuleto", raridad: "poco común", efecto: "Ventaja en concentración" },
        { nombre: "Caja de tinta eterna", tipo: "Herramienta", raridad: "común", efecto: "Nunca se agota" },
        { nombre: "Libro de historia antigua", tipo: "Libro", raridad: "común", efecto: "Información valiosa" },
        () => ({ nombre: `${Math.floor(Math.random() * 31) + 10} monedas de oro`, tipo: "Tesoro", raridad: "común" })
    ],
    cama: [
        { nombre: "Almohada de plumas", tipo: "Objeto", raridad: "común", efecto: "Descanso confortable, recupera 1d4 PV" },
        { nombre: "Manta cálida", tipo: "Objeto", raridad: "común", efecto: "Protege contra frío" },
        { nombre: "Colchón mullido", tipo: "Objeto", raridad: "común", efecto: "Recupera 1d4 PV extra al dormir" },
        { nombre: "Sábana limpia", tipo: "Objeto", raridad: "común", efecto: "Mejora descanso" },
        { nombre: "Cojín decorativo", tipo: "Objeto", raridad: "común", efecto: "Decorativo" },
        { nombre: "Frasco de sueños", tipo: "Consumible", raridad: "raro", efecto: "Induce sueños lúcidos" },
        { nombre: "Caja de música mágica", tipo: "Objeto", raridad: "poco común", efecto: "Relaja y cura estrés" },
        { nombre: "Cortina de protección", tipo: "Objeto", raridad: "común", efecto: "Bloquea la luz y el sonido" },
        { nombre: "Amuleto de descanso", tipo: "Amuleto", raridad: "raro", efecto: "Duplica la recuperación durante el sueño" },
        { nombre: "Bolsa de plumas mágicas", tipo: "Consumible", raridad: "común", efecto: "Cura 1d6 PV" },
        { nombre: "Manta de protección mágica", tipo: "Objeto", raridad: "poco común", efecto: "Resistencia a daño psíquico" },
        { nombre: "Colchón de sueños proféticos", tipo: "Objeto", raridad: "raro", efecto: "Sueños proféticos" },
        { nombre: "Sábana de regeneración", tipo: "Objeto", raridad: "muy raro", efecto: "Regenera todos los PV al dormir" },
        { nombre: "Cojín de inspiración divina", tipo: "Objeto", raridad: "otro", efecto: "Otorga inspiración divina" },
        () => ({ nombre: `${Math.floor(Math.random() * 21) + 5} monedas de oro`, tipo: "Tesoro", raridad: "común" })
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
