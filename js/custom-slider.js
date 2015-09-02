// slider function
var focval = function(num) {
    if (num <= 200)
        return Math.round(19*num/40) + 10;
    else
        return Math.round(600 - (217*num)/40 + (59*num*num)/4000);
}
var invfocval = function(num) {
    if (num <= 105)
        return Math.round((num - 10)*(40/19));
    else
        return Math.round((10*(1085 + Math.sqrt(5)*Math.sqrt(-47755 + 472*num)))/59);
}

var fstopvals = [0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.5, 2.8, 3.2, 3.5, 4, 4.5, 5, 5.6, 6.3, 7.1, 8, 9, 10, 11, 13, 14, 16, 18, 20, 22];
var fstopval = function(num) {
    return fstopvals[num];
}
var invfstopval = function(num) {
    for (var i = 0; i < fstopvals.length-1; i++) {
        if (fstopvals[i] >= num)
            return i;
    }
}

var distval = function (num) {
    if (num < 100) {
        return num/10;
    } else if (num < 300) {
        return Math.round((7/4000)*num*num - num/4 + 35/2);
    } else {
        return Math.round((41/500)*num*num - (242/5)*num + 7240);
    }
}
var invdistval = function (num) {
    if (num < 10) {
        return Math.round(num*10);
    } else if (num < 100) {
        return Math.round((20*(25 + Math.sqrt(10)*Math.sqrt(-60 + 7*num)))/7);
    } else {
        return Math.round((10*(1210 + Math.sqrt(5)*Math.sqrt(-4020 + 41*num)))/41);
    }
}

// slider constructors
var focvals = [];
for (var i = 0; i < 301; i++) {
    focvals.push();
}
focvals[0] = 10;
focvals[17] = 18;
focvals[53] = 35;
focvals[95] = 55;
focvals[126] = 70;
focvals[200] = 105;
focvals[300] = 300;
$(".fslide")
    .slider({
        min: 0,
        max: 300
    })
    .slider("pips", {
        rest: "label",
        labels: focvals,
        step: 1
    });

var fstopvals2 = [];
for (var i = 0; i < fstopvals.length; i++) {
    switch(fstopvals[i]) {
        case 0.7:
        case 1.0:
        case 1.8:
        case 2.8:
        case 3.5:
        case 4.5:
        case 5.6:
        case 8:
        case 11:
        case 18:
        case 22:
            fstopvals2.push(fstopvals[i]);
            break;
        default:
            fstopvals2.push('');
            break;
    }
}
$(".Nslide")
    .slider({
        min: 0,
        max: 30,
        value: invfstopval(2.8)
    })
    .slider("pips", {
        rest: "label",
        labels: fstopvals2,
        step: 1
    });

var distvals = [];
for (var i = 0; i < 401; i++) {
    distvals.push();
}
distvals[0] = "0m";
distvals[50] = 5;
distvals[100] = 10;
distvals[150] = 20;
distvals[225] = 50;
distvals[300] = 100;
distvals[365] = 500;
distvals[400] = "1km";
$(".sslide")
    .slider({
        min: 0,
        max: 400,
        value: invdistval(1)
    })
    .slider("pips", {
        rest: "label",
        labels: distvals,
        step: 5
    });


$(document).ready(function() {
    /* 
    focal length slider 
    */
    
    $( ".fslide" ).on("slide", function( event, ui ) {
        $(".values.focal").val(focval(ui.value));
    });
    $(".values.focal").change(function(event) {
        var data = $(this).val();
        if (data > 300) data = 300;
        if (data < 10) data = 10;
        $(".fslide").slider("option", "value", invfocval(data));
    });
    /* 
    / focal length slider 
    */
    
    /* 
    apperture slider 
    */
    $(".Nslide").on("slide", function( event, ui ) {
        $(".values.fstop").val(fstopval(ui.value));
    });
    $(".values.fstop").change(function(event) {
        var data = $(this).val();
        if (data > 22) data = 22;
        if (data < 0.7) data = 0.7;
        $(".Nslide").slider("option", "value", invfstopval(data));
    });
    /* 
    / apperture slider 
    */
    
    /* 
    distance slider 
    */
    $(".sslide").on("slide", function( event, ui ) {
        $(".values.dist").val(distval(ui.value));
    });
    $(".values.dist").change(function(event) {
        var data = $(this).val();
        if (data > 1000) data = 1000;
        if (data < 0) data = 0;
        $(".sslide").slider("option", "value", invdistval(data));
    });
    /* 
    / distance slider
    */
});