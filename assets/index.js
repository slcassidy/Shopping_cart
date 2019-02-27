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
    $(`.ul`).empty('');
    $(`.li`).empty('');
  };

// When selecting the button to clear the list that is shown
// const emptyList = function(){
//     clearContent();
//   };



// $('.btn-secondary').on('click', emptyList);


// Testing output
// console.log(shop[0].items.tools[1]);
// console.log(shop[0]);
$('#test').append(`<li class= getTest>${shop[0].items.tools[0]}</li>`);
const appendtable1 = function() {
    const tblBody = $(`tbody`);
     
    const tblRow = $(`<tr>`);
    const name = $(this).html();
    console.log(name);
    const detail = $(`<td>`).text("123Test123");
    const detail1 = $(this).attr('getTest');
    console.log(detail1);
    const test = $(`<td>`).text(name);
    console.log(detail);
    const headerCat = $('#category').val();
    console.log(headerCat);
    const cat = $(`<td>`).text(headerCat);
    // const cat = $(`<td>`)text(`Seesaw`);
    console.log(cat);
    const icon = $(`<td class="fas fa-minus-circle"></td>`);

    // const lastestPrice = $(`<td>`).text(response.latestPrice);
    
    // tblRow.append(cat, detail, test);
    tblRow.append(name).append(detail).append(icon);
    // tblRow.append(cat, detail, test);
// Append the table row to the tbody element

    tblBody.append(tblRow);
    //  $('#display').append(`<div class='proj task-color'>${$(this).attr('choose')}</div>`);

    // if()
     
  };


$('.getTest').on('click', appendtable1);

// remove items
const itemRemoval = function(){
    const nameVal = $('#getTest').val();
    console.log(nameVal);
    const count = nameVal.indexOf();
    console.log(count);
    
  // inside for loop
    // for( let i = 0; i < employeeList.length; i++ ){
    //   if(employeeList[i].name === nameVal){
    //     console.log(i);
    //     employeeList.splice(i,1);
    //   }

    // }
};

$('.fa-minus-circle').on('click', itemRemoval);

const removeName = function() {
    clearContent();
    const nameVal = $('#name').val();
    console.log(nameVal);
  // inside for loop
    for( let i = 0; i < employeeList.length; i++ ){
      if(employeeList[i].name === nameVal){
        console.log(i);
        employeeList.splice(i,1);
      }
      // employeeList.splice(employeeList.indexOf(nameVal), 1);
    }
  
    // $('#name').val('');
    showEmployeeList();  
  }
  
  
  $('#deleteRecord').on('click', removeName);


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
// //   *****End Testing****







// Testing Calling a function

const render = function(htmlStr){
    $('#option').html(htmlStr);
    // const Testing = $('#option').html(htmlStr);
    // console.log(Testing);
  }



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

        result += `<li class=choose id=${type[i]}>${type[i]}</li><br>`;


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


    }); //End of Click
    


    //   $("#option").on("click", list);
    //   //   $( "#clothDown" ).on("click",function() {

    //   const list = function(){
    //     console.log(`Clicked on listed item ${list}`);
    //     const listName = $(this).html;
    //     console.log(`Here is the list item ${listName}`);
    //   };


// check process

//    Show the list of Electronics

//   $('li').attr("id").on("click",function() {
//         // clearContent();
//         const start = $('li').attr("id").val();
//         console.log(start);
//         const cat = $('#category').val();
//         console.log(cat);
//         const detail = $('#0').html(htmlStr);
//         console.log(detail);
        
//         const tblBody = $(`tbody`);
     
//         const tblRow = $(`<tr>`);
        
//    tblRow.append(cat, detail, "TEST");
//    // Append the table row to the tbody element
//    tblBody.append(tblRow);

// Testing the process
//   $('#echo').on("click",function() {
//         // clearContent();
//         const start = $('li').attr("id").val();
//         console.log(start);
//         const cat = $('#category').val();
//         console.log(cat);
//         const detail = $('#0').html(htmlStr);
//         console.log(detail);
        
//         const tblBody = $(`tbody`);
     
//         const tblRow = $(`<tr>`);
        
//    tblRow.append(cat, detail, "TEST");
//    // Append the table row to the tbody element
//    tblBody.append(tblRow);

  
// }); //End Click on

const appendtable = function() {
    const tblBody = $(`tbody`);
     
    const tblRow = $(`<tr>`);

    const detail = $(this).attr('choose');
    const test = $(`test`);
    console.log(detail);
    
    tblRow.append(cat, detail, test);
// Append the table row to the tbody element

    tblBody.append(tblRow);
     $('#display').append(`<div class='proj task-color'>${$(this).attr('choose')}</div>`);
     
  }


$('.choose').on('click', appendtable);

// Based on the click option on the drop-box it provides all the attributes on the line with <li> tag
// You an just use the tag and then put .on vs each

$("li").on("click", function(event){
//     const selection = $(this).index();
//     console.log(selection);

//    const idName = $(this).attr('choose');
   
//    const detail = $(this).attr('getTest');
//    console.log(`This is the Attribute of ID ${idName}`);
//    const aName = $(this).html();
//    console.log(aName);

//    const cat = $('#category').val();
//    console.log(cat);
   
//    const tblBody = $(`tbody`);

//    const tblRow = $(`<tr>`);
 
//     const label = $(`<td>`).text($("li").index.htmlStr);
//     console.log(label);
 

//    tblRow.append(cat, label, "TEST");
   // Append the table row to the tbody element
//    tblBody.append(tblRow);

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