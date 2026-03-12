/**
 * Representa las afiliaciones políticas disponibles en la galaxia.
 *
 * @remarks
 * Una entidad galáctica puede pertenecer a una de estas facciones.
 *
 */
export type Affiliation = 'Republic' | 'Empire' | 'Sith' | 'Independent';
/**
 * Representa los rangos dentro de la orden Jedi.
 *
 * @remarks
 * Los rangos siguen una jerarquía ascendente desde Youngling hasta Grand Master.
 *
 */
export type JediRank = 'Youngling' | 'Padawan' | 'Jedi Knight' | 'Jedi Master' | 'Jedi Grand Master';
/**
 * Representa las diferentes clases de naves espaciales.
 *
 * @remarks
 * Clasificación basada en tamaño, función y capacidad de combate.
 *
 */
export type StarshipClass = 'Fighter' | 'Corvette' | 'Frigate' | 'Cruiser' | 'Destroyer' | 'Dreadnought' | 'Carrier' | 'Shuttle' | 'Transport' | 'Bomber' | 'Interceptor' | 'Scout';
/**
 * Representa los niveles de conocimiento almacenados en un holocrón.
 *
 * @remarks
 * - 1: Conocimiento básico
 * - 2: Conocimiento intermedio
 * - 3: Conocimiento avanzado
 * - 4: Conocimiento de maestro
 * - 5: Conocimiento restringido/prohibido
 *
 */
export type HolocronLevel = 1 | 2 | 3 | 4 | 5;
/**
 * Interfaz base para todas las entidades galácticas.
 *
 * @remarks
 * Define las propiedades fundamentales que toda entidad debe tener.
 * Sirve como contrato base para extensiones específicas.
 *
 * @interface
 */
export interface GalacticEntity {
    name: string;
    affiliation: Affiliation;
    yearFormed: number;
    originPlanet: string;
}
/**
 * Representa un maestro Jedi con su rango específico.
 *
 * @extends GalacticEntity
 * @interface
 *
 */
export interface Jedi extends GalacticEntity {
    type: 'jedi';
    rank: JediRank;
}
/**
 * Representa una nave espacial con su clasificación específica.
 *
 * @extends GalacticEntity
 * @interface
 */
export interface Starship extends GalacticEntity {
    type: 'starship';
    starshipClass: StarshipClass;
}
/**
 * Representa un holocrón con su nivel de conocimiento.
 *
 * @extends GalacticEntity
 * @interface
 */
export interface Holocron extends GalacticEntity {
    type: 'holocron';
    knowledgeLevel: HolocronLevel;
}
/**
 * Interfaz para búsqueda por nombre.
 *
 * @typeParam T - Tipo de entidad sobre la que se realiza la búsqueda
 * @interface
 */
export interface SearchByName<T> {
    /**
     * Busca entidades por nombre exacto.
     *
     * @param name - Nombre a buscar
     * @returns Array de entidades que coinciden exactamente con el nombre
     */
    searchName(name: string): T[];
}
/**
 * Interfaz para búsqueda por afiliación.
 *
 * @typeParam T - Tipo de entidad sobre la que se realiza la búsqueda
 * @interface
 */
export interface SearchByAffiliation<T> {
    /**
     * Busca entidades por afiliación política.
     *
     * @param affiliation - Afiliación a filtrar
     * @returns Array de entidades con la afiliación especificada
     */
    searchAffiliation(affiliation: Affiliation): T[];
}
/**
 * Interfaz para búsqueda por año.
 *
 * @typeParam T - Tipo de entidad sobre la que se realiza la búsqueda
 * @interface
 */
export interface SearchByYear<T> {
    /**
     * Busca entidades por año de formación.
     *
     * @param year - Año exacto a filtrar
     * @returns Array de entidades formadas en el año especificado
     */
    searchYear(year: number): T[];
}
/**
 * Interfaz para búsqueda por planeta de origen.
 *
 * @typeParam T - Tipo de entidad sobre la que se realiza la búsqueda
 * @interface
 */
export interface SearchByPlanet<T> {
    /**
     * Busca entidades por planeta de origen.
     *
     * @param planet - Planeta a filtrar
     * @returns Array de entidades originarias del planeta especificado
     */
    searchPlanet(planet: string): T[];
}
/**
 * Interfaz para búsqueda por poder/clase/nivel.
 *
 * @typeParam T - Tipo de entidad sobre la que se realiza la búsqueda
 * @typeParam P - Tipo de poder/clase/nivel a buscar (genérico)
 * @interface
 */
export interface SearchByPower<T, P = JediRank | StarshipClass | HolocronLevel> {
    /**
     * Busca entidades por su nivel de poder, clase o rango.
     *
     * @param power - Valor de poder/clase/rango a filtrar
     * @returns Array de entidades que coinciden con el poder especificado
     */
    searchPower(power: P): T[];
}
/**
 * Interfaz principal del registro galáctico.
 * Combina todas las capacidades de búsqueda y gestión básica.
 *
 * @typeParam T - Tipo de entidad gestionada por el registro
 * @interface
 */
export interface GalacticRegistry<T> extends SearchByName<T>, SearchByAffiliation<T>, SearchByPlanet<T>, SearchByPower<T, any>, SearchByYear<T> {
    /**
     * Añade una nueva entidad al registro.
     *
     * @param entity - Entidad a añadir
     */
    add(entity: T): void;
    /**
     * Elimina una entidad del registro.
     *
     * @param entity - Entidad a eliminar (por referencia)
     */
    remove(entity: T): void;
    /**
     * Obtiene todas las entidades del registro.
     *
     * @returns Array con todas las entidades almacenadas
     */
    getAll(): T[];
    /**
     * Obtiene el número total de entidades en el registro.
     *
     * @returns Cantidad de entidades almacenadas
     */
    size(): number;
}
