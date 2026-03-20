export default class Cl_vPersonal {
    inNombre;
    inTipo;
    inSueldo;
    inPeso;
    btCancelar;
    btAceptar;
    vista;
    constructor() {
        this.vista = document.getElementById("personal");
        this.inNombre = document.getElementById("personal_inNombre");
        this.inTipo = document.getElementById("personal_inTipo");
        this.inSueldo = document.getElementById("personal_inSueldo");
        this.inPeso = document.getElementById("personal_inPeso");
        this.btCancelar = document.getElementById("personal_btCancelar");
        this.btAceptar = document.getElementById("personal_btAceptar");
    }
    get nombre() { return this.inNombre.value; }
    get tipo() { return this.inTipo.value; }
    get sueldo() { return +this.inSueldo.value; }
    get peso() { return +this.inPeso.value; }
    mostrar() { this.vista.hidden = false; }
    ocultar() { this.vista.hidden = true; }
}
//# sourceMappingURL=Cl_vPersonal.js.map