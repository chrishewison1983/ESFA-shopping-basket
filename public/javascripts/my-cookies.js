$(document).ready(function () {

     $("#delete-apprenticeship").on("click", function (e) {
          $.cookie("delete-apprenticeship", true, {path:'/'});
     });

     // VERSION 2
     // Stores the apprenticeship name - FOR CHOOSEN
     $(".chosen-apprenticeship").on("click", function (e) {
          $.cookie("chosen-apprenticeship", $(this).parent().find('.chosen-apprenticeship-value').text(), {path:'/'});
     });

     // Populates the apprenticeship name - FOR CHOOSEN
     if ($.cookie("chosen-apprenticeship")) {
          $(".chosen-apprenticeship-name").text($.cookie("chosen-apprenticeship"));
     }

     // Stores the apprenticeship name - FOR DELETE
     $(".delete-chosen-apprenticeship").on("click", function (e) {
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
          $(".apprenticeship-content.one").css('display', 'none');
     }

     if ($.cookie("apprenticeship-number") == 1 && $.cookie("delete-apprenticeship") == 'true') {
          $(".govuk-panel--confirmation").show();
          $("ol.app-task-list li").show();
          $("ol.app-task-list li.one").remove();

          var apprenticeshipNumber = parseInt($('.apprenticeship-number.number').text());
          $('.apprenticeship-number.number').text(apprenticeshipNumber - 1);
     }

     if ($.cookie("apprenticeship-number") == 2 && $.cookie("delete-apprenticeship") == 'true') {
          $(".govuk-panel--confirmation").show();
          $("ol.app-task-list li").show();
          $("ol.app-task-list li.two").remove();

          var apprenticeshipNumber = parseInt($('.apprenticeship-number.number').text());
          $('.apprenticeship-number.number').text(apprenticeshipNumber - 1);
     }


     // setTimeout(function() {
     //      $.cookie("delete-apprenticeship", false, {path:'/'});
     // }, 5000);


});
