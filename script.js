$("#searchButton").on("click", function (e) {
    e.preventDefault();
    var year1 = $(".startYearInput").val();
    var year2 = $(".endYearInput").val();
    // &fq=pub_year
    // &fq=begin_date(year)
    // &fq=end_date(year)
    // begin_date(year)
    // end_date(year)
    // begin_date(year1)
    // end_date(year2)
    var searchTermInput = $(".searchInput").val().trim();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTermInput + "&api-key=sqgGMtJDGcfNtOGdh6kWm4FqAx5RM2yV";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    })
})