var ticTac = 0;

$(document).ready(function() {
	$('.cell').one("click", function() {
		$(this)
			.toggleClass(getClassToToggle())
			.toggleClass('nohover');
		$('#board').toggleClass('hover-cross');
		var index = $('.cell').index(this);
		console.log('click ' + index);
	});
});

function getClassToToggle() {
	var cssClass = (ticTac % 2) ? 'tic' : 'tac';
	ticTac++;
	return cssClass;
}
