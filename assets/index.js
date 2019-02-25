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

//Check structure of the list
console.log('shop', shop);

// Clear function
const clearContent = function(){
    $('.contentType').empty('');
    $('.contentType2').empty('');
  };

// When selecting the button to clear the list that is shown
// const emptyList = function(){
//     clearContent();
//   };



// $('.btn-secondary').on('click', emptyList);


// Testing output
// console.log(shop[0].items.tools[1]);
// console.log(shop[0]);
$('#contentType').append(`<li>${shop[0].items.tools[0]}</li>`);

// *****Testing to pull over the variable****

// Bring over the selected item

const verifyInfo= function() {
    clearContent();

    const nameVal = $('#option').val();
  
    console.log(nameVal);
  
    let result = "Not found";
    for (i=0; i < shop[0].items.tools[i].length; i++) {
      // Taking into account the case sensetive

      if (shop[0].items.tools[i] === nameVal) {
        result = "Tools"
        // category = "tools"
      }
  
      
    }
    
    $('#cat').append(`<p> ${result} </p>`);
    $('#list').append(`<p> ${nameVal} </p>`);
    // $('.content').show();

    result ='';
    // $('#name').val(''); 
    
  }
  
  
  $('#option').on('click', verifyInfo);
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
 //Use toggle method.. -> https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_toggle
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


// Remove the items from the list using the removal icon
// const removal = function() 
// $(.fa-minus-circle)



//End of document
});