// JavaScript File
$(document).ready(function(){
$('#move').click(function(){
$('#move').effect('slide',{direction:'right'}, 500);
});
});
$(document).ready(function(){
$('#ex').click(function(){
$('#ex').effect('explode', {pieces: 4}, 7000);
});
});