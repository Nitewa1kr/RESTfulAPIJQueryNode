$(function(){

    //GET/READ
    $('#get-button').on('click', function(){
        $.ajax({
           url: '/products',
           contentType: 'application/json',
           success: function(response)
           {
               var tbodyEL = $('tbody');

               tbodyEL.html('');

               response.products.forEach(function(product)
               {
                    tbodyEL.append('\
                    <tr>\
                        <td class="id">'+product.id+'</td>\
                        <td><input type="text" class="name" value="'+product.name+'"></td>\
                        <td>\
                            <button class="update-button">UPDATE/PUT</button>\
                            <button class="delete-button">DELETE</button>\
                        </td>\
                    </tr>\
                    ');
               });
           } 
        });
    });

    // CREATE/POST
    $('#create-form').on('submit',function(event){
        event.preventDefault();

        var createinput = $('#create-input');

        $.ajax({
            url: '/products',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({name: createinput.val()}),
            success: function(response){
                console.log(response);
                createinput.val('');
                $('#get-button').click();
            }
        });
    });

    //UPDATE/PUT
    $('table').on('click', '.update-button',function()
    {
        var rowEL = $(this).closest('tr');
        var id = rowEL.find('.id').text();
        var newName = rowEL.find('.name').val();

        $.ajax({
            url: '/products/' + id,
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify({newName: newName}),
            success: function(response)
            {
                console.log(response)
                $('#get-button').click();
            }
        });
    });

    //DELETE
    $('table').on('click', '.delete-button', function()
    {
        var rowEL = $(this).closest('tr');
        var id = rowEL.find('.id').text();

        $.ajax({
            url: '/products/' + id,
            method: 'DELETE',
            contentType: 'application/json',
            success: function(response)
            {
                console.log(response)
                $('#get-button').click();
            }
        });
    });
});


