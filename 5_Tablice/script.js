//Zadanie 1
var numbers = [23, 12, 48];

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

//Zadanie 2

var fruit = ["kiwi", "mango", "borowka", "banan"];

console.log(fruit[0]);
console.log(fruit [fruit.length -1]);  //ostatni owoc w konsoli

for (var i = 0; i < fruit.length; i++) {  //pętla wypisuje wszystkie elementy tablicy w konsoli
    console.log(fruit[i]);
}


//Zadanie 3
var mynumbers = [17, 10, 23, 73, 94, 93, 87, 59, 73, 81];
var sum = 0;

for (var i = 0; i < mynumbers.lenght; i++) { //suma wszystkich elementów tablicy.
    sum += mynumbers[i];
}
    console.log(sum);


//Zadanie 4
var count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var summary = 0;

for (var i = 0; i < count.length; i++) { //suma wszystkich parzystych liczb.
    if (count[i] % 2 == 0) {
        summary += count[i];
    }
}

console.log(summary);


//Zadanie 5
var nr = [83, 2, 5, 4, 24, 6, 23, 8, 55, 10];
var max = 0;

for (var i = 0; i < nr.length; i++) {  //największa liczba
    if (max < nr[i]) {
        max = nr[i];
    }
}
console.log(max);


//Zadanie 6 // Przyznam się że korzystałam z internetu, bo nie do końca rozumiem te pętle
var arrWithNumber = [12, 7, 4, 3, 9, 11, 7, 3, 11, 18];
var firstIndex;
var isMatch = false;

for (var i = 0; i < arrWithNumber.length; i++) {
    for (var j = i + 1;  j< arrWithNumber.length; j++) {
        if (arrWithNumber[i] === arrWithNumber[j]) {
            firstIndex = arrWithNumber.indexOf(arrWithNumber[i]); //i właśnie nie rozumiem dlaczego właśnie tak ma być :(
            isMatch = true;
            break;
        }
    }
    if (isMatch) {break}
}
console.log(firstIndex)


//Zadanie 7
var positions = [87, 36, 2, 88, 44, 78, 23, 8, 85, 17];

for (var i = positions.length - 1; i >= 0; i--) {  //liczby wypisane od tyłu
    console.log(positions[i]);
}