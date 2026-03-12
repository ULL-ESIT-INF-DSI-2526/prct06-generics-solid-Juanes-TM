import { describe, test, expect, beforeEach, vi } from "vitest";
import {Elaborable} from '../src/pe103/Elaborable';
import {Salty, descSalty, tipoPlato} from '../src/pe103/Salty';
import {Sweet, Postre} from '../src/pe103/Sweet';
import {CookBook} from '../src/pe103/CookBook';

describe("Receta salada", () => {
  test("Se inicializa correctamente", () => {
    const receta = new Salty(["Tortilla", "Espana"], 30, "guarnicion");
    expect(receta.desc()).toBe("Tortilla Espana");
    expect(receta.time()).toBe(30);
    expect(receta.tipo()).toBe("guarnicion");
  });

  test("Se incializa mal", () => {
    expect(() => {const prueba = new Salty(["", "Espana"], 30, "guarnicion");}).toThrow()
    expect(() => {const prueba = new Salty(["Tortilla", ""], 30, "guarnicion");}).toThrow()
    expect(() => {const prueba = new Salty(["Tortilla", "Espana"], 2, "guarnicion");}).toThrow()
  })
});

describe("Receta dulce", () => {
  test("Se inicializa correctamente", () => {
    const magdalena = {
      nombre: "magdalena",
      dificultad: 3
    }
    const receta = new Sweet(magdalena, 10, 10, 10);
    expect(receta.desc()).equal(magdalena);
    expect(receta.time()).toBe(30);
  });

  test("Se incializa mal", () => {
    const magdalena1 = {
      nombre: "",
      dificultad: 3
    }
    const magdalena2 = {
      nombre: "magdalena",
      dificultad: -3
    }

    const magdalena3 = {
      nombre: "magdalena",
      dificultad: 3
    }
    expect(() => {const prueba = new Sweet(magdalena1, 10, 10, 10);}).toThrow();
    expect(() => {const prueba = new Sweet(magdalena2, 10, 10, 10);}).toThrow();
    expect(() => {const prueba = new Sweet(magdalena3, 2, 10, 10);}).toThrow();
    expect(() => {const prueba = new Sweet(magdalena3, 10, 2, 10);}).toThrow();
    expect(() => {const prueba = new Sweet(magdalena3, 10, 10, 2);}).toThrow();
  })
});


describe("Recetario", () => {
  test("Se añaden recetas", () => {
    let recetario = new CookBook;
    expect(recetario.size()).toBe(0);
    const HotDog = new Salty(["HotDog", "USA"], 5, "entrante");
      const magdalena = {
      nombre: "magdalena",
      dificultad: 3
    }
    const mag = new Sweet(magdalena, 10, 10, 10);
    recetario.add(HotDog);
    recetario.add(mag);
    expect(recetario.size()).toBe(2);
  });

  test("Se eliminan recetas", () => {
    let recetario = new CookBook;
    const HotDog = new Salty(["HotDog", "USA"], 5, "entrante");
      const magdalena = {
      nombre: "magdalena",
      dificultad: 3
    }
    const mag = new Sweet(magdalena, 10, 10, 10);
    recetario.add(HotDog);
    recetario.add(mag);
    expect(recetario.size()).toBe(2);
    recetario.remove(1);
    expect(recetario.size()).toBe(1);
  });

  test("Se retorna una receta", () => {
    let recetario = new CookBook;
    const HotDog = new Salty(["HotDog", "USA"], 5, "entrante");
    recetario.add(HotDog);
    expect(recetario.get(0)).equal(HotDog);
  });

  test("Se intenta acceder a un posicion inexistente", () => {
    let recetario = new CookBook;
    const HotDog = new Salty(["HotDog", "USA"], 5, "entrante");
    recetario.add(HotDog);
    expect(() => {recetario.get(1)}).toThrow();
    expect(() => {recetario.remove(2)}).toThrow();
  });

  test("media de tiempo", () => {
    let recetario = new CookBook;
    const HotDog = new Salty(["HotDog", "USA"], 10, "entrante");
      const magdalena = {
      nombre: "magdalena",
      dificultad: 3
    }
    const mag = new Sweet(magdalena, 10, 10, 10);
    recetario.add(HotDog);
    recetario.add(mag);
    expect(recetario.avgTime()).toBe(40);
  });
});