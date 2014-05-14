$(document).ready(function() {
	$('.button.tiny.left').click(function() {
		var entryFromUser = $("#formEntryFromUser").val();
		$('.small-block-grid-1.text-center').append('<li><input type="checkbox"><span>' + ' ' + entryFromUser + '</span><button class="button alert tiny right">Remove me!</button></li>');
	})

	$('#shopping-list').on('click','.button.alert.tiny.right',function() {
		$(this).closest('li').remove();
	});
});