//Checking for multiples of 3, 5, and both 3 and 5
for ( var i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {console.log( " FizzBuzz" );}
  
  else if ( i%3 === 0 ) 
  {console.log(" Fizz" );}
  
  else if ( i%5 === 0 ) 
  {console.log( " Buzz" );}
  
  else
  {console.log(i);}
  
}

//Printing the sum of the multiples of 3 and 5 in numbers between 1 and 1000

var sum = 0;
for (var a = 0; a < 1000; a++)
{
    if (a % 3 === 0 || a % 5 === 0)
    {
       sum += a;
    }
}
console.log(sum);

//Checking for the odd and even numbers using conditional statements
for (var i = 0; i < 20; i++)
{   
    if (i%2===0)
    {
        console.log(i +" is an even number");
    }
    else if (i%2!==0)
    {
        console.log(i +" is an odd number");
    }
    else
    {
        console.log(i);
    }
}

//Checking for the greater number in the given array [-2, 4, -5, 6, 0]

var arr = [-2, 4, -5, 6, 0];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i] ) {
        largest = arr[i];
    }
}
console.log(largest);

//Checking for the geater number between 10 and 40 using conditional statements
a = 10
b = 40

if(a>b){
    console.log(a)
}

else
{
    console.log(b)
}

//checking for the leap years between 2000 and 2022
function leap_years(st_year, end_year) {
    var year_range = [];
    for (var i = st_year; i <= end_year; i++)
    {
         year_range.push(i);
    }
    var new_array = [];

year_range.forEach(
function(year)
{ 
   if (LeapYear(year)) 
   new_array.push(year);
});

return new_array;
 }

function LeapYear(year) {
if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
            return year;
    } else {
            return false;
    }
}

console.log(leap_years(2000,2022));


