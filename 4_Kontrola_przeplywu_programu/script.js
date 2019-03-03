//Zadanie 1
var number1 = 50;
var number2 = 100;

if (number1 > number2) {
    console.log("number1");
} else {
    console.log("number2");
}

//Zadanie 2
var number3 = 23;
var number4 = 48;
var number5 = 42;

if (number3 > number4 && number3 > number5) {
    console.log(number3);
}
else if (number4 > number3 && number4 > number5) {
    console.log(number4);
}
else {
    console.log(number5);
}

//Zadanie 3
for(var i=0; i<10; i++) {
    console.log("Lubię JavaScript");
}

//Zadanie 4
var result = 0;   //pętla, która doda do siebie liczby od 1 do 10.
for(var i=1; i<=10; i++) {
    result += i;
    console.log(result);
}

//Zadanie 5
var n = 5;
for (i=0; i<=n; i++) {
    if(i % 2 == 0) {
        console.log(i + " - parzysta");
    }
    else {
        console.log(i + " - nieparzysta");
    }
}

//Zadanie 6
for(var i=0; i<4; i++) {
    for(var j=0; j<8; j++) {
        console.log("i="+i+", j="+j);
    }
}

// Zadanie 7

/*
 Pętla zewnętrzna z licznikiem o zmiennej ```i``` zajmuje się
wierszami, a pętla wewnętrzna z licznikiem o zmiennej ```j``` zajmuje się kolumnami.
Zaczynamy od lewej górnej gwiazdki i przemieszczamy się w prawo będąc w pierwszym wierszu.
Kiedy pętla wewnętrzna dojdzie do ostatniej kolumny, kończy działanie. Wtedy pętla zewnętrzna
zwiększa licznik o 1 (przechodzi do kolejnego wiersza) i tak dalej.
*/

//Zmienna, przechowująca wielkość naszego kwadratu
var size = 5;

//Zmienna przechowująca jedną linię gwiazdek
var lineOfStars = "";

for(var i = 0; i < size; i++) {
    // W każdym kroku muszę zresetować zmienną, ponieważ zaczynam tworzenie nowej linii
    lineOfStars = "";
    for(var j = 0; j < size; j++) {
        //Do zmiennej lineOfStars dodaje gwiazdkę
        lineOfStars = lineOfStars + "*";
    }
    // Oddzielam kazdą linię, pustym wierszem, ponieważ przeglądarka widząc 5 takich samych
    //wyników zwinie nasz kwadrat z gwiazdek do jednej linijki
    console.log(" ");

    //Wypisuje w konsoli zmienną lineOfStars (jej zawartość - dlatego jest bez cudzysłosów)
    console.log(lineOfStars);
}


//Zadanie 8

var size = 5;

var lineOfStars = "";

for (var i = 0; i < size; i++) {
    lineOfStars = lineOfStars + "*";
    console.log(lineOfStars);
}
