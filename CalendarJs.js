$("#taskButton").click(function(){
    let task = $("#taskInput").val();
    document.getElementById("tasks").innerHTML += `<div class="draggable"><span id="taskText">${task}</span></div>`;
    dragAct();
})

function dragAct(){
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
            $(".item").attr("style", "position:relative")
        },
    });
}

dragAct();