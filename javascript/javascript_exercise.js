import chalk from 'chalk'
//  1) 1-10 hurteleh toog hevleh
//for (var i = 1; i <= 10; i++) {
// var num = 0;
//if ((num = num + i)) console.log(num);// esvel shuud console.log(i) :))
//}

// 2) 1-10 hurteleh sondgoi (1,3,5) too hevleh
//for (var i = 0; i<=10; i++) {
//if (i%2 !==0) console.log(i) // !==0 (2-t uldegdeltei huvaagddag toonuudig yalgaj ugch baina)
//}

// 3) 1-10 hurteleh niilbernuudiig hevleh
//  ( mur muruur ni (0+1 =1 , =1+2 =3, =3+3 =6, =6+4 =10,... =55)
//var sum = 0;
//for (var i = 1; i <=10 ; i++)
//{if (sum = sum+i) console.log(sum)
//}

//4) "*" row bolgondoo shirheg ni nemegdej baigaa * hevleh
//var od =""
//for (var i=0; i<=5; i++){
//if (od =od + '*' )
//console.log(od)}
//*
//**
//***
//****
//*****

//5) reverse whit inner loop
//var row = 5;
//for (var i = row; i >= 0; i--) {
//  var num = "";
// for (var k = 0; k <= i; k++) {
//    num += "*";
//  }
//  console.log(num);
//}
//******
//*****
//****
//***
//**
//*

// 6) Using first time function.
//function power(base, exponent) {
//  var power = 1;
//  for (var i = 0; i<exponent; i++) {
//    power = power * base
//  }return power;
//}
//console.log (power(4, 3))

// 7) divider finder

//var checknum = 13;
//const startnum = 2;
//var result;
//for (var i = startnum; i <= checknum; i++)
//    {
//  var num = 0;
//  result = i + num;
//  if (checknum % result ==0)
//    console.log (  checknum + ' / '+result );
//}

//function find(target) {
//  const names = [
//    "baljan",
//    "itgel",
//    "jamiyansuren",
//    "chingun",
//    "ursaa",
//    "ider",
//    "ariunjargal",
//  ];
//  for (var i = 0; i < names.length; i++) {
//    if (names[i] == target) {
//      return i ;
//    }
//  }
//}
//
//console.log(find('itgel'))

// n
//
//

//console.log(max);
//const nums = [4, 7, 98, 1, 3, 5];
//const target = 11;
//for (var i = 0; i < nums.length; i++) {
//  if (nums[i] + nums[i] == target) {
//    console.log(nums[i]);
//  }
//}

//sum of odd 1-1000
//let sum_odd = 0;
//let nums = 1000;
//for (let i = 0; i <= nums; i+=3) {
//    sum_odd += i
//
//}console.log(sum_odd)

//let a =3;
//let b = 999;
//let n = b/a;
//let sum = (a +b)*n/2;
//console.log(sum)

//Literal
//let person1 = {
//  name: "naraa",
//  age: 20,
//}
//let person2 = {
//  name: "orgil",
//  age: 21,
//}
//const arr = [person1, person2];
//
//function arr(person1, person2){
//  return console.log(person1.name,person1.age),
//  console.log(person2.name, person2.age)
//}
//
//console.log(arr(person1,person2))

// CHANGE INDEX POSITION
//const arr = [2, 4, 5];
//
//for (let i = 0; i < arr.length; i++) {
//  for (let k = i + 1; k < arr.length; k++) {
//    if (arr[i] < arr[k]) {
//        let less = arr[i]
//        let grand = arr[k]
//         arr[i]= grand
//         arr[k]= less
//
//    }
//  }
//}     console.log(arr)
//
//const weather = [
//  {
//    date: "2024-12-26",
//    temp: { current: -18.7, min: -22.9, max: -14.5 },
//
//  },
//  {
//    date: "2025-01-08",
//    temp: { current: -15.6, min: -21.9, max: -9.3 },
//  },];
//1)if objects are in array ------2)if primitives in array
//OBJECT                         //ARRAY
//for (const key in weather) == for(let i = 0; i < arr.length; i++) 
//{console.log(key)}         == {console.log(i)}
//OUTPUT: 0                     OUTPUT : 0
//      : 1                            : 1



//function check_duplicate(nums){
//  let obj = {};
//  let duplicated= true;
//for (let i = 0; i < nums.length; i++) {
//  if(obj[nums[i]]=== undefined){
//    obj[nums[i]]= duplicated
//    duplicated= false;}
//else duplicated=true;
//}return duplicated}
//  console.log(check_duplicate([1, 2, 3, 4]))
// 

