declare class Customer {
    isCreditAllowed(): boolean;
}
declare class Supplier {
    isinShortList(): boolean;
}
type BusinessPartner = Customer | Supplier;
declare function isCustomer(partner: any): partner is Customer;
declare function signContract(partner: BusinessPartner): string;
