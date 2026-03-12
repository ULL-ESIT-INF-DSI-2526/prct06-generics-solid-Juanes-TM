"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicGalacticCollection = void 0;
/**
 * Clase abstracta base para todas las colecciones galácticas.
 * Implementa la lógica común de almacenamiento y búsquedas básicas.
 *
 * @typeParam T - Tipo de entidad que debe extender {@link Types.GalacticEntity}
 * @abstract
 */
class BasicGalacticCollection {
    items = [];
    add(entity) {
        this.items.push(entity);
    }
    /**
     * @remarks
     * La eliminación se realiza por nombre asumiendo que es único.
     */
    remove(entity) {
        const index = this.items.findIndex(item => item.name === entity.name);
        if (index !== -1)
            this.items.splice(index, 1);
    }
    getAll() {
        return this.items;
    }
    size() {
        return this.items.length;
    }
    /**
     * @remarks
     * La búsqueda no distingue entre mayúsculas y minúsculas.
     */
    searchName(nameEntity) {
        return this.items.filter((entity) => entity.name.toLowerCase() === nameEntity.toLowerCase());
    }
    searchAffiliation(affiliationEntity) {
        return this.items.filter((entity) => entity.affiliation === affiliationEntity);
    }
    searchYear(yearEntity) {
        return this.items.filter((entity) => entity.yearFormed === yearEntity);
    }
    /**
     * @remarks
     * La búsqueda no distingue entre mayúsculas y minúsculas.
     */
    searchPlanet(planetEntity) {
        return this.items.filter((entity) => entity.originPlanet.toLowerCase() === planetEntity.toLowerCase());
    }
}
exports.BasicGalacticCollection = BasicGalacticCollection;
//# sourceMappingURL=BasicGalacticCollection.js.map