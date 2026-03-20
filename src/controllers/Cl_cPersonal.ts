import Cl_mPersonal from "../models/Cl_mPersonal.js";
import Cl_vPersonal from "../views/Cl_vPersonal.js";

export default class Cl_cPersonal {
  private vista = new Cl_vPersonal();
  callback: (personal: Cl_mPersonal | null) => void;

  constructor({ callback }: { callback: (personal: Cl_mPersonal | null) => void }) {
    this.callback = callback;
    this.vista.btCancelar.onclick = () => this.btCancelarOnClick();
    this.vista.btAceptar.onclick = () => this.btAceptarOnClick();
    this.vista.mostrar();
  }

  btCancelarOnClick() {
    this.callback(null);
    this.vista.ocultar();
  }

  btAceptarOnClick() {
    this.callback(new Cl_mPersonal({ 
        nombre: this.vista.nombre, 
        tipo: this.vista.tipo,
        sueldo: this.vista.sueldo,
        peso: this.vista.peso
    }));
    this.vista.ocultar();
  }
}