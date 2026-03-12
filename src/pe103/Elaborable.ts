/**
 * Representa la elaboración de una receta culinaria.
 * 
 * @interface
 * 
 */
export interface Elaborable<T> {
  desc(): T;
  time(): number;
}