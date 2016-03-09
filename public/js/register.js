var url="/api/register";

$(function(){
  $("#form").submit(function(e){
  e.preventDefault();

  var values = {};
  $.each($('#form').serializeArray(), function(i, field) {
    values[field.name] = field.value;
  });
  // debugger;
  $.ajax({

         method: "POST",
         url: url,
         data: values,
         success: function(data) {
              console.log(data);
              // window.location.href="/";
         },
         error: function(err) {
          console.log(err);
         }
       });
 })
});