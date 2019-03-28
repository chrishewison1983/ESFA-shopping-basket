/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

// Added javascripts
$(document).ready(function () {

     $(".delete-training-provider").on("click", function (e) {
          e.preventDefault();
          $(this).closest('li').remove();
     });

     $(".delete-apprenticeship").on("click", function (e) {
          e.preventDefault();
          $(this).closest('li').remove();
     });

     $('input[name="compare-app"]').on('change',function(e) {
          var checkedApprenticeships = $(this).is(':checked');
          // var itemApprenticeshipTitle = $(this).closest('h2.heading-l').find('a.apprenticeship-title').text();

          if (checkedApprenticeships) {
               $('.training-provider-content').css('opacity', '0.2');
               $('input[name="compare-provider"]').attr("disabled", true);
               $('a.delete-training-provider').removeAttr('href');
               // $('#compare-message-panel .comparison-item-title').append('<span>' + itemApprenticeshipTitle +'</span>');
          } else if (countCheckedApprenticeship() === 0) {
               $('.training-provider-content').css('opacity', '1');
               $('input[name="compare-provider"]').removeAttr("disabled");
               $('a.delete-training-provider').attr('href', '#');
               // $('#compare-message-panel .comparison-item-title').remove('<span>' + itemApprenticeshipTitle +'</span>');
          }

          function countCheckedApprenticeship() {
               return $("input[name='compare-app']:checked").length;
          }

          // if (countCheckedApprenticeship() <= 1 ) {
          //      $('#compare-message-panel').slideUp();
          // } else if (countCheckedApprenticeship() >= 2) {
          //      $('#compare-message-panel').slideDown();
          // }

     });

     $('input[name="compare-provider"]').on('change',function(e) {
          var checkedTrainingProvider = $(this).is(':checked');

          if (checkedTrainingProvider) {
               $('input[name="compare-app"]').attr("disabled", true);
               $('input[name="compare-app"]').parent().parent().css('opacity', '0.1');
          } else if (countCheckedTrainingProvider() === 0) {
               // $('input[name="compare-app"]').removeAttr("disabled");
               // $('input[name="compare-app"]').parent().parent().css('opacity', '1');
          }

          function countCheckedTrainingProvider() {
               return $("input[name='compare-provider']:checked").length;
          }

          // if (countCheckedTrainingProvider() <= 1 ) {
          //      $('#compare-message-panel').slideUp();
          // } else if (countCheckedTrainingProvider() >= 2) {
          //      $('#compare-message-panel').slideDown();
          // }
          // var itemProviderTitle = $(this).closest('li').find('a.trainging-providers-list').text();
          // $('#compare-message-panel .comparison-item-title').append('<span>' + itemProviderTitle +'</span>');

     });

});
