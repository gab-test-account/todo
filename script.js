function changeState(rowNumber){
	$('#checkbox' + rowNumber).toggleClass('checkbox-done');
	$('#input' + rowNumber).toggleClass('done');
}

window.onload = function(){
	var rows = 1;
	$('.add-button').click(function(){
		if(!($('.new-item-input').val())){
			alert("Empty!");
		}
		else{
			$('.list').prepend('<div class="list-item" id="list-item' + rows + '"><div class="list-item-state"><div class="list-item-checkbox" id="checkbox' + rows + '" onclick="changeState(' + rows + ')""></div></div><input type="text" id="input' + rows + '" class="list-item-input" value="' + $(".new-item-input").val() + '" /><div class="delete-list-item"></div></div><hr>');
			$('.list-item').height($('.list-item-state').height);
			rows++;
			$('.new-item-input').val("");
		}
	});
	$('.list-item-checkbox').click(function(){
		console.log("klik!");
	});
	$(document).on('click', '.delete-list-item', function() {
		$(this).parent().remove();
	});
};
