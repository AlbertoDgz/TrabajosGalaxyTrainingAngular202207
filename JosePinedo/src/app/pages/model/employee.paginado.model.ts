import { Employee } from './employee.model';

export class EmployeePaginado {
    constructor(
        public data: Employee[],
        public totalReg: number,
        public pagActual: number,
        public regXPag: number
    ) { }
}
