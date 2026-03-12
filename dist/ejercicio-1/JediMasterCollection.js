"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JediMasterCollection = void 0;
const BasicGalacticCollection_1 = require("./BasicGalacticCollection");
/**
 * Colección especializada en maestros Jedi.
 * Implementa la búsqueda por poder específica para rangos Jedi.
 *
 * @class
 * @extends {BasicGalacticCollection<Jedi>}
 *
 */
class JediMasterCollection extends BasicGalacticCollection_1.BasicGalacticCollection {
    /**
     * Busca Jedi por su rango específico.
     *
     * @param power - Rango Jedi a filtrar
     * @returns Array de Jedi que tienen el rango especificado
     *
     * @override
     */
    searchPower(power) {
        return this.items.filter((jedi) => jedi.rank === power);
    }
}
exports.JediMasterCollection = JediMasterCollection;
//# sourceMappingURL=JediMasterCollection.js.map