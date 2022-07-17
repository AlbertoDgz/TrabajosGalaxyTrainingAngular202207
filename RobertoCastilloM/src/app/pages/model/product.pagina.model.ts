import { Product } from "./product.model";

export class ProductPagina {
  constructor(
    public data: Product[],
    public totalReg: number,
    public pagActual: number,
    public regXPag: number
  ){

  }
}
