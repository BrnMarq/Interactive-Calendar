
$(function() {
    $(".draggable").draggable({ revert: 'invalid'});

    $(".dropzone").droppable({
        accept: '.draggable',
        drop: function(event, ui) {
            $(this).append($(ui.helper));
            $(".draggable").addClass("item"); 
            $(".item").removeAttr("style");
            $(".item").draggable({
                revert: 'invalid'
            });
        },
    });
});