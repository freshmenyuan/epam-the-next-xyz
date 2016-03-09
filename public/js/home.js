
var url="/api/articles";
console.log(url);
$.ajax({
    method: "GET",
    url: url,
    success: function(data) {
//              debugger;
        var ele='<div class="col-md-3" id="article1"><div class="overlay-container"><img src='+ data[0].image +'><a href="/articles/1" class="overlay">'+data[0].name+'</a></div>';
        $("#row1").append(ele);
        ele='<div class="col-md-3" id="article2"><div class="overlay-container"><img src='+ data[1].image +'><a href="/articles/2" class="overlay">'+data[1].name+'</a></div>';
        $("#row1").append(ele);
        ele='<div class="col-md-3" id="article3"><div class="overlay-container"><img src='+ data[2].image +'><a href="/articles/3" class="overlay">'+data[2].name+'</a></div>';
        $("#row1").append(ele);
        ele='<div class="col-md-3" id="article4"><div class="overlay-container"><img src='+ data[3].image +'><a href="/articles/4" class="overlay">'+data[3].name+'</a></div>';
        $("#row1").append(ele);

        ele='<div class="col-md-3" id="article5"><div class="overlay-container"><img src='+ data[4].image +'><a href="/articles/5" class="overlay">'+data[4].name+'</a></div>';
        $("#row2").append(ele);
        ele='<div class="col-md-3" id="article6"><div class="overlay-container"><img src='+ data[5].image +'><a href="/articles/6" class="overlay">'+data[5].name+'</a></div>';
        $("#row2").append(ele);
        ele='<div class="col-md-3" id="article7"><div class="overlay-container"><img src='+ data[6].image +'><a href="/articles/7" class="overlay">'+data[6].name+'</a></div>';
        $("#row2").append(ele);
        ele='<div class="col-md-3" id="article8"><div class="overlay-container"><img src='+ data[7].image +'><a href="/articles/8" class="overlay">'+data[7].name+'</a></div>';
        $("#row2").append(ele);

    },

    error: function(error) {
    alert("Doh!");
    }
});


