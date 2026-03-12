interface Shape {
    area(): number;
}
declare class Circle implements Shape {
    private radius;
    constructor(radius: number);
    area(): number;
}
declare class Rectangle implements Shape {
    private width;
    private height;
    constructor(width: number, height: number);
    area(): number;
}
declare class Triangle implements Shape {
    private width;
    private height;
    constructor(width: number, height: number);
    area(): number;
}
declare class AreaCalculator {
    area(Shape: Shape): number;
}
