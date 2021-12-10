///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

// //CODE HERE
// const total = cart.reduce((obj,cv)=>{
// return obj.price + cv.price
// })

// console.log(total)
//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (total,coupon,tax)=>{
let finalTotal = total+(total*tax)-coupon
return finalTotal
}
console.log(calcFinalPrice(112,10,.06))


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    a resturant would need to know a customers name so they can assign an order to it, input as a string since is wont contain numbers,
    their order so we know the items they want, input as a string since it wont contain numbers
    time ordered entered as a number so it can be easily tracked and compared to other times.
    

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
class Customer {
    constructor(name, order, orderTime){
        this.name = name
        this.order = order
        this.orderTime = orderTime
    }
}
