import * as Types from './GalacticRegistry';
/**
 * Clase abstracta base para todas las colecciones galácticas.
 * Implementa la lógica común de almacenamiento y búsquedas básicas.
 *
 * @typeParam T - Tipo de entidad que debe extender {@link Types.GalacticEntity}
 * @abstract
 */
export declare abstract class BasicGalacticCollection<T extends Types.GalacticEntity> implements Types.GalacticRegistry<T> {
    protected items: T[];
    add(entity: T): void;
    /**
     * @remarks
     * La eliminación se realiza por nombre asumiendo que es único.
     */
    remove(entity: T): void;
    getAll(): T[];
    size(): number;
    /**
     * @remarks
     * La búsqueda no distingue entre mayúsculas y minúsculas.
     */
    searchName(nameEntity: string): T[];
    searchAffiliation(affiliationEntity: Types.Affiliation): T[];
    searchYear(yearEntity: number): T[];
    /**
     * @remarks
     * La búsqueda no distingue entre mayúsculas y minúsculas.
     */
    searchPlanet(planetEntity: string): T[];
    /**
     * @remarks
     * Método abstracto que debe ser implementado por cada subclase
     * específica según el tipo de entidad que gestiona.
     *
     * @virtual
     */
    abstract searchPower(power: any): T[];
}
