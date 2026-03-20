export default class Cl_vEmpresa {
  lblMontoTotal: HTMLElement;
  lblDetalle: HTMLElement;
  lblCantidadPersonal: HTMLElement;
  btNuevoPersonal: HTMLButtonElement;
  lblPesoPromedio: HTMLElement;

  constructor() {
    this.btNuevoPersonal = document.getElementById("main_btNuevoPersonal") as HTMLButtonElement;
    this.lblMontoTotal = document.getElementById("main_lblMontoTotal") as HTMLElement;
    this.lblDetalle = document.getElementById("main_lblDetalle") as HTMLElement;
    this.lblCantidadPersonal = document.getElementById("main_lblCantidadPersonal") as HTMLElement; 
    this.lblPesoPromedio = document.getElementById("main_lblPesoPromedio") as HTMLElement;
  }

  reportar({ aumentoIndividual, nombre, totalEmpresa, cantidad, pesoPromedio }: { aumentoIndividual: number; nombre: string; totalEmpresa: number; cantidad: number; pesoPromedio: number }): void {
    this.lblDetalle.innerHTML += `${nombre} tiene un aumento de $${aumentoIndividual}<br>`;
    this.lblMontoTotal.innerHTML = `${totalEmpresa}`;
    this.lblCantidadPersonal.innerHTML = `${cantidad}`;
    this.lblPesoPromedio.innerHTML = `${pesoPromedio}`;
  }
}