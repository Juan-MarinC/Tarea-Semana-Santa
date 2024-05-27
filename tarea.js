// Función sumArray: Suma de todos los elementos de un array
// Parámetros: array (Array) - Un array de números
// Devuelve: Number - La suma de todos los elementos del array
const sumArray = (array) => {
    return array.reduce((acc, num) => acc + num, 0);
};

// Función filterEvenNumbers: Filtrar números pares de un array
// Parámetros: array (Array) - Un array de números
// Devuelve: Array - Un nuevo array con solo los números pares del array original
const filterEvenNumbers = (array) => {
    return array.filter(num => num % 2 === 0);
};

// Función findMaxNumber: Encontrar el mayor número en un array
// Parámetros: array (Array) - Un array de números
// Devuelve: Number - El mayor número en el array
const findMaxNumber = (array) => {
    let max = array[0]; // Tomamos el primer elemento como candidato a máximo
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]; // Si encontramos un número mayor, lo actualizamos como máximo
        }
    }
    return max;
};

// Función toUpperCaseStrings: Convertir un array de strings a mayúsculas
// Parámetros: array (Array) - Un array de strings
// Devuelve: Array - Un nuevo array con todas las strings convertidas a mayúsculas
const toUpperCaseStrings = (array) => {
    return array.map(str => str.toUpperCase());
};

// Función calculateAverage: Calcular el promedio de un array de números
// Parámetros: array (Array) - Un array de números
// Devuelve: Number - El promedio de los números en el array
const calculateAverage = (numbers) => {
    if (numbers.length === 0) {
        return NaN; // Devuelve NaN para un array vacío
    }
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
};

// Función sortNumbersAscending: Ordenar un array de números de forma ascendente
// Parámetros: array (Array) - Un array de números
// Devuelve: Array - Un nuevo array con los números ordenados de forma ascendente
const sortNumbersAscending = (array) => {
    return array.slice().sort((a, b) => a - b);
};

// Función findFirstElement: Encontrar el primer elemento que cumple una condición en un array
// Parámetros: 
// - array (Array) - Un array de elementos
// - condition (Function) - Una función de condición que devuelve true o false
// Devuelve: Any - El primer elemento que cumple con la condición, o undefined si ninguno lo hace
const findFirstElement = (array, condition) => {
    for (let i = 0; i < array.length; i++) {
        if (condition(array[i])) {
            return array[i];
        }
    }
    return undefined; // Devolvemos undefined si ningún elemento cumple la condición
};

// Función countElements: Contar la cantidad de elementos en un array
// Parámetros: array (Array) - Un array de elementos
// Devuelve: Number - La cantidad de elementos en el array
const countElements = (array) => {
    return array.length;
};

// Función concatenateArrays: Concatenar dos arrays
// Parámetros: 
// - array1 (Array) - El primer array a concatenar
// - array2 (Array) - El segundo array a concatenar
// Devuelve: Array - Un nuevo array que es la concatenación de los dos arrays proporcionados
const concatenateArrays = (array1, array2) => {
    return array1.concat(array2);
};

