// typeof

// instanceof

// in

// is
class Customer {
    isCreditAllowed(): boolean {
        return true
    }
}

class Supplier {
    isinShortList(): boolean {
        return true
    }
}

type BusinessPartner = Customer | Supplier;

// User-defined guard function
function isCustomer(partner: any): partner is Customer {
    return partner instanceof Customer;
}

function signContract(partner: BusinessPartner): string {
    if (isCustomer(partner)) {
        return 'Sign a new contract with the customer';
    } else {
        return 'sign a new contract with the supplier';
    }
}

console.log(signContract(new Customer()));
console.log(signContract(new Supplier()));