//Zadanie 1
var isChecked = false;
var isRendered = true;

console.log(isChecked == isRendered);
//Przy porównaniu dwóch zmiennych mamy wynik - false

//Zadanie 2
var number1 = 31;
var number2 = 8;
var resultModulo = 0;

console.log(resultModulo = number1 % number2);
console.log(resultModulo); //wynik 7

//Zadanie 3
var name = "John";
var lastname = " Travolta";
var joinedStrings = "";
joinedStrings = "John Travolta";

console.log(name + lastname); // rezultat w konsoli John Travolta
console.log(joinedStrings);

//Zadanie 4
var myNumber = 4;
var myString = "4";

console.log(myNumber == myString); //wynik "true" - zmienne mają tą samą wartość
console.log(myNumber === myString); //wynik "false" - zmienne mają różne typy wartości

//Zadanie 5
var counter = 145;
console.log(counter);

var result1 = counter + 1;
console.log(result1);

var result2 = counter - 1;
console.log(result2);

//Zadanie 6
var number1 = 62;
var number2 = 37;
var result = null;

result = true;
console.log(result = number1 > number2);
console.log(result);

