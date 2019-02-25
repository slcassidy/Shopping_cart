 //Make the page available when the Dom and entire page is ready to be displayed
$(document).ready(function() {

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

// Clear function
const clearContent = function(){
    $('.contentType').empty('');
    $('.contentType2').empty('');
  };

//Check structure of the list
console.log('shop', shop);

// Testing output
// console.log(shop[0].items.tools[1]);
// console.log(shop[0]);
$('#contentType').append(`<li>${shop[0].items.tools[0]}</li>`);

// *****Testing to pull over the variable****

const verifyInfo= function() {
    clearContent();
    // $('.content').show();
    const nameVal = $('#name').val();
  
    console.log(nameVal);
  
    let result = "Not found";
    for (i=0; i < employeeList.length; i++) {
      // Taking into account the case sensetive

      if (shop[0].items.tools[i] === nameVal || employeeList[i].name.toLowerCase() === nameVal.toLowerCase()) {
        result = "found"
      }
  
      
    }
    
    $('.content').append(`<p> ${nameVal} has been ${result} in the employee records </p>`);
    $('.content').show();

    result ='';
    $('#name').val(''); 
    
  }
  
  
  $('#search').on('click', verifyInfo);
//   *****End Testing****



// Show the list of Electronics
for( let i = 0; i < shop[0].items.electronics.length; i++ ) {
    $('#contentType2').append(`<li>${shop[0].items.electronics[i]} </li>`);
    console.log(shop[0].items.clothing[i]);

  } 

//   Selecting Clothing directly

  $( "#clothDown" ).mouseover(function() {
      clearContent();
    // $( "#log" ).append( "<div>Handler for .mouseover() called.</div>" );
    console.log("Clothing Mouse Over");
    // Show the list of Clothing
    for( let i = 0; i < shop[0].items.clothing.length; i++ ) {
        $('#contentType2').append(`<li>${shop[0].items.clothing[i]} </li>`);
        // console.log(shop[0].items.clothing[i]);

     } 

  }); //End Mouseover


  

//   $('.dropdown-toggle').dropdown();

// Case selection of the of the drop down

const checkSelect = function (){

    x = $('.select').attr("id");

    console.log(x);
    switch (x) {
    case "toysDown":
        text = "toysDown";
        $('#contentType2').append(`<li>Toys Selected</li>`);
        type = toys;
        break;
    case "clothDown":
        text = "#clothDown";
        $('#contentType2').append(`<li>Clothing Selected</li>`);
        type = `clothing`;
        break;
    case "electronicsDown":
        text = "#electronicsDown";
        $('#contentType2').append(`<li>Electronics Selected</li>`);
        type = electronics;   
        break;
    default:
        text = "No value found new";
        $('#contentType2').append(`<li>Not Working</li>`);
        }

    // console.log(type);
    // // Show the list of Clothing
    // for( let i = 0; i < shop[0].items.type.length; i++ ) {
    //     $('#contentType2').append(`<li>${shop[0].items.type[i]} </li>`);
    //     // console.log(shop[0].items.clothing[i]);

    //  } 

}; //End of checkSelect

// const pick = '#' && $('.select').mouseover().attr("id");

// console.log(pick);
// $('.select').on('click', checkSelect); 
// $('.select').mouseover(checkSelect); 



//End of document
});