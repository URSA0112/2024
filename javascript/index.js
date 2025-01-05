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


//function twosum(target, nums) {
//    var allchance = [];
//    for (var i = 0; i < nums.length; i++) {
//        for (var j = i + 1; j < nums.length; j++)
//            if (nums[i] + nums[j] == target) {
//                allchance[i] = [nums[i] + ' + ' + nums[j]];
//            }
//    } return (allchance)
//}
//const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
//console.log(twosum(10, nums))



//function twosum(nums, target) {
//    for(var i=0; i<nums.length; i++){
//        for(var k=i+1; k < nums.length; k++){
//            if(nums[i]+nums[k]==target){
//            return [i,k]}
//        }
//    }
//};
//console.log(twosum([2,7,11,15], 9))

//const nums = [20, 20, 20, 20];
//const target = 80;
//var allchance = [];
//for (var i = 0; i < nums.length; i++) {
//    for (var k = i + 1; k < nums.length; k++) {
//        for (var j = k + 1; j < nums.length; j++) {
//            for (var f = j + 1; f < nums.length; f++) {
//                if (nums[i] + nums[k] + nums[j] + nums[f] == target) {
//                    allchance[allchance.length] = [nums[i], nums[k], nums[j], nums[f]]
//               }
//            } 
//        }
//    }
//}
//console.log(allchance) 

function foursum(nums, target) {
    var allchance = [];
    for (var i = 0; i < nums.length; i++) {
        for (var k = i + 1; k < nums.length; k++) {
            for (var j = k + 1; j < nums.length; j++) {
                for (var f = j + 1; f < nums.length; f++) {
                    if (nums[i] + nums[k] + nums[j] + nums[f] == target) {
                        allchance[allchance.length] = [nums[i], nums[k], nums[j], +nums[f]]
                    }  
                }
            }
        }  
    } return allchance
} console.log(foursum([1,0,-1,0,-2,2], 0))