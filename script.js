 console.log("hello")

/* (if-else and switch)*/

const LeapYear = (y) =>{ 
   let leap = (((y%100)!==0) && ((y%4)===0) || ((y%400)===0))? ` ${y} is a leap year` : `${y} isn't a leap year`
   return leap
}
console.log(LeapYear(1992))



const TicketPricingAge = (x) => {
    let age = Number(prompt("How old are you?"))
    let price ="" ;
    switch(true) {
        case(age<=12) : price="$10" ;break ;
        case(age>=13 && age<=17): price="$15";break;
        default : price = "$20"; break;
    }return `Your ticket price is ${price}`
}
console.log(TicketPricingAge())



const WeatherClothingAdviser = (a,b) => {
    let temp = Number(prompt("what is the current temperature?"))
    let rain = prompt("is it raining outside? answer with yes or no ")
    if (temp<= 25 && rain === "yes") {return "we advise you to wear gloves and hat with your coat and you should take the umbrella "}
    else if (temp<=25 && rain ==="no" ) {return"your don't have to take the umbrella but put on your coat"}
    else if (rain ==="yes") {return"just take your umbrella with you"}
    else {return "you don't have to wear gloves and hat"}
}
console.log(WeatherClothingAdviser())



/*Recursion*/

const Fibonacci =(n) =>{
let result =0;
if (n === 0) {result= 0 ;}
else if (n ===1) {result=  1 ;}
else { result += ((Fibonacci(n-1)) + (Fibonacci(n-2)))}
        return result
}
console.log(Fibonacci(5))



const Power = (nb,p) => {
    let  result = 1;
    if (p>0) {
    result = nb*Power(nb,(p-1)) 
    } 
    return result 
}
console.log(Power(5,2))



const StringPalindrome =(str) => {
if (str.length===0) {
    return `the given string is a palindrome`}
else if (str[0]!==str[(str.length)-1]) {
    return `the given string isn't a palindrome`}
    else {
str =str.slice(1,-1)
    return StringPalindrome(str)
    }
}
console.log(StringPalindrome("poop"))