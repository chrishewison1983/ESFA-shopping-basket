$(document).ready(function () {

     $(".journey-V1").on("click", function (e) {
          $.cookie("journey-verion", 'verison-1', {path:'/'});
     });

     $(".journey-V2").on("click", function (e) {
          $.cookie("journey-verion", 'verison-2', {path:'/'});
     });

     if ($.cookie("journey-verion") === 'verison-1') {
          $('#delete-apprenticeship').attr('href', '/favourites-V1/V1/shopping-basket');
          $('#delete-provider').attr('href', '/favourites-V1/V1/shopping-basket');
     } else if ($.cookie("journey-verion") === 'verison-2') {
          $('#delete-apprenticeship').attr('href', '/favourites-V1/V2/shopping-basket');
          $('#delete-provider').attr('href', '/favourites-V1/V2/shopping-basket-provider');
     }

});


$(document).ready(function () {

     // APPRENTICESHIP
     $("#delete-apprenticeship").on("click", function (e) {
          $.cookie("delete-apprenticeship", true, {path:'/'});
     });
     // Stores the apprenticeship name - FOR CHOOSEN
     $(".chosen-apprenticeship").on("click", function (e) {
          $.cookie("chosen-apprenticeship", $(this).closest('li').find('.chosen-apprenticeship-value').text(), {path:'/'});
     });

     // Populates the apprenticeship name - FOR CHOOSEN
     if ($.cookie("chosen-apprenticeship")) {
          $(".chosen-apprenticeship-name").text($.cookie("chosen-apprenticeship"));
     }

     // Stores the apprenticeship name - FOR DELETE
     $(".delete-apprenticeship").on("click", function (e) {
          $.cookie("deleted-apprenticeship", $(this).closest('li').find('.chosen-apprenticeship-value').text(), {path:'/'});
          $.cookie("apprenticeship-number", $(this).data('delete-item'), {path:'/'});
     });

     // Populates the apprenticeship name - FOR DELETE
     if ($.cookie("deleted-apprenticeship")) {
          $(".deleted-apprenticeship").text($.cookie("deleted-apprenticeship"));
     }

     if ($.cookie("apprenticeship-number") == 1) {
          $("#provider-number").text('5');
          $(".apprenticeship-content.one").css('display', 'inline-block');
     } else if ($.cookie("apprenticeship-number") == 2) {
          $("#provider-number").text('0');
          $(".apprenticeship-content.two").css('display', 'none');
     }

     if ($.cookie("apprenticeship-number") == 1 && $.cookie("delete-apprenticeship") == 'true') {
          $("#delete-apprenticeship-panel").show();
          $("#delete-training-provider-panel").hide();
          $("ol.app-task-list li").show();
          $("ol.app-task-list li.apprenticeship-one").remove();

          var apprenticeshipNumber = parseInt($('.apprenticeship-number.number').text());
          $('.apprenticeship-number.number').text(apprenticeshipNumber - 1);
     }

     if ($.cookie("apprenticeship-number") == 2 && $.cookie("delete-apprenticeship") == 'true') {
          $("#delete-apprenticeship-panel").show();
          $("#delete-training-provider-panel").hide();
          $("ol.app-task-list li").show();
          $("ol.app-task-list li.apprenticeship-two").remove();

          var apprenticeshipNumber = parseInt($('.apprenticeship-number.number').text());
          $('.apprenticeship-number.number').text(apprenticeshipNumber - 1);
     }

     // TRAINING PROVIDER
     $("#delete-provider").on("click", function (e) {
          $.cookie("delete-provider", true, {path:'/'});
     });

     // Stores the training provider name - FOR CHOOSEN
     $(".delete-training-provider").on("click", function (e) {
          $.cookie("chosen-training-provider", $(this).closest('li').find('.chosen-training-provider-value').text(), {path:'/'});
          $.cookie("provider-number", $(this).data('provider-id'), {path:'/'});
     });

     // Populates the training provider name - FOR CHOOSEN
     if ($.cookie("chosen-training-provider")) {
          $(".chosen-provider-name").text($.cookie("chosen-training-provider"));
     }

     // Populates the apprenticeship name - FOR DELETE
     if ($.cookie("chosen-training-provider")) {
          $(".deleted-training-provider").text($.cookie("chosen-training-provider"));
     }

     if ($.cookie("delete-provider") == 'true') {
          $("#delete-training-provider-panel").show();
          $("#delete-apprenticeship-panel").hide();
          $("ol.app-task-list li").show();
          var providerNumber = parseInt($('.provider-number.number').text());
          $('.provider-number.number').text(providerNumber - 1);
     }

     if ($.cookie("provider-number") == 1 && $.cookie("delete-provider") == 'true') {
          $("ol.app-task-list li.provider-one").remove();
     }

     if ($.cookie("provider-number") == 2 && $.cookie("delete-provider") == 'true') {
          $("ol.app-task-list li.provider-two").remove();
     }

     if ($.cookie("provider-number") == 3 && $.cookie("delete-provider") == 'true') {
          $("ol.app-task-list li.provider-three").remove();
     }

     if ($.cookie("provider-number") == 4 && $.cookie("delete-provider") == 'true') {
          $("ol.app-task-list li.provider-four").remove();
     }

     if ($.cookie("provider-number") == 5 && $.cookie("delete-provider") == 'true') {
          $("ol.app-task-list li.provider-five").remove();
     }






     // setTimeout(function() {
     //      $.cookie("delete-apprenticeship", false, {path:'/'});
     // }, 5000);


});
