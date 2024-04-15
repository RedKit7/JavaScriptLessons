// Single comment line
/**
 * Multi Line Comment line
 */

// Declare a variable
let message;
// Assign a value
message = 'Hello Cydeo Students';

console.log(message);

// re-assign a new value
message = 'My first JS Code';

console.log(message);

// create 2 variables at the same line
let admin, userName;
userName = 'John';
admin = userName;
console.log(admin);

/**
 * JS is dynamicly typing language
 */

let a;
console.log(typeof a); // undefined
a = 5; // JS infers that a is a number
console.log(typeof a); // number

a = 'Cydeo';
console.log(typeof a); // string

a = true;
console.log(typeof a); // boolean

a = null;
console.log(typeof a);

let x = 5, y = 'Cydeo';
console.log(x+y);
console.log(x*y); //NaN (noAplicable)

const b = 45;
// can I re-assign a new value to const
b = 30; // TypeError: Assignment to constant variable.
console.log(b);

b = 45;
console.log(b);

// let , const and var  -- >  what is those are ? 

/* In programming, "let" and "const" are both used to declare variables. 
The main difference between them is that let allows the variable to be reassigned multiple times, 
while const creates a variable that cannot be reassigned after it has been assigned a value.

-----

While "let" and "const" are block-scoped, "var" declarations are either globally scoped or function-scoped. 
Let variables can be updated but not re-declared, const variables cannot be updated or re-declared, 
and var variables may both be updated and re-declared inside their scope.
*/