// Función squareNumbers: Calcular el cuadrado de cada número en un array
// Parámetros: array (Array) - Un array de números
// Devuelve: Array - Un nuevo array con los cuadrados de los números en el array original
const squareNumbers = (array) => {
    return array.map(num => num ** 2);
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
class Vehiculo {
    /**
     * Constructor de la clase Vehiculo.
     * @param {string} marca - La marca del vehículo.
     * @param {string} modelo - El modelo del vehículo.
     * @param {number} año - El año del vehículo.
     */
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    /**
     * Método que devuelve una descripción del vehículo.
     * @returns {string} Una cadena que describe el vehículo.
     */
    obtenerDescripcion() {
        return `Vehículo: ${this.marca} ${this.modelo} (${this.año})`;
    }
}

// Clase que representa un automóvil, que hereda de Vehiculo
class Automovil extends Vehiculo {
    /**
     * Constructor de la clase Automovil.
     * @param {string} marca - La marca del automóvil.
     * @param {string} modelo - El modelo del automóvil.
     * @param {number} año - El año del automóvil.
     * @param {number} puertas - El número de puertas del automóvil.
     */
    constructor(marca, modelo, año, puertas) {
        super(marca, modelo, año); // Llama al constructor de la clase base
        this.puertas = puertas;
    }

    /**
     * Método que devuelve una descripción del automóvil.
     * @returns {string} Una cadena que describe el automóvil.
     */
    obtenerDescripcion() {
        return `Automóvil: ${this.marca} ${this.modelo} (${this.año}), ${this.puertas} puertas`;
    }
}

// Clase que representa una motocicleta, que hereda de Vehiculo
class Motocicleta extends Vehiculo {
    /**
     * Constructor de la clase Motocicleta.
     * @param {string} marca - La marca de la motocicleta.
     * @param {string} modelo - El modelo de la motocicleta.
     * @param {number} año - El año de la motocicleta.
     * @param {number} cilindrada - La cilindrada de la motocicleta en cc.
     */
    constructor(marca, modelo, año, cilindrada) {
        super(marca, modelo, año); // Llama al constructor de la clase base
        this.cilindrada = cilindrada;
    }

    /**
     * Método que devuelve una descripción de la motocicleta.
     * @returns {string} Una cadena que describe la motocicleta.
     */
    obtenerDescripcion() {
        return `Motocicleta: ${this.marca} ${this.modelo} (${this.año}), ${this.cilindrada}cc`;
    }
}

// Clase que representa un camión, que hereda de Vehiculo
class Camion extends Vehiculo {
    /**
     * Constructor de la clase Camion.
     * @param {string} marca - La marca del camión.
     * @param {string} modelo - El modelo del camión.
     * @param {number} año - El año del camión.
     * @param {number} capacidadCarga - La capacidad de carga del camión en toneladas.
     */
    constructor(marca, modelo, año, capacidadCarga) {
        super(marca, modelo, año); // Llama al constructor de la clase base
        this.capacidadCarga = capacidadCarga;
    }

    /**
     * Método que devuelve una descripción del camión.
     * @returns {string} Una cadena que describe el camión.
     */
    obtenerDescripcion() {
        return `Camión: ${this.marca} ${this.modelo} (${this.año}), Capacidad de carga: ${this.capacidadCarga} toneladas`;
    }
}

// Clase que representa un autobús, que hereda de Vehiculo
class Autobus extends Vehiculo {
    /**
     * Constructor de la clase Autobus.
     * @param {string} marca - La marca del autobús.
     * @param {string} modelo - El modelo del autobús.
     * @param {number} año - El año del autobús.
     * @param {number} capacidadPasajeros - La capacidad de pasajeros del autobús.
     */
    constructor(marca, modelo, año, capacidadPasajeros) {
        super(marca, modelo, año); // Llama al constructor de la clase base
        this.capacidadPasajeros = capacidadPasajeros;
    }

    /**
     * Método que devuelve una descripción del autobús.
     * @returns {string} Una cadena que describe el autobús.
     */
    obtenerDescripcion() {
        return `Autobús: ${this.marca} ${this.modelo} (${this.año}), Capacidad de pasajeros: ${this.capacidadPasajeros}`;
    }
}

// Clase que representa una bicicleta, que hereda de Vehiculo
class Bicicleta extends Vehiculo {
    /**
     * Constructor de la clase Bicicleta.
     * @param {string} marca - La marca de la bicicleta.
     * @param {string} modelo - El modelo de la bicicleta.
     * @param {number} año - El año de la bicicleta.
     * @param {boolean} tieneCambio - Indica si la bicicleta tiene cambio de marchas.
     */
    constructor(marca, modelo, año, tieneCambio) {
        super(marca, modelo, año); // Llama al constructor de la clase base
        this.tieneCambio = tieneCambio;
    }

    /**
     * Método que devuelve una descripción de la bicicleta.
     * @returns {string} Una cadena que describe la bicicleta.
     */
    obtenerDescripcion() {
        const cambio = this.tieneCambio ? 'con cambio' : 'sin cambio';
        return `Bicicleta: ${this.marca} ${this.modelo} (${this.año}), ${cambio}`;
    }
}

// Exportar las funciones y clases para su uso en otros archivos
module.exports = {
    sumArray,
    filterEvenNumbers,
    findMaxNumber,
    toUpperCaseStrings,
    calculateAverage,
    sortNumbersAscending,
    findFirstElement,
    countElements,
    concatenateArrays,
    squareNumbers,
    agregarHabilidad,
    calcularDuracionTotal,
    buscarPeliculas,
    calcularPromedioPuntajes,
    filtrarPorAño,
    calcularPromedioDuracionPorGenero,
    Vehiculo, Automovil, Motocicleta, Camion, Autobus, Bicicleta
};
