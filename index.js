$(document).ready(function() {
    $(".project").mousemove(function(e) {
        var hiddenImage = this.find(".hoverShow");

        $(hiddenImage).css({
            visibility: hidden
        })
    })
})