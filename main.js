
$("#what").click(function () {
    $("#outer").css("display", "block");
});
$("#this").click(function () {
    $("#outer").css("display", "none");
});


$("#what").click(function () {
    $("#outer").each(function () {
        if ($(this).is(":visible")) {
            $("#inner1").css("color", "red");
        }
    })
});

$("#this").click(function () {
    $("#outer").each(function () {
        if ($(this).is(":hidden")) {
            $("#inner1").css("color", "blue");
        }
    })
});