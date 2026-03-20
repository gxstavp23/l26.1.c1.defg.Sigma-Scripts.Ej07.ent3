export default class Cl_mEmpresa {
    acMontoAdicional;
    cnPersonal;
    acPeso;
    constructor() {
        this.acMontoAdicional = 0;
        this.cnPersonal = 0;
        this.acPeso = 0;
    }
    procesarPersonal(p) {
        this.cnPersonal++;
        this.acMontoAdicional += p.aumento();
        this.acPeso += p.peso;
    }
    totalMontoAdicional() { return this.acMontoAdicional; }
    cantidadPersonal() { return this.cnPersonal; }
    pesoPromedio() { return this.acPeso / this.cnPersonal; }
}
//# sourceMappingURL=Cl_mEmpresa.js.map