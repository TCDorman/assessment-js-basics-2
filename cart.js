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

const customer = [
    {
        name: 'Colin',
        phoneNum: '513-759-1586',
        email: 'cdorman@gmail.com',
        favFood: 'pizza',
        amtSpent: 10
    }
]

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

//CODE HERE

const summedPrice = cart.reduce((acc, cb) => acc + cb.price, 0)
console.log(summedPrice)

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
calcFinalPrice = (cartTotal, couponValue, tax) => {
    return cartTotal * (1 + tax) - couponValue
}
console.log(calcFinalPrice(20, 1, .07))

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
    ***OUTLINE***
    The resturaunt will need the customer name for obvious reasons. A name will be a string.
    They will aslo need the customers favorite menu items to provide a better experience. this is a string because it is a word
    Having their emails as well as their phone numbers for promotional purposes is good as well. This is a string because we will not be using any math functions on the phone number.
    Also knowing how much they spend to help know what you're bringing in. This is a number so that you can add up about how much you're bringing in from certain customers.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    name: `Sally`,
    favFood: `Spaghetti`,
    email: `sally@gmail.com`,
    phoneNum: `(123)4567892`,
    amtSpent:20
}