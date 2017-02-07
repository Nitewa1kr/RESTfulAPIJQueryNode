$(function(){
    //GET/READ
    $('#get-button').on('click', function(){
        $.ajax({
           url: '/products',
           contentType: 'application/json',
           success: function(response)
           {
               console.log(response);
           } 
        });
    });
});