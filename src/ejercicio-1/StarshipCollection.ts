import { BasicGalacticCollection } from './BasicGalacticCollection';
import { Starship, StarshipClass } from './GalacticRegistry';

/**
 * Colección especializada en naves espaciales.
 * Implementa la búsqueda por poder específica para clases de nave.
 * 
 * @class
 * @extends {BasicGalacticCollection<Starship>}
 */
export class StarshipCollection extends BasicGalacticCollection<Starship> {
  /**
   * Busca naves por su clase específica.
   * 
   * @param power - Clase de nave a filtrar
   * @returns Array de naves que tienen la clase especificada
   * 
   * @override
   */
  searchPower(power: StarshipClass): Starship[] {
    return this.items.filter((ship) => ship.starshipClass === power);
  }
}