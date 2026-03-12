"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StarshipCollection = void 0;
const BasicGalacticCollection_1 = require("./BasicGalacticCollection");
/**
 * Colección especializada en naves espaciales.
 * Implementa la búsqueda por poder específica para clases de nave.
 *
 * @class
 * @extends {BasicGalacticCollection<Starship>}
 */
class StarshipCollection extends BasicGalacticCollection_1.BasicGalacticCollection {
    /**
     * Busca naves por su clase específica.
     *
     * @param power - Clase de nave a filtrar
     * @returns Array de naves que tienen la clase especificada
     *
     * @override
     */
    searchPower(power) {
        return this.items.filter((ship) => ship.starshipClass === power);
    }
}
exports.StarshipCollection = StarshipCollection;
//# sourceMappingURL=StarshipCollection.js.map