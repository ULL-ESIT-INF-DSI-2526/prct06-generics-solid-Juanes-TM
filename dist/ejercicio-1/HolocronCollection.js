"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HolocronCollection = void 0;
const BasicGalacticCollection_1 = require("./BasicGalacticCollection");
/**
 * Colección especializada en holocrones.
 * Implementa la búsqueda por poder específica para niveles de conocimiento.
 *
 * @class
 * @extends {BasicGalacticCollection<Holocron>}
 */
class HolocronCollection extends BasicGalacticCollection_1.BasicGalacticCollection {
    /**
     * Busca holocrones por su nivel de conocimiento.
     *
     * @param power - Nivel de conocimiento a filtrar
     * @returns Array de holocrones que tienen el nivel especificado
     *
     * @override
     */
    searchPower(power) {
        return this.items.filter((holocron) => holocron.knowledgeLevel === power);
    }
}
exports.HolocronCollection = HolocronCollection;
//# sourceMappingURL=HolocronCollection.js.map