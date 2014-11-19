var saved = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
var count = 0;
var toggleSave = function(button, index) {
	saved[index] = !saved[index];
	if(saved[index]){
		count++;
		$(button).find('.fa').removeClass('fa-star-o').addClass('fa-star');
		$(button).find('p').text('Saved');
	} 
	else {
		count--;
		$(button).find('.fa').removeClass('fa-star').addClass('fa-star-o');
		$(button).find('p').text('Save');
	}
	if(count == 0) {
		$(document).find('.toggle').hide();
	}
	else {
		$(document).find('.toggle').show();
		$(document).find('#save-count').text(count + ' ' + 'saved');		
	}
};
$(document).ready( function() {
	if(count == 0) {
		$(document).find('.toggle').hide();
	}
});