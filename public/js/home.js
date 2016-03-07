
var url="http://localhost:1337/api/articles";
console.log(url);
$.ajax({
    method: "GET",
    url: url,
    success: function(data) {
//              debugger;
        var ele='<div class="col-md-4" id="article1"><div class="overlay-container"><img src='+ data[0].image +'><a href="/articles/1" class="overlay">'+data[0].title+'</a></div>';
        $("div .row").append(ele);
        ele='<div class="col-md-4" id="article2"><div class="overlay-container"><img src='+ data[1].image +'><a href="/articles/2" class="overlay">'+data[1].title+'</a></div>';
        $("div .row").append(ele);
        ele='<div class="col-md-4" id="article2"><div class="overlay-container"><img src='+ data[2].image +'><a href="/articles/3" class="overlay">'+data[2].title+'</a></div>';
        $("div .row").append(ele);

    },

    error: function(error) {
    alert("Doh!");
    }
});

