import { describe, test, expect, beforeEach } from "vitest";
import { Circle, Rectangle, Triangle, AreaCalculator, Shape } from "../src/ejercicio-3/FormasGeometricas";

describe("Circle", () => {
  test("should create a circle with given radius", () => {
    const circle = new Circle(5);
    expect(circle).toBeInstanceOf(Circle);
  });

  test("should calculate area correctly", () => {
    const circle = new Circle(5);
    expect(circle.area()).toBeCloseTo(78.53981633974483, 5);
  });

  test("should calculate area correctly for radius 0", () => {
    const circle = new Circle(0);
    expect(circle.area()).toBe(0);
  });

  test("should calculate area correctly for decimal radius", () => {
    const circle = new Circle(2.5);
    expect(circle.area()).toBeCloseTo(19.634954084936208, 5);
  });
});

describe("Rectangle", () => {
  test("should create a rectangle with given width and height", () => {
    const rect = new Rectangle(4, 6);
    expect(rect).toBeInstanceOf(Rectangle);
  });

  test("should calculate area correctly", () => {
    const rect = new Rectangle(4, 6);
    expect(rect.area()).toBe(24);
  });

  test("should calculate area correctly for zero dimensions", () => {
    const rect = new Rectangle(0, 5);
    expect(rect.area()).toBe(0);
  });

  test("should calculate area correctly for decimal dimensions", () => {
    const rect = new Rectangle(3.5, 2.5);
    expect(rect.area()).toBe(8.75);
  });

  test("should calculate area correctly for square", () => {
    const square = new Rectangle(5, 5);
    expect(square.area()).toBe(25);
  });
});

describe("Triangle", () => {
  test("should create a triangle with given base and height", () => {
    const triangle = new Triangle(3, 4);
    expect(triangle).toBeInstanceOf(Triangle);
  });

  test("should calculate area correctly", () => {
    const triangle = new Triangle(3, 4);
    expect(triangle.area()).toBe(6);
  });

  test("should calculate area correctly for zero base", () => {
    const triangle = new Triangle(0, 4);
    expect(triangle.area()).toBe(0);
  });

  test("should calculate area correctly for decimal dimensions", () => {
    const triangle = new Triangle(3.5, 2.5);
    expect(triangle.area()).toBe(4.375);
  });

  test("should calculate area correctly for right triangle", () => {
    const triangle = new Triangle(6, 8);
    expect(triangle.area()).toBe(24);
  });
});

describe("AreaCalculator", () => {
  let calculator: AreaCalculator;

  beforeEach(() => {
    calculator = new AreaCalculator();
  });

  test("should calculate circle area through Shape interface", () => {
    const circle = new Circle(5);
    expect(calculator.area(circle)).toBeCloseTo(78.53981633974483, 5);
  });

  test("should calculate rectangle area through Shape interface", () => {
    const rect = new Rectangle(4, 6);
    expect(calculator.area(rect)).toBe(24);
  });

  test("should calculate triangle area through Shape interface", () => {
    const triangle = new Triangle(3, 4);
    expect(calculator.area(triangle)).toBe(6);
  });

  test("should work with array of different shapes", () => {
    const shapes = [
      new Circle(5),
      new Rectangle(4, 6),
      new Triangle(3, 4)
    ];

    const areas = shapes.map(shape => calculator.area(shape));
    
    expect(areas[0]).toBeCloseTo(78.53981633974483, 5);
    expect(areas[1]).toBe(24);
    expect(areas[2]).toBe(6);
  });

  test("should be able to add new shape without modifying calculator", () => {
    // Simulamos una nueva forma que no existía cuando se diseñó AreaCalculator
    class Square implements Shape {
      constructor(private side: number) {}
      area(): number {
        return this.side * this.side;
      }
    }

    const square = new Square(5);
    expect(calculator.area(square)).toBe(25); // Funciona sin modificar nada
  });
});

describe("Polymorphic behavior", () => {
  test("all shapes should be instances of Shape", () => {
    const shapes: Shape[] = [
      new Circle(5),
      new Rectangle(4, 6),
      new Triangle(3, 4)
    ];

    shapes.forEach(shape => {
      expect(shape).toHaveProperty("area");
      expect(typeof shape.area).toBe("function");
    });
  });

  test("should process shapes uniformly through Shape interface", () => {
    const shapes: Shape[] = [
      new Circle(5),
      new Rectangle(4, 6),
      new Triangle(3, 4)
    ];

    const results = shapes.map(shape => ({
      type: shape.constructor.name,
      area: shape.area()
    }));

    expect(results).toEqual([
      { type: "Circle", area: 78.53981633974483 },
      { type: "Rectangle", area: 24 },
      { type: "Triangle", area: 6 }
    ]);
  });
});