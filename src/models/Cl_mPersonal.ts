export default class Cl_mPersonal {
  private _nombre: string = "";
  private _tipo: string = ""; // 'O' para obrero, 'A' para administrativo
  private _sueldo: number = 0;
  private _peso: number = 0;

  constructor({ nombre, tipo, sueldo, peso }: { nombre: string; tipo: string; sueldo: number; peso:number }) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.sueldo = sueldo;
    this.peso = peso;
  }

  set nombre(n: string) { this._nombre = n; }
  get nombre(): string { return this._nombre; }

  set tipo(t: string) { this._tipo = t.toUpperCase(); }
  get tipo(): string { return this._tipo; }

  set sueldo(s: number) { this._sueldo = +s; }
  get sueldo(): number { return this._sueldo; }

  set peso (p:number) {this._peso = +p;}
  get peso ():number {return this._peso;}

  aumento(): number {
    if (this.tipo === "O") {
      return this.sueldo * 0.20;
    } else if (this.tipo === "A") {
      return this.sueldo * 0.10;
    } else {
      return 0;
    }
  }
}