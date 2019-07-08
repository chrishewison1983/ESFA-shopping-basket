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

     // $(".delete-training-provider").on("click", function (e) {
     //      e.preventDefault();
     //      $(this).closest('li').remove();
     // });
     //
     // $(".delete-apprenticeship").on("click", function (e) {
     //      e.preventDefault();
     //      $(this).closest('li').remove();
     // });

     $('input[name="compare-app"]').on('change',function(e) {
          // var checkedApprenticeships = $(this).is(':checked');
          // var itemApprenticeshipTitle = $(this).closest('h2.heading-l').find('a.apprenticeship-title').text();

          // if (checkedApprenticeships) {
          //      // $('#compare-message-panel .comparison-item-title').append('<span>' + itemApprenticeshipTitle +'</span>');
          // }

          $('#view-compare').attr('href', '/favourites-V1/compare-apprenticeships');

          if (countCheckedApprenticeship() === 0) {
               $('.training-provider-content').css('opacity', '1');
               $('input[name="compare-provider"]').removeAttr("disabled");
               $('a.delete-training-provider').attr('href', '#');
               $('#compare-container').hide();
               $('#compare-container #view-compare').hide();
               // $('#compare-message-panel .comparison-item-title').remove('<span>' + itemApprenticeshipTitle +'</span>');
          } else if (countCheckedApprenticeship() === 1) {
               $('.training-provider-content').css('opacity', '0.2');
               $('input[name="compare-provider"]').attr("disabled", true);
               $('a.delete-training-provider').removeAttr('href');
               $('#compare-container').show();
               $('#compare-container #view-compare').hide();
               $('#compare-container .comparison-type').text('apprenticeship');
          } else if (countCheckedApprenticeship() >= 2) {
               $('.training-provider-content').css('opacity', '0.2');
               $('input[name="compare-provider"]').attr("disabled", true);
               $('a.delete-training-provider').removeAttr('href');
               $('#compare-container').show();
               $('#compare-container #view-compare').show();
               $('#compare-container .comparison-type').text('apprenticeships');
          }

          $('#compare-container .compare-number').text(countCheckedApprenticeship());

          function countCheckedApprenticeship() {
               return $('input[name="compare-app"]:checked').length;
          }

     });

     $('input[name="compare-provider"]').on('change',function(e) {
          // var checkedTrainingProvider = $(this).is(':checked');

          $('#view-compare').attr('href', '/favourites-V1/compare-providers');

          if (countCheckedTrainingProvider() === 0) {
               $('input[name="compare-app"]').removeAttr("disabled");
               $('input[name="compare-app"]').parent().parent().css('opacity', '1');
               $('#compare-container').hide();
               $('#compare-container #view-compare').hide();
          } else if (countCheckedTrainingProvider() === 1) {
               $('input[name="compare-app"]').attr("disabled", true);
               $('input[name="compare-app"]').parent().parent().css('opacity', '0.1');
               $('#compare-container').show();
               $('#compare-container #view-compare').hide();
               $('#compare-container .comparison-type').text('training provider');
          } else if (countCheckedTrainingProvider() >= 2) {
               $('input[name="compare-app"]').attr("disabled", true);
               $('input[name="compare-app"]').parent().parent().css('opacity', '0.1');
               $('#compare-container').show();
               $('#compare-container #view-compare').show();
               $('#compare-container .comparison-type').text('training providers');
          }

          $('#compare-container .compare-number').text(countCheckedTrainingProvider());

          function countCheckedTrainingProvider() {
               return $("input[name='compare-provider']:checked").length;
          }

     });


     ///// DELETE - PROVIDER
     $('input[name="confirm-delete-provider"]').on('change',function(e) {
          $('#delete-provider').removeClass('govuk-button--disabled');
     });

     ///// DELETE - PROVIDER
     $('input[name="confirm-delete-apprenticeship"]').on('change',function(e) {
          $('#delete-apprenticeship').removeClass('govuk-button--disabled');
     });

});

$(document).ready(function () {
     $('.close-confirmation').on('click',function(e) {
          e.preventDefault();
          $(this).parent().remove();
     });
})
