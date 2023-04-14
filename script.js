/// Task 1 

// let data = [
//     {name: 'daniel', age: 45},
//     {name: 'john', age: 34},
//     {name: 'robert', age: null},
//     {name: 'jen', age: undefined},
//     {name: null, age: undefined}];
//  element -in deyeri null ve undefined olmayanlari qaytar

// let newArr = data.filter((value) => value.name !== null && value.age !==undefined && value.age !==null)
// console.log(newArr);



/// Task 2
// const students = [
//     { name: "Leyla", points: 500 },
//     { name: "Akif", points: 500 },
//     { name: "Fikret", points: 3000 },
//     { name: "Rashad", points: 500 },
//     { name: "Turkan", points: 1900 },
//     { name: "Sabir", points: 1000 },
//     { name: "Idris", points: 340 },
//     { name: "Nijat", points: 940 },
//     { name: "Ismet", points: 1780 },
// ];
// her telebenin pointini 30 bal artirin

// let newArr = students.map((value) => {
//     return {
//         name: value.name,
//         points: value.points + 30
//     }
// })
// console.log(newArr);



//Task 3
// let bdays = ['08-14', '10-04', '04-21', '08/14', '10/04', '04/21'];
//- isharesini / ile deyishin
// output: ['08/14', '10/04', '04/21', 08/14, '10/04', '04/21'];

// let newArr = bdays.map((value) => value.replace("-","/"))
// console.log(newArr);




/// Task 4 
// let numbers = [1.5, 2.56, 5.1, 12.33];
// butun regemlerini yuvarlaqlashdirin
// p.s - Math objectini arashdirin. (Math, max,min, random, floor, ceil)

// let newArr = numbers.map((value) => Math.round(value))
// console.log(newArr);



/// Task 5
// Verilmish stringdeki ededleri cemleyin --> reduce 
// const b = "5,4,3,2,1";

// let a = b.split(",").map((value) =>  parseInt(value));
// console.log(a);
// function sumFunc (sum1,sum2){
//    return sum1 + sum2
// }
// console.log(a.reduce(sumFunc,0));