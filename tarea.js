// Función sumatoriaArreglo: Suma de todos los elementos de un arreglo
// Parámetros: arreglo (Array) - Un arreglo de números
// Devuelve: Number - La suma de todos los elementos del arreglo
const sumatoriaArreglo = (arreglo) => {
    return arreglo.reduce((acc, num) => acc + num, 0);
};

// Función filtrarNumerosPares: Filtrar números pares de un arreglo
// Parámetros: arreglo (Array) - Un arreglo de números
// Devuelve: Array - Un nuevo arreglo con solo los números pares del arreglo original
const filtrarNumerosPares = (arreglo) => {
    return arreglo.filter(num => num % 2 === 0);
};

// Función encontrarMaximoNumero: Encontrar el mayor número en un arreglo
// Parámetros: arreglo (Array) - Un arreglo de números
// Devuelve: Number - El mayor número en el arreglo
const encontrarMaximoNumero = (arreglo) => {
    let maximo = arreglo[0]; // Tomamos el primer elemento como candidato a máximo
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > maximo) {
            maximo = arreglo[i]; // Si encontramos un número mayor, lo actualizamos como máximo
        }
    }
    return maximo; 
};

// Función convertirAMayusculasCadenas: Convertir un arreglo de cadenas a mayúsculas
// Parámetros: arreglo (Array) - Un arreglo de cadenas
// Devuelve: Array - Un nuevo arreglo con todas las cadenas convertidas a mayúsculas
const convertirAMayusculasCadenas = (arreglo) => {
    return arreglo.map(cadena => cadena.toUpperCase());
};

// Función calcularPromedio: Calcular el promedio de un arreglo de números
// Parámetros: arreglo (Array) - Un arreglo de números
// Devuelve: Number - El promedio de los números en el arreglo
const calcularPromedio = (numeros) => {
    if (numeros.length === 0) {
        return NaN; // Devuelve NaN para un arreglo vacío
    }
    const suma = numeros.reduce((acc, curr) => acc + curr, 0);
    return suma / numeros.length;
};

// Función ordenarNumerosAscendente: Ordenar un arreglo de números de forma ascendente
// Parámetros: arreglo (Array) - Un arreglo de números
// Devuelve: Array - Un nuevo arreglo con los números ordenados de forma ascendente
const ordenarNumerosAscendente = (arreglo) => {
    return arreglo.slice().sort((a, b) => a - b);
};

// Función encontrarPrimerElemento: Encontrar el primer elemento que cumple una condición en un arreglo
// Parámetros: 
// - arreglo (Array) - Un arreglo de elementos
// - condicion (Function) - Una función de condición que devuelve true o false
// Devuelve: Any - El primer elemento que cumple con la condición, o undefined si ninguno lo hace
const encontrarPrimerElemento = (arreglo, condicion) => {
    for (let i = 0; i < arreglo.length; i++) {
        if (condicion(arreglo[i])) {
            return arreglo[i];
        }
    }
    return undefined; // Devolvemos undefined si ningún elemento cumple la condición
};

// Función contarElementos: Contar la cantidad de elementos en un arreglo
// Parámetros: arreglo (Array) - Un arreglo de elementos
// Devuelve: Number - La cantidad de elementos en el arreglo
const contarElementos = (arreglo) => {
    return arreglo.length;
};

// Función concatenarArreglos: Concatenar dos arreglos
// Parámetros: 
// - arreglo1 (Array) - El primer arreglo a concatenar
// - arreglo2 (Array) - El segundo arreglo a concatenar
// Devuelve: Array - Un nuevo arreglo que es la concatenación de los dos arreglos proporcionados
const concatenarArreglos = (arreglo1, arreglo2) => {
    return arreglo1.concat(arreglo2);
};

// Función elevarAlCuadradoNumeros: Calcular el cuadrado de cada número en un arreglo
// Parámetros: arreglo (Array) - Un arreglo de números
// Devuelve: Array - Un nuevo arreglo con los cuadrados de los números en el arreglo original
const elevarAlCuadradoNumeros = (arreglo) => {
    return arreglo.map(num => num ** 2);
};

