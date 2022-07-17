import { Cliente } from "./Customer.model";
import { Empleado } from "./Employees.model";
import { Product } from "./product.model";

export class Sales{
    constructor(
        public id: number,
        public date: Date,
        public unitPrice: number,
        public quantity: number,
        public totalPrice: number,
        public customer_Id: number,
        public employee_Id: number,
        public product_Id: number,
        public customerDTO: Cliente,
        public employeeDTO: Empleado,
        public productDTO: Product,
    ){}
}