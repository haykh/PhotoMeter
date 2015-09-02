// var setGlobalValues = function(f, N, s, CoC) {
//     if (CoC == null) {
//         $("#bro").html("Please choose your DSLR.");
//         $(".values").prop('disabled', true);
//         $(".fslide").slider({disabled:true});
//         $(".Nslide").slider({disabled:true});
//         $(".sslide").slider({disabled:true});
//     } else {
//         $(".values").prop('disabled', false);
//         $(".fslide").slider({disabled:false});
//         $(".Nslide").slider({disabled:false});
//         $(".sslide").slider({disabled:false});

         
//  //             calculating Dn, Df, DoF here
        
//         var h = ((f*f/(CoC*N))/1000);
//         if (s < h) {
//             var Dn = (h*s/(h+s)).toFixed(2);
//             var Df = (h*s/(h-s)).toFixed(2);
//             var DoF = (Df-Dn).toFixed(2);
//         } else {
//             var Dn = (h/2).toFixed(2);
//             var Df = "&infin;";
//             var DoF = "&infin;";
//         }
//         $("#bro").html("h = " + h.toFixed(2) + "<br>D<sub>N</sub> = " + Dn + "<br>D<sub>F</sub> = " + Df + "<br>DOF = " + DoF);
//     }
// }

var listenToEvent = function() {
    var CoC = goListGroup(document.listmenu0.firstlevel, document.listmenu0.secondlevel);
    // var f = $(".values.focal").val();
    // var N = $(".values.fstop").val();
    // var s = $(".values.dist").val();
    // setGlobalValues(f, N, s, CoC);
    
    // $("#target").change(function() {
    //     CoC = goListGroup(document.listmenu0.firstlevel, document.listmenu0.secondlevel);
    //     setGlobalValues(f, N, s, CoC);
    // });
    // $(".fslide")
    //     .slider({
    //         slide: function(event, ui) {
    //             f = focval(ui.value);
    //             setGlobalValues(f, N, s, CoC);
    //         }
    //     });
    // $(".values.focal").change(function(event) {
    //     f = $(this).val();
    //     setGlobalValues(f, N, s, CoC);
    // });
    // $(".Nslide")
    //     .slider({
    //         slide: function(event, ui) {
    //             N = fstopval(ui.value);
    //             setGlobalValues(f, N, s, CoC);
    //         }
    //     });
    // $(".values.fstop").change(function(event) {
    //     N = $(this).val();
    //     setGlobalValues(f, N, s, CoC);
    // });
    // $(".sslide")
    //     .slider({
    //         slide: function(event, ui) {
    //             s = distval(ui.value);
    //             setGlobalValues(f, N, s, CoC);
    //         }
    //     });
    // $(".values.dist").change(function(event) {
    //     s = $(this).val();
    //     setGlobalValues(f, N, s, CoC);
    // });
}

$(document).ready(function() {    

    var nonLinearSlider = document.getElementById('nonlinear');

    noUiSlider.create(nonLinearSlider, {
        
        start: [50],
        range: {
            // Starting at 500, step the value by 500,
            // until 4000 is reached. From there, step by 1000.
            'min': [ 10 ],
            '30%': [ 50, 5 ],
            '70%': [ 135, 10 ],
            '90%': [ 300, 20 ],
            'max': [ 700 ]
        }
    });


    /* Creating Select Menu */
    generateSelectMenu();
    
    listenToEvent();
});
