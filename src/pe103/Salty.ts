import {Elaborable} from './Elaborable';
/**
 * Representa la descripción de un plato salado, que viene dado por se nombre y pais de origen
 * 
 */
export type descSalty = [string, string] // [nombre, paisOrigen]

/**
 * Representa el tipo de plato saldo.
 * 
 */
export type tipoPlato = 'entrante' | 'principal' | 'guarnicion';

/**
 * Clase que representa un plato salado.
 * 
 *  @typeParam string - Tipo de entidad que debe extender.
 *  @throws Lanza un error si el nombre o el pais de origen estan vacios, o si el tiempo de preparacion es menor a 5 minutos.
 */
export class Salty implements Elaborable<string> {
  constructor ( 
    private readonly description: descSalty,
    private readonly tiempoPreparacion: number,
    private readonly tipoP: tipoPlato ) 
  {
    if (description[0].length === 0 || description[1].length === 0 || tiempoPreparacion < 5) throw new Error(`Plato invalido`);
  }
  desc(): string {
    return `${this.description[0]} ${this.description[1]}`;
  }
  time(): number {
    return this.tiempoPreparacion;
  }
  tipo(): tipoPlato {
    return this.tipoP;
  }
}