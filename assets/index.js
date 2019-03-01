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

const cart = [
    {
        clothing: [],
        electronics: [],
        movies: [],
        tools: [],
        toys: [] 
    }
];

//Check structure of the list
console.log('shop', shop);

// Clear function
const clearContent = function(){
    $('.contentType').empty('');
    $('.contentType2').empty('');
    $('#category').empty(``);
    $(`.ul`).empty('');
    $(`.li`).empty('');
  };


// $('.btn-secondary').on('click', emptyList);




//  $('body').on('click', ".fas", appendtable1);
    // ${this}.remove

// remove items from the cart
const itemRemoval = function(x){
    const nameVal = $(this).val();
    console.log(nameVal);
    $(this).remove();
};

// $("body").on('click', `.fa-minus-circle`, itemRemoval);
$("body").on('click', '.remove', itemRemoval);




// Calling a function to render the information

const render = function(htmlStr){
    $('#option').html(htmlStr);

  }


// If a category from the drop-down is selected then display it on the screen on the left in a list
const selected = function(y,x) {
    clearContent();
    console.log(y);
    console.log(x);

    const type = shop[0].items[x];
    console.log(`Type: ${type}`);


    $('#category').append(`<h3>${y}</h3>`);
    let result = ``;
    for( let i = 0; i < type.length; i++ ) {

// original
        // $('#contentType2').append(`<li>${type[i]}</li>`);

        result += `<li class="choose"  category = "${y}" id=${type[i]}>${type[i]}</li><br>`;


        // result += `<li id=${[i]}>${type[i]}</li><br>`;
        console.log(`This is the id ${[i]}`);


    } //End of the for loop for selected function
    render(result);
}; //End Click on



// Based on the click option on the drop-box it provides all the attributes on the line with <a> tag

$("a").on("click", function(event){
 
    const idName = $(this).attr("id");
    // console.log(idName);

    const aName = $(this).html();

    selected(aName, idName);
    // appendtable1(aName);   



    }); //End of Click

// Sort the category
$("#az").on("click", '.sort', function()
{
  $("#sort").tablesorter({
    sortList: [[0,0]],
    headers: {3:{sorter:false}}
    // $("th").sorted.ascending
  });

//   $('thead th.sort').data('sortBy', function(th, td, tablesort) {
  
});
// }
// ); 

// const find = function(){


// };

// $("body").on("click", '.choose', function(event){
 

// }
    


// Based on the click option on the drop-box it provides all the attributes on the line with <li> tag

$("body").on("click", '.choose', function(event){
    const selection = $(this).index();
    console.log(selection);

    // Alert if there is the same item

    // if($("tr") != (this).val();
    // if $("exist").val("click", '.choose', function(event){
    // }


   const cat = $(this).attr("category");
   console.log(cat);

   const title = $(`<td id="sort">`).text(cat);

   const aName = $(this).html();
   console.log(`This is the .html(): ${aName}`);

   
   const detail = $(`<td id="exist">`).text(aName);
   console.log(`Tags on front ${detail}`);
   
   const tblBody = $(`tbody`);

   const tblRow = $(`<tr class="remove">`);
 

    const icon = $(`<td class="fas fa-minus-circle"></td>`);

   tblRow.append(title, detail, icon);
//    Append the table row to the tbody element
   tblBody.append(tblRow);

//    if ($(this).val !=) 

//    switch (idName) {
//     case 0:
//         tblRow.append(label);
//         tblBody.append(tblRow);
//         console.log(`Clothing Selected`);
//         // type = "clothing";        
//         break;
//     case 1:
//         text = "#clothDown";
//         $('#contentType2').append(`<li>Movies Selected</li>`);
//         // type = "movies";
//         console.log(`Movies Selected`);
//         break;
//     case 2:
//         text = "#toolsDown";
//         $('#contentType2').append(`<li>Tools Selected</li>`);
//         // type = "tools";  
//         console.log(text);   
//         break;
//     case 3:
//         text = "#electronicsDown";
//         $('#contentType2').append(`<li>Electronics Selected</li>`);
//         // type = "electronics"; 
//         console.log(text);  
//         break;

});

const before = $("td").val();
console.log(before);

//*****************************Testing other processes*****************************************************   

// Testing the process by bringing in the ID
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

    //   $('.dropdown-toggle').dropdown();

// Case selection of the of the drop down **No longer going to utilize case

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