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

    $("#fridgeBTN").on("click", function (event) {
        $.get("/fridge", function (data) {
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

    $(document).on("click", ".dropDown", function (event) {
        $.get("/food", function (data) {
            console.log(data)

            if (data.length !== 0) {

                for (var i = 0; i < data.length; i++) {

                    var row = $("<option>");
                    row.addClass("food");

                    row.append("<p>" + data[i].food_name + "</p>");
                    $("#bob").prepend(row);

                }
            }
            $("#bob").prepend(row);
            $(document).on("click", "#bob", function (event) {
                // event.preventDefault();

                // Make a newChirp object
                var newItem = {
                    items_name: $(".food:checked").val(),

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



        });
    });

    $(document).on("click", ".go", function (event) {
        $.get("/shoppingList", function (data) {

            console.log(data)

            if (data.length !== 0) {

                for (var i = 0; i < data.length; i++) {

                    var row = $("<div>");
                    row.addClass("movedFridge");

                    row.append("<p>" + data[i].items_name + "</p>");



                    $(".fridgeList").prepend(row);

                }

            }

        });

    });


    // $(document).on(“click”,“.food”,()=> {
    //     console.log($(“.food:checked”).val());
    //     console.log(“clicked”);
    // })




});