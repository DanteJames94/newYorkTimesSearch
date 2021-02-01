$(".btn").click("click", function () {
    

    
    
    var nytimesData = function () {
        $.ajax({
            url:
            "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
            searchArticle +
            "&api-key=SdfixS1AqEcTlw0j9FdOLXNYzKbUoi4u",
            method: "GET",
        }).then(function (response) {
            console.log(response);
        });
    };
    
    nytimesData();
});

var searchArticle = "New York";