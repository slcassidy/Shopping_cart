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
    $('#category').empty(``);
  };

// When selecting the button to clear the list that is shown
// const emptyList = function(){
//     clearContent();
//   };



// $('.btn-secondary').on('click', emptyList);


// Testing output
// console.log(shop[0].items.tools[1]);
// console.log(shop[0]);
// $('#contentType').append(`<li>${shop[0].items.tools[0]}</li>`);

// *****Testing to pull over the variable****

// Bring over the selected item

// const verifyInfo= function() {
//     clearContent();

//     const nameVal = $('#option').val();
  
//     console.log(nameVal);
  
//     let result = "Not found";
//     for (i=0; i < shop[0].items.tools[i].length; i++) {
//       // Taking into account the case sensetive

//       if (shop[0].items.tools[i] === nameVal) {
//         result = "Tools"
//         // category = "tools"
//       }
  
      
//     }
    
//     $('#cat').append(`<p> ${result} </p>`);
//     $('#list').append(`<p> ${nameVal} </p>`);
//     // $('.content').show();

//     result ='';
//     // $('#name').val(''); 
    
//   }
  
  
//   $('#option').on('click', verifyInfo);
//   *****End Testing****





//   Selecting Clothing directly

//   $( "#clothDown" ).on("click",function() {
//       clearContent();
//     // $( "#log" ).append( "<div>Handler for .mouseover() called.</div>" );
//     // console.log("Clothing Mouse Over");
//     $('#category').append(`<h3>Clothing</h3>`);
//     // Show the list of Clothing
//     for( let i = 0; i < shop[0].items.clothing.length; i++ ) {
//         $('#contentType2').append(`<li>${shop[0].items.clothing[i]} </li>`);
//         // console.log(shop[0].items.clothing[i]);

//      } 

//   }); //End Click on

//    Show the list of Electronics

//   $( "#electronicsDown" ).on("click",function() {
//         clearContent();
//     $('#category').append(`<h3>Electronics</h3>`);
//         for( let i = 0; i < shop[0].items.electronics.length; i++ ) {
//             $('#contentType2').append(`<li>${shop[0].items.electronics[i]} </li>`);
//             console.log(shop[0].items.electronics[i]);

//         } //End of the for loop for electronics

  
// }); //End Click on

// Testing Calling a function

const selected = function(y,x) {
    clearContent();
    // const header = $(this).html();
    console.log(y);
    console.log(x);
    const type = 'shop[0].items.' + x;
    console.log(`Type: ${type}`);
    // const check = 'shop[0].items.' + x ;
    // console.log(`check: ${check}`);

    $('#category').append(`<h3>${y}</h3>`);
    for( let i = 0; i < shop[0].items.toys.length; i++ ) {
        console.log(`Type2: ${type}`);
        console.log(`Type2: ${x}`);
        // $('#contentType2').append(`<li>${shop[0].items.x[i]}</li>`);
        $('#contentType2').append(`<li>${shop[0].items.toys[i]}</li>`);
        // console.log(shop[0].items.x[i]);

    } //End of the for loop for selected function

}; //End Click on


  

//   $('.dropdown-toggle').dropdown();

// Case selection of the of the drop down

    $("a").each(function(i){
        $(this).on("click", {x:i}, function(event){
        //   alert("The " + $(this).index() + ". paragraph has data: " + event.data.x);
        //   const selected = event.data.value
        //   console.log(`This is the selected item: ${this} each ${selected}`);

        //   Case choosing what is selected
        const selection = $(this).index();
        
     
        const idName = $(this).attr("id");
        const aName = $(this).html();

        const attribute = '#' + $(this).attr("id")

        console.log(attribute);

        selected(aName, idName);
        
        console.log(idName);
        // console.log(aName);



        // const type = '';

    //     switch (selection) {
    // case 0:
    //     text = "toysDown";
    //     $('#contentType2').append(`<li>Clothing Selected</li>`);
    //     console.log(`Clothing Selected`);
    //     // type = "clothing";        
    //     break;
    // case 1:
    //     text = "#clothDown";
    //     $('#contentType2').append(`<li>Movies Selected</li>`);
    //     // type = "movies";
    //     console.log(`Movies Selected`);
    //     break;
    // case 2:
    //     text = "#toolsDown";
    //     $('#contentType2').append(`<li>Tools Selected</li>`);
    //     // type = "tools";  
    //     console.log(text);   
    //     break;
    // case 3:
    //     text = "#electronicsDown";
    //     $('#contentType2').append(`<li>Electronics Selected</li>`);
    //     // type = "electronics"; 
    //     console.log(text);  
    //     break;
    // case 4:
    //     text = "#toysDown";
    //     $('#contentType2').append(`<li>Electronics Selected</li>`);
    //     // type = "toys";  
    //     console.log(text);   
    //     break;
        
    // default:
    //     text = "No value found new";
    //     console.log(`Not Working!!!`);
    //     }  //End of Case
    //     // console.log(type);

        }); //End of Click
        

      }); //End of Each

// Case statement process:
// $("a").each(function(i){
//     $(this).on("click", {x:i}, function(event){
//     //   alert("The " + $(this).index() + ". paragraph has data: " + event.data.x);
//     //   const selected = event.data.value
//     //   console.log(`This is the selected item: ${this} each ${selected}`);

//     //   Case choosing what is selected
//     const selection = $(this).index();
 
    
//     const attribute = $(this).attr("id")
//     console.log(attribute);

//     const type = '';

//     switch (selection) {
// case 0:
//     text = "toysDown";
//     $('#contentType2').append(`<li>Clothing Selected</li>`);
//     console.log(`Clothing Selected`);
//     // type = "clothing";        
//     break;
// case 1:
//     text = "#clothDown";
//     $('#contentType2').append(`<li>Movies Selected</li>`);
//     // type = "movies";
//     console.log(`Movies Selected`);
//     break;
// case 2:
//     text = "#toolsDown";
//     $('#contentType2').append(`<li>Tools Selected</li>`);
//     // type = "tools";  
//     console.log(text);   
//     break;
// case 3:
//     text = "#electronicsDown";
//     $('#contentType2').append(`<li>Electronics Selected</li>`);
//     // type = "electronics"; 
//     console.log(text);  
//     break;
// case 4:
//     text = "#toysDown";
//     $('#contentType2').append(`<li>Electronics Selected</li>`);
//     // type = "toys";  
//     console.log(text);   
//     break;
    
// default:
//     text = "No value found new";
//     console.log(`Not Working!!!`);
//     }  //End of Case
//     // console.log(type);

//     }); //End of Click
    

//   }); //End of Each

//  //Use toggle method.. -> https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_toggle
//     // console.log(type);
//     // // Show the list of Clothing
//     // for( let i = 0; i < shop[0].items.type.length; i++ ) {
//     //     $('#contentType2').append(`<li>${shop[0].items.type[i]} </li>`);
//     //     // console.log(shop[0].items.clothing[i]);

//     //  } 


// Remove the items from the list using the removal icon
// const removal = function() 
// $(.fa-minus-circle)



//End of document
});