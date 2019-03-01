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
$("tbody").on('click', '.remove', itemRemoval);




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


// Search for the value

$("#search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#discover tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
    


// Based on the click option on the drop-box it provides all the attributes on the line with <li> tag

$("body").on("click", '.choose', function(event){
    const selection = $(this).index();
    console.log(selection);


    const tdVal = $("td").val();
    console.log(`this is the detail of the file by TD ${tdVal}`)
    const existVal = $("#exist").html();
    console.log(`this is the detail of the file by ID ${existVal}`);

    const val = $(this).val();

    // Calling all the fields and adding them to the table
    const cat = $(this).attr("category");
    // console.log(cat);

    const title = $(`<td id="sort">`).text(cat);

    const aName = $(this).html();
    // console.log(`This is the .html(): ${aName}`);

    
    const detail = $(`<td id="exist">`).text(aName);
    // console.log(`Tags on front ${detail}`);
    
    const tblBody = $(`tbody`);

    const tblRow = $(`<tr class="remove">`);
    

        const icon = $(`<td class="fas fa-minus-circle"></td>`);
    
    // Alert if there is the same item    

    if(existVal === val){
        alert("This item has already been selected, please choose another item");
    }else{
    tblRow.append(title, detail, icon);
    //    Append the table row to the tbody element
    tblBody.append(tblRow);
    }

});

//End of document
});