    $("#js-shopping-list-form").submit( event => {
        event.preventDefault();
        const itemEntry = $("#shopping-list-entry").val();

        $(".shopping-list").append(
            `<li>
        <span class="shopping-item"> ${itemEntry} </span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
        );
      });


       $(function() {
         $(".shopping-list").on('click', ".shopping-item-delete", function(event) {
            $(this).closest('li').remove();
        });
       })
        
        $(function() {
          $(document).on('click', '.shopping-item-toggle', function() {
              $(this).parent().siblings().toggleClass("shopping-item__checked");
          });
      })



    
        






    
 