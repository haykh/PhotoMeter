var chClass = function (object) {
    if ($(window).width() < 992) {
        if (object.hasClass("text-right"))
            object.removeClass("text-right");
        if (!(object.hasClass("text-left")))
            object.addClass("text-left");
    } else {
        if (object.hasClass("text-left"))
            object.removeClass("text-left");
        if (!(object.hasClass("text-right")))
            object.addClass("text-right");
    }
}


var setGlobalValues = function(f, N, s, CoC) {
    if (CoC == null) {
        $("#bro").html("Please choose your DSLR.");
    } else {
        var h = ((f*f/(CoC*N))/1000);
        if (s < h) {
            var Dn = (h*s/(h+s)).toFixed(2);
            var Df = (h*s/(h-s)).toFixed(2);
            var DoF = (Df-Dn).toFixed(2);
        } else {
            var Dn = (h/2).toFixed(2);
            var Df = "&infin;";
            var DoF = "&infin;";
        }
        $("#bro").html("h = " + h.toFixed(2) + "<br>D<sub>N</sub> = " + Dn + "<br>D<sub>F</sub> = " + Df + "<br>DOF = " + DoF);
    }
}

var listenToEvent = function() {
    var CoC = goListGroup(document.listmenu0.firstlevel, document.listmenu0.secondlevel);
    var f = $(".values.focal").val();
    var N = $(".values.fstop").val();
    var s = $(".values.dist").val();
    setGlobalValues(f, N, s, CoC);
    
    $("#target").change(function() {
        CoC = goListGroup(document.listmenu0.firstlevel, document.listmenu0.secondlevel);
        setGlobalValues(f, N, s, CoC);
    });
    $(".fslide")
        .slider({
            slide: function(event, ui) {
                f = focval(ui.value);
                setGlobalValues(f, N, s, CoC);
            }
        });
    $(".values.focal").change(function(event) {
        f = $(this).val();
        setGlobalValues(f, N, s, CoC);
    });
    $(".Nslide")
        .slider({
            slide: function(event, ui) {
                N = fstopval(ui.value);
                setGlobalValues(f, N, s, CoC);
            }
        });
    $(".values.fstop").change(function(event) {
        N = $(this).val();
        setGlobalValues(f, N, s, CoC);
    });
    $(".sslide")
        .slider({
            slide: function(event, ui) {
                s = distval(ui.value);
                setGlobalValues(f, N, s, CoC);
            }
        });
    $(".values.dist").change(function(event) {
        s = $(this).val();
        setGlobalValues(f, N, s, CoC);
    });
}

$(document).ready(function() {
    /* changes text-right <-> text-left for slider captions when resizing */
    chClass($(".slideParent > :first-child"));
    $(window).resize(function() {
        chClass($(".slideParent > :first-child"));
    });
    /*__________________________*/
    
    /* Creating Select Menu */
    generateSelectMenu();
    
    listenToEvent();
});
