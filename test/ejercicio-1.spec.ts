import { describe, test, expect, beforeEach, vi } from "vitest";
import { JediMasterCollection } from "../src/ejercicio-1/JediMasterCollection";
import { StarshipCollection } from "../src/ejercicio-1/StarshipCollection";
import { HolocronCollection } from "../src/ejercicio-1/HolocronCollection";
import { Jedi, Starship, Holocron, Affiliation } from "../src/ejercicio-1/GalacticRegistry";

describe("JediMasterCollection", () => {
  let jediCollection: JediMasterCollection;
  let yoda: Jedi;
  let obiwan: Jedi;
  let anakin: Jedi;

  beforeEach(() => {
    jediCollection = new JediMasterCollection();
    
    yoda = {
      name: "Yoda",
      affiliation: "Republic",
      yearFormed: 896,
      originPlanet: "Unknown",
      type: "jedi",
      rank: "Jedi Grand Master"
    };

    obiwan = {
      name: "Obi-Wan Kenobi",
      affiliation: "Republic",
      yearFormed: 57,
      originPlanet: "Stewjon",
      type: "jedi",
      rank: "Jedi Master"
    };

    anakin = {
      name: "Anakin Skywalker",
      affiliation: "Republic",
      yearFormed: 41,
      originPlanet: "Tatooine",
      type: "jedi",
      rank: "Jedi Knight"
    };
  });

  test("should add jedi to collection", () => {
    jediCollection.add(yoda);
    expect(jediCollection.size()).toBe(1);
    expect(jediCollection.getAll()).toContain(yoda);
  });

  test("should remove jedi from collection", () => {
    jediCollection.add(yoda);
    jediCollection.add(obiwan);
    jediCollection.remove(yoda);
    
    expect(jediCollection.size()).toBe(1);
    expect(jediCollection.getAll()).not.toContain(yoda);
    expect(jediCollection.getAll()).toContain(obiwan);
  });

  test("should search jedi by name", () => {
    jediCollection.add(yoda);
    jediCollection.add(obiwan);
    
    const result = jediCollection.searchName("Yoda");
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual(yoda);
  });

  test("should search jedi by name case insensitive", () => {
    jediCollection.add(yoda);
    
    const result = jediCollection.searchName("yoda");
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual(yoda);
  });

  test("should search jedi by affiliation", () => {
    jediCollection.add(yoda);
    jediCollection.add(obiwan);
    
    const result = jediCollection.searchAffiliation("Republic");
    expect(result).toHaveLength(2);
    expect(result).toContain(yoda);
    expect(result).toContain(obiwan);
  });

  test("should search jedi by year", () => {
    jediCollection.add(yoda);
    jediCollection.add(obiwan);
    jediCollection.add(anakin);
    
    const result = jediCollection.searchYear(57);
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual(obiwan);
  });

  test("should search jedi by planet", () => {
    jediCollection.add(yoda);
    jediCollection.add(obiwan);
    
    const result = jediCollection.searchPlanet("Stewjon");
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual(obiwan);
  });

  test("should search jedi by planet case insensitive", () => {
    jediCollection.add(obiwan);
    
    const result = jediCollection.searchPlanet("stewjon");
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual(obiwan);
  });

  test("should search jedi by rank", () => {
    jediCollection.add(yoda);
    jediCollection.add(obiwan);
    jediCollection.add(anakin);
    
    const masters = jediCollection.searchPower("Jedi Master");
    expect(masters).toHaveLength(1);
    expect(masters[0]).toEqual(obiwan);
    
    const grandMasters = jediCollection.searchPower("Jedi Grand Master");
    expect(grandMasters).toHaveLength(1);
    expect(grandMasters[0]).toEqual(yoda);
    
    const knights = jediCollection.searchPower("Jedi Knight");
    expect(knights).toHaveLength(1);
    expect(knights[0]).toEqual(anakin);
  });

  test("should return empty array when no matches found", () => {
    jediCollection.add(yoda);
    
    const result = jediCollection.searchName("Darth Vader");
    expect(result).toHaveLength(0);
    expect(result).toEqual([]);
  });
});

