import {Elaborable} from './Elaborable';

/**
 * Representa a un postre por su nombre y dificultad.
 * 
 * @interface
 */
export interface Postre {
  nombre: string;
  dificultad: number;
}

/**
 * Clase que representa un plato dulce.
 * 
 *  @typeParam Postre - Tipo de entidad que debe extender.
 *  @throws Lanza un error si el nombre está vacio, o si la dificultad es menor que 0 o mayor que 10; 
 *  o cuando cualquier tiempo es menor a 5 minutos.
 */
export class Sweet implements Elaborable<Postre> {
  constructor (
    private readonly description: Postre,
    private readonly _preparacion: number,
    private readonly _horneado: number,
    private readonly _refrigeracion: number
  ) 
  {
    if(description.nombre.length === 0 || description.dificultad < 1 || description.dificultad > 10 ||
      _preparacion < 5 || _horneado < 5 || _refrigeracion < 5) throw new Error(`Postre invalido`);
  }
  desc(): Postre {
    return this.description;
  }
  time(): number {
    return this._preparacion + this._horneado + this._refrigeracion;
  }
  get preparacion(): number {
    return this._preparacion;
  }

  get horneado(): number {
    return this._horneado;
  }

  get refrigeracion(): number {
    return this._refrigeracion;
  }
}