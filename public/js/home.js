
var url="/api/articles";
console.log(url);
$.ajax({
    method: "GET",
    url: url,
    success: function(data) {
        var ele="";
        for(var i=0; i<data.length; i++){
            ele='<div class="col-md-3" id="article1"><div class="overlay-container"><img src='+ data[i].image +'><a href="/articles/1" class="overlay">'+data[i].name+'</a></div>';
            $("#row1").append(ele);
        }
//              debugger;
    },

    error: function(error) {
    alert("Doh!");
    }
});