describe("StarshipCollection", () => {
  let shipCollection: StarshipCollection;
  let falcon: Starship;
  let destroyer: Starship;
  let fighter: Starship;

  beforeEach(() => {
    shipCollection = new StarshipCollection();
    
    falcon = {
      name: "Millennium Falcon",
      affiliation: "Independent",
      yearFormed: 60,
      originPlanet: "Corellia",
      type: "starship",
      starshipClass: "Transport"
    };

    destroyer = {
      name: "Imperial Star Destroyer",
      affiliation: "Empire",
      yearFormed: 22,
      originPlanet: "Kuat",
      type: "starship",
      starshipClass: "Destroyer"
    };

    fighter = {
      name: "X-Wing",
      affiliation: "Republic",
      yearFormed: 24,
      originPlanet: "Incom",
      type: "starship",
      starshipClass: "Fighter"
    };
  });

  test("should add starship to collection", () => {
    shipCollection.add(falcon);
    expect(shipCollection.size()).toBe(1);
  });

  test("should search starship by class", () => {
    shipCollection.add(falcon);
    shipCollection.add(destroyer);
    shipCollection.add(fighter);
    
    const transports = shipCollection.searchPower("Transport");
    expect(transports).toHaveLength(1);
    expect(transports[0]).toEqual(falcon);
    
    const destroyers = shipCollection.searchPower("Destroyer");
    expect(destroyers).toHaveLength(1);
    expect(destroyers[0]).toEqual(destroyer);
    
    const fighters = shipCollection.searchPower("Fighter");
    expect(fighters).toHaveLength(1);
    expect(fighters[0]).toEqual(fighter);
  });

  test("should filter starships by affiliation", () => {
    shipCollection.add(falcon);
    shipCollection.add(destroyer);
    shipCollection.add(fighter);
    
    const empire = shipCollection.searchAffiliation("Empire");
    expect(empire).toHaveLength(1);
    expect(empire[0]).toEqual(destroyer);
    
    const independent = shipCollection.searchAffiliation("Independent");
    expect(independent).toHaveLength(1);
    expect(independent[0]).toEqual(falcon);
  });
});

describe("HolocronCollection", () => {
  let holocronCollection: HolocronCollection;
  let basicHolocron: Holocron;
  let masterHolocron: Holocron;
  let restrictedHolocron: Holocron;

  beforeEach(() => {
    holocronCollection = new HolocronCollection();
    
    basicHolocron = {
      name: "Basic Training Holocron",
      affiliation: "Republic",
      yearFormed: 100,
      originPlanet: "Ossus",
      type: "holocron",
      knowledgeLevel: 1
    };

    masterHolocron = {
      name: "Battle Meditation Holocron",
      affiliation: "Republic",
      yearFormed: 200,
      originPlanet: "Tython",
      type: "holocron",
      knowledgeLevel: 4
    };

    restrictedHolocron = {
      name: "Sith Holocron",
      affiliation: "Sith",
      yearFormed: 1000,
      originPlanet: "Korriban",
      type: "holocron",
      knowledgeLevel: 5
    };
  });

  test("should search holocron by knowledge level", () => {
    holocronCollection.add(basicHolocron);
    holocronCollection.add(masterHolocron);
    holocronCollection.add(restrictedHolocron);
    
    const level1 = holocronCollection.searchPower(1);
    expect(level1).toHaveLength(1);
    expect(level1[0]).toEqual(basicHolocron);
    
    const level4 = holocronCollection.searchPower(4);
    expect(level4).toHaveLength(1);
    expect(level4[0]).toEqual(masterHolocron);
    
    const level5 = holocronCollection.searchPower(5);
    expect(level5).toHaveLength(1);
    expect(level5[0]).toEqual(restrictedHolocron);
  });

  test("should filter holocrons by affiliation", () => {
    holocronCollection.add(basicHolocron);
    holocronCollection.add(restrictedHolocron);
    
    const sith = holocronCollection.searchAffiliation("Sith");
    expect(sith).toHaveLength(1);
    expect(sith[0]).toEqual(restrictedHolocron);
    
    const republic = holocronCollection.searchAffiliation("Republic");
    expect(republic).toHaveLength(1);
    expect(republic[0]).toEqual(basicHolocron);
  });

  test("should return empty array when no holocron matches power level", () => {
    holocronCollection.add(basicHolocron);
    
    const result = holocronCollection.searchPower(5);
    expect(result).toHaveLength(0);
    expect(result).toEqual([]);
  });
});

describe("Cross-collection operations", () => {
  let jediCollection: JediMasterCollection;
  let shipCollection: StarshipCollection;
  let holocronCollection: HolocronCollection;

  beforeEach(() => {
    jediCollection = new JediMasterCollection();
    shipCollection = new StarshipCollection();
    holocronCollection = new HolocronCollection();
  });

  test("should maintain independent collections", () => {
    const yoda: Jedi = {
      name: "Yoda",
      affiliation: "Republic",
      yearFormed: 896,
      originPlanet: "Unknown",
      type: "jedi",
      rank: "Jedi Grand Master"
    };

    const falcon: Starship = {
      name: "Millennium Falcon",
      affiliation: "Independent",
      yearFormed: 60,
      originPlanet: "Corellia",
      type: "starship",
      starshipClass: "Transport"
    };

    const holocron: Holocron = {
      name: "Basic Holocron",
      affiliation: "Republic",
      yearFormed: 100,
      originPlanet: "Ossus",
      type: "holocron",
      knowledgeLevel: 1
    };

    jediCollection.add(yoda);
    shipCollection.add(falcon);
    holocronCollection.add(holocron);

    expect(jediCollection.size()).toBe(1);
    expect(shipCollection.size()).toBe(1);
    expect(holocronCollection.size()).toBe(1);

    expect(jediCollection.searchName("Yoda")).toHaveLength(1);
    expect(shipCollection.searchName("Millennium Falcon")).toHaveLength(1);
    expect(holocronCollection.searchName("Basic Holocron")).toHaveLength(1);
  });
});