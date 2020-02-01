// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    // will change devoured state of burger when their corresponding button is clicked
    $(".foodBtn").on("click", function (event) {
      var id = $(this).data("id");
    //   var newState = $(this).data("devoured");
  
      // changing devour to true
    //   var newDevour = {
    //     devour: 1
    //   }
      // Send the PUT request.
      // update burrger and reload page to put it in the correct place
      $.ajax("/api/item/" + id, {
        type: "PUT",
        // data: newDevour
      }).then(
        function () {
          
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    // when user submits a new burger and clicks button 
    $(".create-form").on("submit", function (event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      // takes user input
      var newBurger = {
        burger_name: $("#ca").val().trim(),
      };
  
      // Send the POST request.
      // sends burger to correct place on webpage, reloads page
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  });

  Template.registerHelper("log", function (something) {
    console.log(something);
  })