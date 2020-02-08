
$(function() {
$(document).ready(function () {
    console.log("ready!");
    $.get("/food", function (data) {
        console.log(data)
        // $("#bob").empty();

        if (data.length !== 0) {
            for (var i = 0; i < data.length; i++) {


                var row = $("<option>");
                row.addClass("food");

                row.append("<p>" + data[i].food_name + "</p>");
                $("#bob").prepend(row);
            }
        }
        $(document).on("change", "#bob", function (event) {
            // event.preventDefault();

            // Make a newChirp object
            var newItem = {
                items_name: $("#bob").val(),

            };


            console.log(newItem);

            // Send an AJAX POST-request with jQuery
            $.post("/api/new", newItem)
                // On success, run the following code
                .then(function () {

                    var row = $("<div>");
                    row.addClass("item");

                    row.append("<p>" + newItem.items_name + "</p>");

                    $(".shoppingList").prepend(row);

                });

            // Empty each input box by replacing the value with an empty string

        });



    })

});

$(document).ready(function (event) {
    $.get("/fridge", function (data) {
        console.log(data)
        // $(".fridgeList").empty();

        if (data.length !== 0) {

            for (var i = 0; i < data.length; i++) {

                var row = $("<div>");
                row.addClass("fridge");

                row.append("<p>" + data[i].fridge_name + "</p>");


                $(".fridgeList").prepend(row);

            }

        }

    });
});

$(function () {
    $('.modal').modal();

    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var newItem = {
            item_name: $("#newitem").val().trim(),
            devoured: 0
        };

        $.ajax("/api/item", {
            type: "POST",
            data: newItem
        }).then(function () {
            console.log("Added New Item");
            location.reload();
        });
    });


    $(".putOnList").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        // var devouredState = {
        //     devoured = 1
        // };
        $.ajax("/api/items/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function () {
            console.log("Put on list");
            location.reload();
        });
    });

    $(".deleteItem").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");

        $.ajax({
            type: "DELETE",
            url: "api/items/" + id
        }).then(location.reload());
    })
    
    $("#listBTN").on("click", function (event) {

        $.get("/shoppingList", function (data) {
            $(".shoppingList").empty();

            console.log(data)

            if (data.length !== 0) {

                for (var i = 0; i < data.length; i++) {

                    var row = $("<div>");
                    row.addClass("shopping");

                    row.append("<p>" + data[i].items_name + "</p>");



                    $(".shoppingList").prepend(row);

                }

            }

        });
    });

   

    // $(".dropDown").on("click", function (event) {
    //     $.get("/food", function (data) {
    //         console.log(data)

    //         if (data.length !== 0) {

    //             for (var i = 0; i < data.length; i++) {

    //                 var row = $("<option>");
    //                 row.addClass("food");

    //                 row.append("<p>" + data[i].food_name + "</p>");


    //                 $("#bob").prepend(row);
    //             }
    //         }
    //     });
    // });

    

    $(document).on("click", "#switch", function (event) {
        $.get("/shoppingList", function (data) {

            $(".fridgeList").empty();
console.log("here i am")
            console.log(data)

            if (data.length !== 0) {
console.log("about to insert list")
                for (var i = 0; i < data.length; i++) {

                    var row = $(`<div data-id="${i}">`);
                    row.addClass("movedFridge");

                    row.append("<p>" + data[i].items_name + "</p>");



                    $(".fridgeList").prepend(row);

                }

            }

        });

    });

    $("#hourGlass").on("click", function(event){
        event.preventDefault();
        var inputBox = $("#searchText").val();
        // console.log(inputBox);
        var queryURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + inputBox + "&apiKey=9d10a5f4a8ec46b19a1194adcdda58b1&number=3";
    $.ajax({
      url: queryURL,
      method: "GET",
      crossDomain: true,
    }).then(function (response) {
    console.log(response);
        for(i = 0; i < response.length; i++){
            var allResponses = response[i];
            for (z = 0; z < response[i].missedIngredients.length; z++) {
                var itemNeed = response[i].missedIngredients[z].name;
                var name = response[i].title;
                var imgURL = response[i].image;
                var image = $("<img>").attr("src", imgURL);

                console.log(image);
                $(".popup-content").prepend(name,itemNeed,image);
               
                };
           };
        }).then($(".popup, .popup-content").addClass("active"));
        $(".close, .popup").on("click", function(){
            $(".popup, .popup-content").removeClass("active");
            });
        
      
    
    
    });




    
})});
