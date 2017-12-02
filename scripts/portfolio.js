$(document).ready(function() {
	updateHeight();
	$('#portfolio a').click(function() {
		var portfolioHref = $(this).attr('href');
		var portfolioAlt = $(this).attr('title');
		$('figure img').attr({ src: portfolioHref, alt: portfolioAlt }); 
		$('figcaption').html(portfolioAlt);
		return false;
	});
});

$(window).ready(updateHeight);
$(window).resize(updateHeight);

function updateHeight() {
	var div = $('.img-hover');
	var width = div.width();
	div.css('height', width * 0.69);
}