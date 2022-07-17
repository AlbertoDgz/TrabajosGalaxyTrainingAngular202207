import { Customers } from "./customers.model";
import { Employees } from "./employees.model";
import { Products } from "./products.model";

export class Sales {
  constructor(
    public id : number,
    public date : string,
    public unitPrice : number,
    public quantity : number,
    public totalPrice : number,
    public customers : Customers,
    public employees : Employees,
    public products : Products,
    public totalReg : number,
    public pagActual : number,
    public regXPag : number
    ) 
    {}
  }
  