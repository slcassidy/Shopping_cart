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
// console.log(shop[0].items.tools[1]);
// console.log(shop[0]);
$('#contentType').append(`<li>${shop[0].items.clothing[0]}</li>`);





  // Show the list of Electronics
for( let i = 0; i < shop[0].items.electronics.length; i++ ) {
    $('#contentType2').append(`<li>${shop[0].items.electronics[i]} </li>`);
    console.log(shop[0].items.clothing[i]);

  } 

  $( "#clothDown" ).mouseover(function() {
    // $( "#log" ).append( "<div>Handler for .mouseover() called.</div>" );
    console.log("Clothing Mouse Over");
    // Show the list of Clothing
    for( let i = 0; i < shop[0].items.clothing.length; i++ ) {
        $('#contentType2').append(`<li>${shop[0].items.clothing[i]} </li>`);
        // console.log(shop[0].items.clothing[i]);

    } 

  });

//   $('.dropdown-toggle').dropdown();

//End of document
// });