// Función flecha para agregar habilidades a un jugador de un juego
const agregarHabilidad = (jugador, nuevaHabilidad) => {
    /*
    Parámetros de entrada:
    - jugador: objeto que representa al jugador del juego.
    - nuevaHabilidad: string que representa la nueva habilidad a agregar al jugador.

    Lo que hace la función:
    Esta función recibe un objeto de jugador y una nueva habilidad como entrada.
    Verifica si el jugador tiene un arreglo de habilidades. Si no lo tiene, lo crea.
    Luego, agrega la nueva habilidad al arreglo de habilidades del jugador si esta no existe

    Valor de retorno:
    Retorna el objeto jugador modificado con la nueva habilidad agregada.
    */
    if (!jugador.habilidades) {
        jugador.habilidades = []; // Si el jugador no tiene habilidades, creamos un arreglo vacío para almacenarlas
    }
    if (!jugador.habilidades.includes(nuevaHabilidad)) {
        jugador.habilidades.push(nuevaHabilidad); // Agregamos la nueva habilidad solo si no existe en el arreglo
    }
    return jugador; 
};

// Función para calcular la duración total de reproducción de todas las películas.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene propiedades como 'titulo' y 'duracion'.
// Retorna:
// - Un número que representa la duración total de todas las películas en minutos.
const calcularDuracionTotal = (peliculas) => {
    const duracionesValidas = peliculas.map(pelicula => (pelicula.duracion >= 0 ? pelicula.duracion : 0)); // Ignora duraciones negativas
    return duracionesValidas.reduce((acc, duracion) => acc + duracion, 0);
};


// Función para buscar películas por título y género.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene propiedades como 'titulo' y 'genero'.
// - titulo: String que representa el título a buscar.
// - genero: String que representa el género a buscar.
// Retorna:
// - Un array de objetos que representan películas que coinciden con el título y el género especificados.
const buscarPeliculas = (peliculas, titulo, genero) => {
    return peliculas.filter(pelicula => {
        // Verificar si se proporciona tanto el título como el género
        if (titulo && genero) {
            return pelicula.titulo.toLowerCase().includes(titulo.toLowerCase()) &&
                   pelicula.genero.toLowerCase() === genero.toLowerCase();
        }
        // Si solo se proporciona el título
        else if (titulo && !genero) {
            return pelicula.titulo.toLowerCase().includes(titulo.toLowerCase());
        }
        // Si solo se proporciona el género
        else if (!titulo && genero) {
            return pelicula.genero.toLowerCase() === genero.toLowerCase();
        }
        // Si no se proporciona ni el título ni el género
        else {
            return [];
        }
    });
};

// Función para calcular el promedio de puntajes de las películas.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene una propiedad 'puntaje'.
// Retorna:
// - Un número que representa el promedio de puntajes de todas las películas.
const calcularPromedioPuntajes = (peliculas) => {
    const puntajesValidos = peliculas.filter(pelicula => pelicula.puntaje >= 0);
    if (puntajesValidos.length === 0) {
        return 0; 
    }
    const sumatoriaPuntajes = puntajesValidos.reduce((acc, pelicula) => acc + pelicula.puntaje, 0);
    return sumatoriaPuntajes / puntajesValidos.length;
};

// Función para filtrar películas por año de lanzamiento.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene una propiedad 'año'.
// - año: Número que representa el año de lanzamiento a filtrar.
// Retorna:
// - Un array de objetos que representan películas lanzadas en el año especificado.
const filtrarPorAño = (peliculas, año) => {
    // Filtrar las películas por año de lanzamiento.
    año = parseInt(año); // Convierte el año a número si es un string
    return peliculas.filter(pelicula => pelicula.año === año);
};

// Función para calcular el promedio de duración de las películas por género.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene propiedades como 'duracion' y 'genero'.
// - genero: String que representa el género de las películas a considerar.
// Retorna:
// - Un número que representa el promedio de duración de las películas del género especificado.
const calcularPromedioDuracionPorGenero = (peliculas, genero) => {
    // Filtrar las películas por género.
    const peliculasDelGenero = peliculas.filter(pelicula => pelicula.genero.toLowerCase() === genero.toLowerCase());

    if (peliculasDelGenero.length === 0) {
        return 0; 
    }

    const duracionTotal = peliculasDelGenero.reduce((acumulador, pelicula) => acumulador + pelicula.duracion, 0);
    return duracionTotal / peliculasDelGenero.length;
};


// Clase base que representa un vehículo
// Clase base que representa un vehículo
class Vehiculo {
    /**
     * Constructor de la clase Vehiculo.
     * @param {string} marca - La marca del vehículo.
     * @param {string} modelo - El modelo del vehículo.
     * @param {number} año - El año de fabricación del vehículo.
     */
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año; 
    }

    /**
     * Método para obtener la información del vehículo.
     * @returns {string} - La información del vehículo en formato de cadena de texto.
     */
    obtenerInformacion() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
    }
}

