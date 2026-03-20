import Cl_mEmpresa from "../models/Cl_mEmpresa.js";
import Cl_vEmpresa from "../views/Cl_vEmpresa.js";
import Cl_cPersonal from "./Cl_cPersonal.js";

export default class Cl_cEmpresa {
  private mEmpresa: Cl_mEmpresa = new Cl_mEmpresa();
  private vEmpresa: Cl_vEmpresa = new Cl_vEmpresa();

  constructor() {
    this.vEmpresa.btNuevoPersonal.onclick = () => this.procesar1Personal();
  }

  procesar1Personal() {
    new Cl_cPersonal({
      callback: (personal) => {
        if (personal !== null) {
          this.mEmpresa.procesarPersonal(personal);
          this.vEmpresa.reportar({
            nombre: personal.nombre,
            aumentoIndividual: personal.aumento(),
            totalEmpresa: this.mEmpresa.totalMontoAdicional(),
            cantidad: this.mEmpresa.cantidadPersonal(), 
            pesoPromedio: this.mEmpresa.pesoPromedio()
          });
        }
      },
    });
  }}