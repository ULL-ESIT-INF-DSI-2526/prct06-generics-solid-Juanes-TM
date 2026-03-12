"use strict";
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
class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
class Triangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return (this.width * this.height) / 2;
    }
}
class AreaCalculator {
    area(Shape) {
        return Shape.area();
    }
}
//# sourceMappingURL=FormasGeometricas.js.map