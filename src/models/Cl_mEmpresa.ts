import Cl_mPersonal from "./Cl_mPersonal.js";

export default class Cl_mEmpresa {
  private acMontoAdicional: number;
  private cnPersonal: number; 
  private acPeso: number;

  constructor() {
    this.acMontoAdicional = 0;
    this.cnPersonal = 0;
    this.acPeso = 0;
  }

  procesarPersonal(p: Cl_mPersonal): void {
    this.cnPersonal++;
    this.acMontoAdicional += p.aumento();
    this.acPeso += p.peso;
  }

  totalMontoAdicional(): number { return this.acMontoAdicional; }
  cantidadPersonal(): number { return this.cnPersonal; } 
  pesoPromedio():number { return this.acPeso / this.cnPersonal}
}