// Clase que representa un automóvil
class Automovil extends Vehiculo {
    /**
     * Constructor de la clase Automovil.
     * @param {string} marca - La marca del automóvil.
     * @param {string} modelo - El modelo del automóvil.
     * @param {number} año - El año de fabricación del automóvil.
     * @param {string} color - El color del automóvil.
     * @param {number} cilindrada - La cilindrada del motor del automóvil.
     * @param {number} potencia - La potencia del motor del automóvil.
     * @param {number} numPuertas - El número de puertas del automóvil.
     * @param {number} numAsientos - El número de asientos del automóvil.
     * @param {string} tipoTransmision - El tipo de transmisión del automóvil.
     */
    constructor(marca, modelo, año, color, cilindrada, potencia, numPuertas, numAsientos, tipoTransmision) {
        super(marca, modelo, año); // Llama al constructor de la clase base Vehiculo

        this.color = color;
        this.cilindrada = cilindrada;
        this.potencia = potencia;
        this.numPuertas = numPuertas;
        this.numAsientos = numAsientos;
        this.tipoTransmision = tipoTransmision; 
    }

    /**
     * Método para obtener la información del automóvil.
     * @returns {string} - La información del automóvil en formato de cadena de texto.
     */
    obtenerInformacion() {
        return `${super.obtenerInformacion()}, Color: ${this.color}, Cilindrada: ${this.cilindrada}, Potencia: ${this.potencia}, Puertas: ${this.numPuertas}, Asientos: ${this.numAsientos}, Transmisión: ${this.tipoTransmision}`;
    }
}

// Clase que representa una motocicleta
class Motocicleta extends Vehiculo {
    /**
     * Constructor de la clase Motocicleta.
     * @param {string} marca - La marca de la motocicleta.
     * @param {string} modelo - El modelo de la motocicleta.
     * @param {number} año - El año de fabricación de la motocicleta.
     * @param {string} color - El color de la motocicleta.
     * @param {number} cilindrada - La cilindrada del motor de la motocicleta.
     * @param {number} potencia - La potencia del motor de la motocicleta.
     * @param {number} numRuedas - El número de ruedas de la motocicleta.
     * @param {string} tipo - El tipo de motocicleta (deportiva, touring, etc.).
     */
    constructor(marca, modelo, año, color, cilindrada, potencia, numRuedas, tipo) {
        super(marca, modelo, año); // Llama al constructor de la clase base Vehiculo

        this.color = color;
        this.cilindrada = cilindrada;
        this.potencia = potencia;
        this.numRuedas = numRuedas;
        this.tipo = tipo;
    }

    /**
     * Método para obtener la información de la motocicleta.
     * @returns {string} - La información de la motocicleta en formato de cadena de texto.
     */
    obtenerInformacion() {
        return `${super.obtenerInformacion()}, Color: ${this.color}, Cilindrada: ${this.cilindrada}, Potencia: ${this.potencia}, Ruedas: ${this.numRuedas}, Tipo: ${this.tipo}`;
    }
}

// Clase que representa un camión
class Camion extends Vehiculo {
    /**
     * Constructor de la clase Camion.
     * @param {string} marca - La marca del camión.
     * @param {string} modelo - El modelo del camión.
     * @param {number} año - El año de fabricación del camión.
     * @param {string} color - El color del camión.
     * @param {number} cilindrada - La cilindrada del motor del camión.
     * @param {number} potencia - La potencia del motor del camión.
     * @param {number} numEjes - El número de ejes del camión.
     * @param {number} capacidadCarga - La capacidad de carga del camión en toneladas.
     * @param {string} tipoCarroceria - El tipo de carrocería del camión (remolque, furgón, etc.).
     */
    constructor(marca, modelo, año, color, cilindrada, potencia, numEjes, capacidadCarga, tipoCarroceria) {
        super(marca, modelo, año); // Llama al constructor de la clase base Vehiculo

        this.color = color;
        this.cilindrada = cilindrada;
        this.potencia = potencia;
        this.numEjes = numEjes;
        this.capacidadCarga = capacidadCarga;
        this.tipoCarroceria = tipoCarroceria;
    }

    /**
     * Método para obtener la información del camión.
     * @returns {string} - La información del camión en formato de cadena de texto.
     */
    obtenerInformacion() {
        return `${super.obtenerInformacion()}, Color: ${this.color}, Cilindrada: ${this.cilindrada}, Potencia: ${this.potencia}, Ejes: ${this.numEjes}, Capacidad de Carga: ${this.capacidadCarga}, Tipo de Carrocería: ${this.tipoCarroceria}`;
    }
}

