# react-food-app

This is simple react(with bootstrap 4,ts) based food ordering app. 
This consume mock api created by mockable.io. Api get a list of all the food items.
(URL: http://demo7822114.mockable.io/getAllFoodItem')

Based on response webapp displays grid of food items, with food descriptions,picture, price and ratings.
Web app provides funtionality of search and fiter items (based on rating,category) with a reset filter functionality.
The search and filter is implemented on UI(without triggering api).
User can add or delete items in the food card using qunatity picker.

When user click on order now button. Order summary with items price and order total is displayed to user.
A confirmation modal appear to user when he place the order.

Note : 

Response : Array of items

One item json response 

id: 1,
name: "Margherita",
description: "A hugely popular margherita, with a deliciously tangy single cheese topping",
qty: 0,
price: 300,
category: "Pizza",
userRating: 4,
imgSrc: "https://www.dominos.co.in/blog/wp-content/uploads/2019/12/new_double_cheese_margherita.jpg"
