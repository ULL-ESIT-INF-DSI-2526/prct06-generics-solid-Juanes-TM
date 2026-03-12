import { Salty } from "./Salty";
import { Sweet } from "./Sweet";

/**
 * Representa un libro de recetas.
 * @typeParam T - Tipo de entidad que debe extender {@link Salty} {@link Sweet}
 * @throws Lanza un error al intentar acceder a una posicion inexsistente.
 * 
 */
export class CookBook<T extends (Salty | Sweet)> {
  private recetas: T[] = [];

  add(receta: T): void {
    this.recetas.push(receta);
  }

  size(): number {
    return this.recetas.length;
  }

  remove(index: number): void {
    if (index < this.recetas.length && index >= 0) this.recetas.splice(index, 1);
    else throw new Error(`La posicion no existe`);
  }

  get(index: number): T {
    if (index >= this.recetas.length || index < 0 ) throw new Error(`La posicion no existe`);
    return this.recetas[index];
  }

  avgTime(): number {
    let result: number = 0;
    if (this.recetas.length > 0) {
      this.recetas.forEach((receta) => {
        result = result + receta.time();
      });
      result / this.recetas.length;
    }
    return result;
  }
}