import { BasicGalacticCollection } from './BasicGalacticCollection';
import { Jedi, JediRank } from './GalacticRegistry';

/**
 * Colección especializada en maestros Jedi.
 * Implementa la búsqueda por poder específica para rangos Jedi.
 * 
 * @class
 * @extends {BasicGalacticCollection<Jedi>}
 * 
 */
export class JediMasterCollection extends BasicGalacticCollection<Jedi> {
  /**
   * Busca Jedi por su rango específico.
   * 
   * @param power - Rango Jedi a filtrar
   * @returns Array de Jedi que tienen el rango especificado
   * 
   * @override
   */
  searchPower(power: JediRank): Jedi[] {
    return this.items.filter((jedi) => jedi.rank === power);
  }
}