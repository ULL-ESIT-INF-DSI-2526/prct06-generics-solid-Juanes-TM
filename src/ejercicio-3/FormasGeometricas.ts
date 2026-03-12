/* 

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rect"; width: number; height: number }
  | { kind: "tri"; base: number; height: number };

class AreaCalculator {
  area(s: Shape): number {
    switch (s.kind) {
      case "circle": return Math.PI * s.radius * s.radius;
      case "rect": return s.width * s.height;
      case "tri": return (s.base * s.height) / 2;
      default: throw new Error("Unknown shape");
    }
  }
}

Se incumplen los siguientes principios:
  - Dependency inversion principle: Ya que la clase AreaCalculator esta dependiendo de particularidades.
  - Open-closed principle: Debido a que es necesario reescribir la clase si se quiere agregar algo.
*/

/**
 * Interfaz que define el contrato para cualquier forma geométrica.
 * 
 * @remarks
 * Toda forma geométrica debe implementar este método para ser compatible
 * con el calculador de áreas.
 * 
 * @interface
 */
export interface Shape {
  /**
   * Calcula el área de la forma geométrica.
   * 
   * @returns El área calculada de la forma
   */
  area(): number;
}

/**
 * Representa un círculo.
 * 
 * @implements Shape
 * @class
 * 
 */
export class Circle implements Shape {
  /**
   * Crea una nueva instancia de Circle.
   * 
   * @param radius - Radio del círculo (debe ser positivo)
   */
  constructor(private radius: number) {}

  /**
   * 
   * @returns Área calculada como π * r²
   */
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

/**
 * Representa un rectángulo.
 * 
 * @implements Shape
 * @class
 * 
 */
export class Rectangle implements Shape {
  /**
   * Crea una nueva instancia de Rectangle.
   * 
   * @param width - Ancho del rectángulo (debe ser positivo)
   * @param height - Alto del rectángulo (debe ser positivo)
   */
  constructor(private width: number, private height: number) {}

  /**
   * 
   * @returns Área calculada como ancho * alto
   */
  area(): number {
    return this.width * this.height;
  }
}

/**
 * Representa un triángulo.
 * 
 * @implements Shape
 * @class
 * 
 */
export class Triangle implements Shape {
  /**
   * Crea una nueva instancia de Triangle.
   * 
   * @param base - Base del triángulo (debe ser positivo)
   * @param height - Altura del triángulo (debe ser positiva)
   */
  constructor(private base: number, private height: number) {}

  /**
   * 
   * @returns Área calculada como (base * altura) / 2
   */
  area(): number {
    return (this.base * this.height) / 2;
  }
}

/**
 * Calculador de áreas que trabaja con cualquier implementación de Shape.
 * 
 * @remarks
 * Aplica el principio de inversión de dependencias (DIP):
 * - Depende de la abstracción {@link Shape}, no de implementaciones concretas
 * - Nuevas formas pueden añadirse sin modificar esta clase
 * 
 * @class
 * 
 * ```
 */
export class AreaCalculator {
  /**
   * Calcula el área de cualquier forma que implemente Shape.
   * 
   * @param shape - Forma geométrica que implementa la interfaz Shape
   * @returns El área de la forma
   * 
   */
  area(shape: Shape): number {
    return shape.area();
  }
}