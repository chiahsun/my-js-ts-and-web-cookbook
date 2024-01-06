interface BusineesParter {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}

interface Order {
    id: string;
    orderName: string;
}

type SomeOne = BusineesParter & Identity;

let s: SomeOne = {
    id: 1,
    name: 'John',
    credit: 2
};

console.log(s);


type OtherOne = BusineesParter | Contact;

let o: OtherOne = {
    email: 'aaa@email.com',
    phone: '11-22-3333'
};

// error TS2322: Type '{ email: string; name: string; }' is not assignable to type 'OtherOne'.
//  Property 'phone' is missing in type '{ email: string; name: string; }' but required in type 'Contact'.
// let o2: OtherOne = {
//    email: 'aaa@email.com',
//    name: 'May'
// };

// type IdentifiableOrder = Identity &  Order;
// error TS2322: Type 'number' is not assignable to type 'never'.
// let io: IdentifiableOrder = {
//    id: 1,
//    name: 'first'
// }