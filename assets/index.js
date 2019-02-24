 //Make the page available when the Dom and entire page is ready to be displayed
// $(document).ready(function() {

    // Shopping list
const shop =[
  {
    items: {
        clothing: ['Shirt', 'Jacket', 'Pants'],
        electronics: ['echo dot', 'Nintendo Switch', 'Blue Ray Player'],
        movies: ['How to Train your Dragon: The Hidden World', 'Avengers Infinity War', 'The Greatest Showman'],
        tools: ['Hammer', 'Shovel', 'Prunin Shears'],
        toys: ['Lego Super Hero', 'Hot Wheels', 'Disney Plush Mickey Mouse']
    }
     
  }
];    //End of shopping list

//Check structure of the list
console.log('shop', shop);

// Testing output
console.log(shop[0].items.tools[1]);
console.log(shop[0]);
$('#contentType').append(`<li>${shop[0].items.clothing[0]}</li>`);
$('#contentType').append(`<li>${shop[0].items[1]}</li>`);
// $('#groceries').append(`<p>${tasks.grocery.produce[0]}</p>`);

// const render = function() {
  
    // Adding list Shopping types
    // for( let i = 0; i < shop[0].items.length; i++ ) {
    //   $('.contentType').append(`<br>                               
    //                             <li>${shop[0].items[i]} </li>
    //                             `);

            // console.log(shop[0].items[i])
    // } //End of loop
    // render();
    // console.log(`render()`); 
// };    //End of render



//End of document
// });