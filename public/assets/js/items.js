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


    

});