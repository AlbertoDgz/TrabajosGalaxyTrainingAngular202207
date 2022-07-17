import { Empleado } from "./Employees.model";

export class EmpleadoPaginado{
    constructor(
        public data:Empleado[], 
        public totalReg: number,
        public pagActual: number, 
        public regXPag: number 
    ){}
}