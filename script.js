// 71. Introducing Else Statements

// function testElse(val) {
//   let result = "";

//   if (val > 5) {
//     result = "Bigger than 5";
//   }
//   else {
//     result = "5 or Smaller";
//   }
//   return result;
// }

// testElse(4);

// 72. Introducing Else If Statements

// function testElseIf(val) {
//   if (val > 10) {
//     return "Greater than 10";
//   }
//   else if (val < 5) {
//     return "Smaller than 5";
//   } 
//   else {
// 		return "Between 5 and 10";
//   }
// }

// 73. Logical Order in If Else Statements

// function orderMyLogic(val) {
//   if (val < 5) {
//     return "Less than 5";
//   } else if (val < 10) {
//     return "Less than 10";
//   } else {
//     return "Greater than or equal to 10";
//   }
// }

// orderMyLogic(7);

// 74. Chaining If Else Statements

// function testSize(num) {

//   if (num < 5) {
//     return "Tiny";

//   } else if (num < 10) {
//     return "Small";
//   }

//   else if (num < 15) {
//     return "Medium";
//   }
//   else if (num < 20) {
//     return "Large";
//   }
//   else if (num >= 20) {
//     return "Huge";
//   }

//   return "Change Me";
// }

// testSize(7);

// 75. Golf Code

// const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// function golfScore(par, strokes) {
//   if (strokes == 1) {
//     return names[0];
//   } else if (strokes <= par - 2) {
//     return names[1];
//   } else if (strokes === par - 1) {
//     return names[2];
//   } else if (strokes === par) {
//     return names[3];
//   } else if (strokes === par + 1) {
//     return names[4];
//   } else if (strokes === par + 2) {
//     return names[5];
//   } else if (strokes >= par + 3) {
//     return names[6];
//   }
//   return "Change Me";
// }

// golfScore(5, 4);

// 76. Selecting from Many Options with Switch Statements

// function caseInSwitch(val) {
//   let answer = "";

// switch(val) {
//   case 1:
//   answer = "alpha";
//   break;
//   case 2:
//   answer = "beta";
//   break;
//   case 3: 
//   answer = "gamma";
//   break;
//   case 4:
//   answer = "delta";
//   break;
// }
//   return answer;
// }

// caseInSwitch(1);

// 77. Adding a Default Option in Switch Statements

// function switchOfStuff(val) {
//   let answer = "";

//   switch(val) {
//     case "a":
//     answer = "apple";
//     break;
//     case "b":
//     answer = "bird";
//     break;
//     case "c":
//     answer = "cat";
//     break;
//     default:
//     answer = "stuff";
//     break;
//   }
//   return answer;
// }

// switchOfStuff(1);

// 78. Multiple Identical Options in Switch Statements

// function sequentialSizes(val) {
//   let answer = "";

//   switch(val) {
//     case 1:
//     case 2:
//     case 3:
//     answer = "Low";
//     break;
//     case 4:
//     case 5:
//     case 6:
//     answer = "Mid";
//     break;
//     case 7:
//     case 8:
//     case 9:
//     answer = "High";
//     break;
//   }

//   return answer;
// }

// sequentialSizes(1);

// 79. Replacing If Else Chains with Switch

// function chainToSwitch(val) {
//   let answer = "";

//   switch (val) {
//     case "bob":
//     answer = "Marley";
//     break;
//     case 42:
//     answer = "The Answer";
//     break;
//     case 1:
//     answer = "There is no #1";
//     break;
//     case 99:
//     answer = "Missed me by this much!";
//     break;
//     case 7: 
//     answer = "Ate Nine";
//     break;
//   }

//   return answer;
// }

// chainToSwitch(7);

// 80. Returning Boolean Values from Functions

function isLess(a, b) {
    return a < b;
}

isLess(10, 15);