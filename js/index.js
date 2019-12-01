$('#video1').click(function(event) {
    console.log('Hola');
    event.preventDefault();
    var href = $(this).attr('href');
    $("#re-video").attr("src", href);
    console.log(href);
});

$('#video2').click(function(event) {
    event.preventDefault();
    var href = $('#video2').attr('href');
    $("#re-video").attr("src", href);
    console.log(href);
});

$('#video3').click(function(event) {
    event.preventDefault();
    var href = $('#video3').attr('href');
    $("#re-video").attr("src", href);
    console.log(href);
});

$('#video4').click(function(event) {
    event.preventDefault();
    var href = $('#video4').attr('href');
    $("#re-video").attr("src", href);
    console.log(href);
});

$('#video5').click(function(event) {
    event.preventDefault();
    var href = $('#video5').attr('href');
    $("#re-video").attr("src", href);
    console.log(href);
});

$('#video6').click(function(event) {
    event.preventDefault();
    var href = $('#video6').attr('href');
    $("#re-video").attr("src", href);
    console.log(href);
});

function myFunction() {
    var iframe = document.getElementById("video1");
    var elmnt = iframe.contentWindow.document.getElementsByTagName("HTML")[0];
    elmnt.style.display = "none";
}