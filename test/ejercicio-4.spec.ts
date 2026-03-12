import { describe, test, expect, vi, beforeEach } from "vitest";
import { 
  BasicPrinter, 
  BasicScanner, 
  BasicFax, 
  sendFax,
  PrintOfficeMachine,
  ScanOfficeMachine,
  FaxOfficeMachine 
} from "../src/ejercicio-4/MaterialOficina";

describe("BasicPrinter", () => {
  let printer: BasicPrinter;
  let consoleSpy: any;

  beforeEach(() => {
    printer = new BasicPrinter();
    consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
  });

  test("should implement PrintOfficeMachine", () => {
    expect(printer).toHaveProperty("print");
    expect(typeof printer.print).toBe("function");
  });

  test("should print document", () => {
    printer.print("test.pdf");
    expect(consoleSpy).toHaveBeenCalledWith("Printing:", "test.pdf");
  });

  test("should not have scan or fax methods", () => {
    expect(printer).not.toHaveProperty("scan");
    expect(printer).not.toHaveProperty("fax");
  });
});

describe("BasicScanner", () => {
  let scanner: BasicScanner;

  beforeEach(() => {
    scanner = new BasicScanner();
  });

  test("should implement ScanOfficeMachine", () => {
    expect(scanner).toHaveProperty("scan");
    expect(typeof scanner.scan).toBe("function");
  });

  test("should scan document", () => {
    const result = scanner.scan("test.pdf");
    expect(result).toBe("test.pdf");
  });

  test("should not have print or fax methods", () => {
    expect(scanner).not.toHaveProperty("print");
    expect(scanner).not.toHaveProperty("fax");
  });
});

describe("BasicFax", () => {
  let fax: BasicFax;
  let consoleSpy: any;

  beforeEach(() => {
    fax = new BasicFax();
    consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
  });

  test("should implement FaxOfficeMachine", () => {
    expect(fax).toHaveProperty("fax");
    expect(typeof fax.fax).toBe("function");
  });

  test("should send fax", () => {
    fax.fax("test.pdf");
    expect(consoleSpy).toHaveBeenCalledWith("Sending:", "test.pdf");
  });

  test("should not have print or scan methods", () => {
    expect(fax).not.toHaveProperty("print");
    expect(fax).not.toHaveProperty("scan");
  });
});

describe("sendFax function", () => {
  let consoleSpy: any;

  beforeEach(() => {
    consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
  });

  test("should send fax with BasicFax", () => {
    const fax = new BasicFax();
    sendFax(fax, "test.pdf");
    expect(consoleSpy).toHaveBeenCalledWith("Sending:", "test.pdf");
  });

  test("should accept any device implementing FaxOfficeMachine", () => {
    const fax = new BasicFax();
    expect(() => sendFax(fax, "test.pdf")).not.toThrow();
  });

  test("should not accept devices without fax capability", () => {
    const printer = new BasicPrinter();
    expect(() => {
      sendFax(printer as any, "test.pdf");
    }).toThrow();
  });
});

describe("Interface segregation", () => {
  test("classes should only implement their specific interface", () => {
    const printer: PrintOfficeMachine = new BasicPrinter();
    const scanner: ScanOfficeMachine = new BasicScanner();
    const fax: FaxOfficeMachine = new BasicFax();

    expect(printer.print).toBeDefined();
    expect(scanner.scan).toBeDefined();
    expect(fax.fax).toBeDefined();
  });

  test("each device should only have its own methods", () => {
    const printer = new BasicPrinter();
    const scanner = new BasicScanner();
    const fax = new BasicFax();

    expect(Object.keys(printer)).toEqual([]);
    expect(Object.keys(scanner)).toEqual([]);
    expect(Object.keys(fax)).toEqual([]);
  });
});