import { Customers } from "./customers.model";
import { Employees } from "./employees.model";
import { Products } from "./products.model";
import { Sales } from "./sales.model";

export class SalesPaginado {
  constructor(
    public data: Sales[],
    public totalReg: number,
    public pagActual: number,
    public regXPag: number
    ) 
    {}
  }
  