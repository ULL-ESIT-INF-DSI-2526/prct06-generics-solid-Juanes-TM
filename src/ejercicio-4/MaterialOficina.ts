/* 
interface OfficeMachine {
  print(doc: string): void;
  scan(doc: string): string;
  fax(doc: string): void;
}

class BasicPrinter implements OfficeMachine {
  print(doc: string): void {
    console.log("Printing:", doc);
  }
  scan(_: string): string {
    throw new Error("Not supported");
  }
  fax(_: string): void {
    throw new Error("Not supported");
  }
}

function sendFax(m: OfficeMachine, doc: string) {
  m.fax(doc);
}

Principios que se violan:

  - Interface segregation principle: En este caso es mejor tener varias interfaces sencillas antes que una compleja

*/

/**
 * Interfaz para dispositivos que pueden imprimir.
 */
export interface PrintOfficeMachine {
  print(doc: string): void;
}

/**
 * Interfaz para dispositivos que pueden escanear.
 */
export interface ScanOfficeMachine {
  scan(doc: string): string;
}

/**
 * Interfaz para dispositivos que pueden enviar fax.
 */
export interface FaxOfficeMachine {
  fax(doc: string): void;
}

/**
 * Impresora básica que solo puede imprimir.
 */
export class BasicPrinter implements PrintOfficeMachine {
  print(doc: string): void {
    console.log("Printing:", doc);
  }
}

/**
 * Escáner básico que solo puede escanear.
 */
export class BasicScanner implements ScanOfficeMachine {
  scan(doc: string): string {
    return doc;
  }
}

/**
 * Fax básico que solo puede enviar fax.
 */
export class BasicFax implements FaxOfficeMachine {
  fax(doc: string): void {
    console.log("Sending:", doc);
  }
}

/**
 * Envía un fax utilizando cualquier dispositivo que implemente FaxOfficeMachine.
 * 
 * @param m - Dispositivo con capacidad de enviar fax
 * @param doc - Documento a enviar
 */
export function sendFax(m: FaxOfficeMachine, doc: string) {
  m.fax(doc);
}