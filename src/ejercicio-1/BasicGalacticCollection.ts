import * as Types from './GalacticRegistry';

/**
 * Clase abstracta base para todas las colecciones galácticas.
 * Implementa la lógica común de almacenamiento y búsquedas básicas.
 * 
 * @typeParam T - Tipo de entidad que debe extender {@link Types.GalacticEntity}
 * @abstract
 */
export abstract class BasicGalacticCollection<T extends Types.GalacticEntity> 
  implements Types.GalacticRegistry<T> 
{
  protected items: T[] = [];

  add(entity: T): void {
    this.items.push(entity);
  }

  /**
   * @remarks
   * La eliminación se realiza por nombre asumiendo que es único.
   */
  remove(entity: T): void {
    const index = this.items.findIndex(item => item.name === entity.name);
    if (index !== -1) this.items.splice(index, 1);
  }

  getAll(): T[] {
    return this.items;
  }

  size(): number {
    return this.items.length;
  }

  /**
   * @remarks
   * La búsqueda no distingue entre mayúsculas y minúsculas.
   */
  searchName(nameEntity: string): T[] {
    return this.items.filter((entity) => 
      entity.name.toLowerCase() === nameEntity.toLowerCase()
    );
  }

  searchAffiliation(affiliationEntity: Types.Affiliation): T[] {
    return this.items.filter((entity) => 
      entity.affiliation === affiliationEntity
    );
  }

  searchYear(yearEntity: number): T[] {
    return this.items.filter((entity) => 
      entity.yearFormed === yearEntity
    );
  }

  /**
   * @remarks
   * La búsqueda no distingue entre mayúsculas y minúsculas.
   */
  searchPlanet(planetEntity: string): T[] {
    return this.items.filter((entity) => 
      entity.originPlanet.toLowerCase() === planetEntity.toLowerCase()
    );
  }

  /**
   * @remarks
   * Método abstracto que debe ser implementado por cada subclase
   * específica según el tipo de entidad que gestiona.
   * 
   * @virtual
   */
  abstract searchPower(power: any): T[];
}