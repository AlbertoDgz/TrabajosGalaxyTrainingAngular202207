import { Sale } from './sale.model';

export class SalePaginado {
    constructor(
        public data: Sale[],
        public totalReg: number,
        public pagActual: number,
        public regXPag: number
    ) { }
}
