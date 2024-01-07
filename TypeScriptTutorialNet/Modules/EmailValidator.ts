import { Validator } from "./Validator";

class EmailValidator implements Validator {
    isValid(s: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(s);
    }
}

let ev = new EmailValidator();
console.log(ev.isValid("sample@gmail.com"));
console.log(ev.isValid("sample@yahoo"));
console.log(ev.isValid("www.google.com"));

// Import types
// Re-exports
// Default exports