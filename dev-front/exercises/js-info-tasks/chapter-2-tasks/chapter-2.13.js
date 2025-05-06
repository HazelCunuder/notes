"use strict"

// Tasks js.info 2.13

// Task 1 - Last value alerted by the code and why

let i = 3;

while (i) {
  alert( i-- );
}

// Task 2 - Write value of each iteration of while loop

// prefix form

let i = 0;
while (++i < 5) alert( i ); // 0 --> 1 --> 2 --> 3 --> 4

// postfix form

let i = 0;
while (i++ < 5) alert( i ); // 0 --> 1 --> 2 --> 3 --> 4 --> 5

// Task 3 - Write value for each iteration of for loop

// postfix form

for (let i = 0; i < 5; i++) alert( i ); // i1: 0, i2: 1, i3 = 2, i4 = 3, i5 = 4

// prefix form

for (let i = 0; i < 5; ++i) alert( i ); // i1: 0, i2: 1, i3 = 2, i4 = 3, i5 = 4

// Task 4 - Output even number with for loop

for (let i = 2; i <= 10; i++); {
    if (i % 2 == 0){
        alert(i);
    }
}

// Task 5 - Replace for with while

let i = 0

while (i < 3) {
    alert (`number ${i}!`);
    i++;
}

// Task 6 - Repeat until imput is correct

let num;

do {
    num = prompt("Enter a number above 100", 0);
} while (num <=100 && num);

// Task 7 - Output prime number

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}
