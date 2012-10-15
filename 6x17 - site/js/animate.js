$(document).ready(function() {

	$('.galleryHead').click(function(){
		$(this).parent().animate({width: "85.5%"}, "slow");
		//$(this).parent().animate({width: "85.5%"}, "slow");//
		
		var em = $(this).parent().html();
		console.log(em);

		var newLink = '<a href="#">' + em + '</a>'
		console.log(newLink);

		$(this).parent().html(newLink);

		


	});


			
});