    var Netflix = {
           init : function(){
               this.tabs();
           },

           tabs : function(){

                  var tabItems = $('.tab-item'),
                  
                      tabContentItems= $('.tab-content-item');
               
                      tabItems.on('click', function(e){
                
                          var $this = $(this),
                              tabContentItem = $(`#${this.id}-content`);

                              tabItems.removeClass('tab-border');
                              tabContentItems.removeClass('show');

                              $this.addClass('tab-border');

                              //var tabContentItem = $(this.id + '-content');
                                       
                              tabContentItem.addClass('show');
                              e.preventDefault();        

                      }); // end click event               
             }
       }

    Netflix.init();

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
