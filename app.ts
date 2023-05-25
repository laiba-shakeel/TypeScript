


// type User = {
//     name: string,
//     age: number,
//     adress?: string,
// }


// function login(userData: User): User {


//     return userData;
// }


// // This is called Custom Type Type-alias
// const user = {
//     name: 'rabia',
//     age: 12,

// };

// console.log(login(user));

// // This type of TS is called Doc-type Typorgraphy in typeScript

// console.log(login({ name: 'laiba', age: 19 }))

// // Custom Types: 
// // | its work as UNION TYPE  either & OR 

// type ID = number | string;

// const userID: ID = "123";

// // Interfaces:: It is used to declear the shape on an Object that how its 
// // supposed to be work , or which type of data we can put on that particular type variable 

// interface Transection {
   
//     payerAccountNumber: number;
   
//     payeeAccountNumber: number;
// };

// interface BankAccount {
   
//     accountNumber: number;
   
//     accountHolder: string;
   
//     balance: number;
   
//     isActive: boolean;
   
//     transection: Transection[];
// };

// const transection1: Transection = {
    
//     payeeAccountNumber: 123, 
    
//     payerAccountNumber: 456,
// };

// const transection2: Transection = {
    
//     payeeAccountNumber: 112, 
    
//     payerAccountNumber: 1122,
// };

// const bankAccount: BankAccount = {
    
//     accountNumber:123,

//     accountHolder: 'john Doe',
    
//     balance: 4000, 
    
//     isActive: true,
    
//     transection: [transection1 , transection2], 
// };


// Extend

interface Book {

    name: string;
    
    price: number; 

}

interface EBook {

    name: string;

    price: number;
    
    fileSize: number;

    format: string
}
 
interface AudioBook {

    name: string ,

    price: number, 

    fileSize: number, 
        
    format: string,

    duration: number,
}

const book: AudioBook = {
    name: 'atomic habits', 

    price: 1200, 
    
    fileSize: 2300, 
    
    format: 'pdf', 

    duration: 4,
}


const book: EBook = {
    name: 'Atomic habits',

    price: 1200, 

    fileSize: 300,

    format: 'pdf'
     

}


const book: Book = {
    name: 'atomic habits', 
    price: 1200,
}

