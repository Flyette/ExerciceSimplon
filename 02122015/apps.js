$(document).ready(function(){

$("a").click(function(){
	var attribut = $(this).attr('href'); //#lipsum

$(attribut).show();
});
});