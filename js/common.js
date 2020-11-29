$(document).ready(function () {
    $('.counter').each(function () {
        var $this = $(this);
        jQuery({Counter: $this.attr('data-start')}).animate({Counter: $this.attr('data-stop')}, {
            duration: 30000,
            easing: 'swing',
            step: function (now) {
                $this.text(formatNumberCapture(Math.ceil(now)));
            }
        });
    });
});
