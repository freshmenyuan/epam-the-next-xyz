var url = window.location.href;
var arr = url.split("/");
var id = arr[arr.length-1];
var url="/api/articles/" + id;

$.ajax({
    method: "GET",
    url: url,
    success: function(data) {
        var ele='<div class="col-md-3" id="article1"><div class="overlay-container"><img src='+ data.image +'><a href="/articles/1" class="overlay">'+data.name+'</a></div>';
        $("#row").append(ele);

    },

    error: function(error) {
        alert("Doh!");
    }
});
