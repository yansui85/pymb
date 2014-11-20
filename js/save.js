var saved = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
var count = 0;
var toggleSave = function(button) {
	var activeItem = $('ul#tabs').children('.active');
	var index = $('li').index(activeItem);
	saved[index] = !saved[index];
	if(saved[index]){
		count++;
		$(button).find('.fa').removeClass('fa-star-o').addClass('fa-star');
		$(button).find('p').text('Saved');
		$('ul#tabs').children('.active').find('.fa-star').show();
	} 
	else {
		count--;
		$(button).find('.fa').removeClass('fa-star').addClass('fa-star-o');
		$(button).find('p').text('Save');
		$('ul#tabs').children('.active').find('.fa-star').hide();
	}
	$('#save-count').text(count + ' ' + 'saved');
	//following for hiding 0 counts
	// if(count == 0) {
	// 	$(document).find('.toggle').hide();
	// }
	// else {
		// $(document).find('.toggle').show();
		//$(document).find('#save-count').text(count + ' ' + 'saved');		
	// }
};
$(document).ready( function() {
	$('ul#tabs').find('.fa-star').hide();
	$('#save-count').text(count + ' ' + 'saved');
	// if(count == 0) {
	// 	$(document).find('.toggle').hide();
	// }
});