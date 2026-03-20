export default class Cl_vPersonal {
  inNombre: HTMLInputElement;
  inTipo: HTMLSelectElement;
  inSueldo: HTMLInputElement;
  inPeso: HTMLInputElement;
  btCancelar: HTMLButtonElement;
  btAceptar: HTMLButtonElement;
  vista: HTMLElement;

  constructor() {
    this.vista = document.getElementById("personal") as HTMLElement;
    this.inNombre = document.getElementById("personal_inNombre") as HTMLInputElement;
    this.inTipo = document.getElementById("personal_inTipo") as HTMLSelectElement;
    this.inSueldo = document.getElementById("personal_inSueldo") as HTMLInputElement;
    this.inPeso = document.getElementById ("personal_inPeso") as HTMLInputElement;
    this.btCancelar = document.getElementById("personal_btCancelar") as HTMLButtonElement;
    this.btAceptar = document.getElementById("personal_btAceptar") as HTMLButtonElement;

  }

  get nombre(): string { return this.inNombre.value; }
  get tipo(): string { return this.inTipo.value; }
  get sueldo(): number { return +this.inSueldo.value; }
  get peso(): number {return +this.inPeso.value;}

  mostrar(): void { this.vista.hidden = false; }
  ocultar(): void { this.vista.hidden = true; }
}