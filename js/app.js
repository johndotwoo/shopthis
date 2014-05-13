$(document).ready(function() {
	$('.button.tiny.left').click(function(){
		var entryFromUser = $("#formEntryFromUser").val();
		$('.small-block-grid-1.text-center').append('<li>' + entryFromUser + '<button class="button alert tiny right">Remove me!</button></li>');
	});
});