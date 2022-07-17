import { Cliente } from "./Customer.model";

export class ClientePaginado{
    constructor(
        public data:Cliente[],
        public totalReg: number,
        public pagActual: number,
        public regXPag: number
    ){}
}
