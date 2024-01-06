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
declare let s: SomeOne;
type OtherOne = BusineesParter | Contact;
declare let o: OtherOne;
