import { BasicGalacticCollection } from './BasicGalacticCollection';
import { Holocron, HolocronLevel } from './GalacticRegistry';
/**
 * Colección especializada en holocrones.
 * Implementa la búsqueda por poder específica para niveles de conocimiento.
 *
 * @class
 * @extends {BasicGalacticCollection<Holocron>}
 */
export declare class HolocronCollection extends BasicGalacticCollection<Holocron> {
    /**
     * Busca holocrones por su nivel de conocimiento.
     *
     * @param power - Nivel de conocimiento a filtrar
     * @returns Array de holocrones que tienen el nivel especificado
     *
     * @override
     */
    searchPower(power: HolocronLevel): Holocron[];
}
