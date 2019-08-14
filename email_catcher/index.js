$(document).ready(function() {
    $('form').submit(function(event) {
        var form = event.target;
        var emailField = form.elements.email;
        var email = emailField.value;
        var lengthValid = email.length > 0;
        var containsAt = email.indexOf('@') > 0;
        var valid = lengthValid && containsAt;
        
        if (!valid) {
            $('.input-email').addClass('input-error');
            $('.input-email').focus();
            $('.input-error-helper').show();
            return false;
        } else {
            $.ajax({
                url: form.action,
                method: form.method,
                data: {
                    email: email
                },
                success: function(data) {
                    $('.join-list-confirm').show();
                    $('.join-list-inputs').hide();
                    $('#email-address').text(data.email);
                } 
            });
            return false;
        }
    });
});