$(document).on("click", ".work-preview", function() {
    var workId = $(this).attr('data-work-id');
    var modalId = 'work-' + workId;
    $('#' + modalId).show();
    $('.work-detail-container').show();
    $('.work-detail-fade').show();
    $('body').addClass('detail-open');
});

$(document).on("click", ".work-detail-close", function() {
    $('.work-detail').hide();
    $('.work-detail-container').hide();
    $('.work-detail-fade').hide();
    $('body').removeClass('detail-open');
});
