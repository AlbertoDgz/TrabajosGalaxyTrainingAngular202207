export class SalesCrear{
    constructor(
        public id: number,
        public fecha: Date,
        public unitPrice: number,
        public quantity: number,
        public totalPrice: number,
        public customer_Id: number,
        public employee_Id: number,
        public product_Id: number,
    ){}
}