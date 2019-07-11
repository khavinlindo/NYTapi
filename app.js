

$(document).ready(function() {

    $(".search-btn").on("click", function() {
      

      var search = $("#searchTerm").val().trim();
      var numRecords = $("#sel1 option:selected").val();

      // the text user inputed inside #NumRecords textbox.
      
      var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
        search + "&api-key=PMGEeOmrCJEAHnniiFs9ZwB8Xcj4JAYG&";
      
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        // After the data comes back from the API
        .then(function(res) {
          console.log(res);
          // storing an array of results in the res variable
          var results = res.response.docs;
          // change the input of records into a number.
         
          console.log(results);
          


          var totalArticlesDiv0 = $("<div class='card' id='records'>");
          
          var totalArticlesDiv1 = $("<div class='card-header'>Top Articles</div>");
         var totalArticlesDiv2 = $("<div class='card-body list-group'>");

         totalArticlesDiv0.append(totalArticlesDiv1);
         totalArticlesDiv0.append(totalArticlesDiv2);

         $(".container").append(totalArticlesDiv0);


          for (var i = 0; i < numRecords; i++) {
            
              // Creating a div for the 
            
              
              var articleDiv = $("<div class='card'>").css({"background-color": "darkblue", "color": "white", "margin-left":"26px", "margin-bottom":"15px"});
              
              var articleMain = results[i].headline.main;
              console.log(articleMain);
              var articleSource = results[i].byline.original;
              console.log(articleSource);
              console.log("------------------------------------")
              // Creating a paragraph tag with the result item's rating
              var h2 = $("<h2>").text("Headline: " + articleMain);
              var p = $("<p>").text("Source: " + articleSource);;
              
  
              articleDiv.append(h2);
              articleDiv.append(p);
  
              $(".list-group").prepend(articleDiv);
  
            }
          
        });
    });
  })