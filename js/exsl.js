// JavaScript File 

$(document).ready(function(){
$('#move').click(function(){
$('#move').effect('slide',{direction:'right'}, 500);
});
}); 
$(document).ready(function(){
$('#explode').click(function(){
$('#explode').effect('explode', {pieces: 9}, 7000);
});
});