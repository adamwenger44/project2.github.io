
$(function() {
    $('.modal').modal();
    
    $(".create-form").on("submit", function(event){
        event.preventDefault();
        var newItem = {
        item_name: $("#newitem").val().trim(),
            devoured: 0
        };

        $.ajax("/api/item", {
            type: "POST",
            data: newItem
        }).then(function(){
            console.log("Added New Item");
            location.reload();
        });
    });


    $(".putOnList").on("click", function(event){
    event.preventDefault();
    var id = $(this).data("id");
    // var devouredState = {
    //     devoured = 1
    // };
    $.ajax("/api/items/" + id,{
        type: "PUT",
        data: devouredState
    }).then(function() {
        console.log("Put on list");
        location.reload();
        });
    });

    $(".deleteItem").on("click", function(event){
        event.preventDefault();

        var id = $(this).data("id");

        $.ajax({
            type: "DELETE",
            url: "api/items/" + id
        }).then(location.reload());
    })

    $("#listData").on("click", function(event){
        $.get("/shoppingList", function(data) {
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

    $("#fridgeBtn").on("click", function(event){
        $.get("/fridge", function(data) {
            console.log(data)

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
                $(".popup-content").prepend(name,image);
               
                };
           };
        }).then($(".popup, .popup-content").addClass("active"));
        $(".close, .popup").on("click", function(){
            $(".popup, .popup-content").removeClass("active");
            });
        
      
    
    
    });




    
})
