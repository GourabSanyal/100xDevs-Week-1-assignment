/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

transactions = [
  {
      "itemName": "Item 1",
      "category": "Category A",
      "price": 10,
      "timestamp": "2023-06-10"
  },
  {
      "itemName": "Item 2",
      "category": "Category B",
      "price": 20,
      "timestamp": "2023-06-11"
  },
  {
      "itemName": "Item 3",
      "category": "Category A",
      "price": 15,
      "timestamp": "2023-06-12"
  },
  {
      "itemName": "Item 4",
      "category": "Category C",
      "price": 5,
      "timestamp": "2023-06-13"
  },
  {
      "itemName": "Item 5",
      "category": "Category B",
      "price": 10,
      "timestamp": "2023-06-14"
  }
]


function calculateTotalSpentByCategory(transactions) {
  var categoryTotals = {};

  for (var i = 0; i < transactions.length; i++) {
    var category = transactions[i].category;
    var price = transactions[i].price;

    if (category in categoryTotals) {
      categoryTotals[category] += price;
    } else {
      categoryTotals[category] = price;
    }
  }

  var res = [];

  // Generate the list of objects with category totals
  for (var category in categoryTotals) {
    var categoryObj = {};
    categoryObj[category] = categoryTotals[category];
    res.push(categoryObj);
  }

  return res;
}


var ans = calculateTotalSpentByCategory(transactions)
console.log(ans)

module.exports = calculateTotalSpentByCategory;