// Clase que representa un autobús
class Autobus extends Vehiculo {
    /**
     * Constructor de la clase Autobus.
     * @param {string} marca - La marca del autobús.
     * @param {string} modelo - El modelo del autobús.
     * @param {number} año - El año de fabricación del autobús.
     * @param {string} color - El color del autobús.
     * @param {number} cilindrada - La cilindrada del motor del autobús.
     * @param {number} potencia - La potencia del motor del autobús.
     * @param {number} capacidadPasajeros - La capacidad de pasajeros del autobús.
     * @param {string} tipoCombustible - El tipo de combustible del autobús.
     * @param {string} tipoMotor - El tipo de motor del autobús (diésel, gasolina, eléctrico, etc.).
     */
    constructor(marca, modelo, año, color, cilindrada, potencia, capacidadPasajeros, tipoCombustible, tipoMotor) {
        super(marca, modelo, año); // Llama al constructor de la clase base Vehiculo

        this.color = color;
        this.cilindrada = cilindrada;
        this.potencia = potencia;
        this.capacidadPasajeros = capacidadPasajeros;
        this.tipoCombustible = tipoCombustible;
        this.tipoMotor = tipoMotor;
    }

    /**
     * Método para obtener la información del autobús.
     * @returns {string} - La información del autobús en formato de cadena de texto.
     */
    obtenerInformacion() {
        return `${super.obtenerInformacion()}, Color: ${this.color}, Cilindrada: ${this.cilindrada}, Potencia: ${this.potencia}, Pasajeros: ${this.capacidadPasajeros}, Combustible: ${this.tipoCombustible}, Tipo de Motor: ${this.tipoMotor}`;
    }
}

// Clase que representa una bicicleta
class Bicicleta extends Vehiculo {
    /**
     * Constructor de la clase Bicicleta.
     * @param {string} marca - La marca de la bicicleta.
     * @param {string} modelo - El modelo de la bicicleta.
     * @param {number} año - El año de fabricación de la bicicleta.
     * @param {string} tipo - El tipo de bicicleta (montaña, carretera, urbana, etc.).
     * @param {number} numMarchas - El número de marchas de la bicicleta.
     * @param {string} material - El material del que está hecha la bicicleta (aluminio, acero, carbono, etc.).
     * @param {string} suspencion - El tipo de suspensión de la bicicleta (delantera, trasera, doble, rígida, etc.).
     * @param {string} frenos - El tipo de frenos de la bicicleta (disco, v-brake, caliper, etc.).
     * @param {string} tipoManubrio - El tipo de manubrio de la bicicleta (recto, curvo, doble altura, etc.).
     */
    constructor(marca, modelo, año, tipo, numMarchas, material, suspencion, frenos, tipoManubrio) {
        super(marca, modelo, año); // Llama al constructor de la clase base Vehiculo

        this.tipo = tipo;
        this.numMarchas = numMarchas;
        this.material = material;
        this.suspencion = suspencion;
        this.frenos = frenos;
        this.tipoManubrio = tipoManubrio;
    }

    /**
     * Método para obtener la información de la bicicleta.
     * @returns {string} - La información de la bicicleta en formato de cadena de texto.
     */
    obtenerInformacion() {
        return `${super.obtenerInformacion()}, Tipo: ${this.tipo}, Marchas: ${this.numMarchas}, Material: ${this.material}, Suspensión: ${this.suspencion}, Frenos: ${this.frenos}, Manubrio: ${this.tipoManubrio}`;
    }
}

// Crear instancias de vehículos
const automovil1 = new Automovil("Ford", "Focus", 2019, "Gris", 1800, 120, 4, 5, "Manual");
const motocicleta1 = new Motocicleta("Suzuki", "GSX-R1000", 2020, "Azul", 999, 202, 2, "Deportiva");
const camion1 = new Camion("MAN", "TGX", 2021, "Amarillo", 20000, 650, 4, 50, "Remolque");
const autobus1 = new Autobus("Iveco", "Crossway", 2023, "Blanco", 3500, 210, 30, "Diésel", "Diésel");
const bicicleta1 = new Bicicleta("Giant", "Anthem Advanced", 2022, "Montaña", 12, "Carbono", "Delantera", "Disco", "Doble Altura");
const avion1 = new Avion("Airbus", "A320", 2020, "Jet", 180, "Turbina", 5500, 850, 48000);

// Mostrar información de los vehículos
console.log("Información de los vehículos:");
console.log(automovil1.obtenerInformacion());
console.log(motocicleta1.obtenerInformacion());
console.log(camion1.obtenerInformacion());
console.log(autobus1.obtenerInformacion());
console.log(bicicleta1.obtenerInformacion());
console.log(avion1.obtenerInformacion());
