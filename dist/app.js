"use strict";
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
// // Extend 
// interface Book {
//     name: string;
//     price: number; 
// }
// interface EBook extends Book{
//     fileSize: number;
//     format: string
// }
// interface AudioBook {
//     name: string ,
//     price: number, 
//     fileSize: number, 
//     format: string,
//     duration: number,
// }
// const book: AudioBook = {
//     name: 'atomic habits', 
//     price: 1200, 
//     fileSize: 2300, 
//     format: 'pdf', 
//     duration: 4,
// }
// const EBook = {
//     name: 'Atomic habits',
//     price: 1200, 
//     fileSize: 300,
//     format: 'pdf'
// }
// const book: Book = {
//     name: 'atomic habits', 
//     price: 1200,
// }
// Merging two interfaces :
// interface Book {
//     name: string;
//     price: number;
// };
// interface Book {
//     size: number;
// };
// const book: Book = {
//     name: 'atomic habits',
//     price: 200,
//     size: 25
// };
// Things which we only do with types not with interfaces :
// premetative type: (Customized)
// type SanitizedString = string;
// type EvenNumber = number ; 
// interface SanitizedString extends string{
// }
// TypeScript 
// Unions ::
// type ID = number  | string ; 
// //Narrowing
// function printId (id: ID) {
//     if (typeof id === 'string') {
//         console.log(id.toUpperCase());
//     } 
//     else {
//         console.log(id);
//     }
// }
// printId('1');
//infer Union type
// function getFirstThree(x: string | number[]) {
//     return x.slice (0,3);
// }
// console.log(getFirstThree([1,2,3,4,5]));
// MOST IMPORTANT THING IN TYPESCRIPT::
//*** Generics ***// those type of fcuntion called generics which contain any type of data it self
// function logString (arg: string){
//     console.log(arg);
//     return arg;
// }
// function logNumber (arg: number) {
//     console.log(arg);
//     return arg;
// }
// function logArray(arg: any[]) {
//     console.log(arg);
//     return arg;
// }
// function logAnything<T>(arg:T):T {
//     console.log(arg);
//     return arg;
// }
// logAnything([true]);
// logAnything(['hello']);
// logAnything([123]);
//  interface HasAge {
//     age: number;
//  }
//  function getOldest<T extends HasAge>(people:T[]) :T {
//     return people.sort((a,b) => b.age - a.age)[0];
//  }
//  const people: HasAge[] = [{age: 30} , { age:40} , {age:20}];
//  interface Player {
//     name: string;
//     age: number;
//  }
//  const players: Player[]= [
//     { name: 'john' , age: 30},
//     { name: 'loe' , age: 40},
//     { name: 'teba' , age: 15}
//  ];
// Assertion
// const Person = getOldest(players) as Player;
// Generics
// const person = getOldest(players);
// const person = getOldest(people);
// person.age
// interface Ipost {
//     title: string;
//     id: number;
//     desciption: string;
// }
// interface IUser {
//     id: number, 
//     name: string, 
//     age: number,
// }
// const fatchPostDtata = async (path: string): Promise<Ipost[]> => {
//    const response = await fetch(`http://example.com${path}`); 
//     return response.json();
// };
// const fatchUserDtata = async (path: string): Promise<IUser[]> => {
//     const response = await fetch(`http://example.com${path}`); 
//      return response.json();
//  };
// const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
//     const response = await fetch(`http://example.com${path}`); 
//     return response.json();
// }
// (async()=>{
// // const posts = await fatchPostDtata('/posts');
// // const users = await fatchUserDtata ('/users');
//     const posts = await fetchData<Ipost[]> ('/posts');
//      posts[0].desciption
// })();
// Structural typing or duck typing::
// interface ICredential {
//     username: string,
//     password: string, 
//     isAdmin?: boolean,
// }
// function login(creadentials: ICredential): boolean{
//     console.log(creadentials);
//     return true;
// }
// const user: ICredential = {
//     username: 'codersgyan',
//     password: 'secret', 
//     isAdmin: true
// };
// login(user);
// interface IAuth{ 
//     username: string, 
//     password: string, 
//     login(username: string , password: string): boolean;
// }
// const auth: IAuth = {
//     username: 'codersgyan', 
//     password: 'secret', 
//     login(username: string , password: string){
//         return true
//     }
// }
// infarence 
// let num = 'coders'; 
