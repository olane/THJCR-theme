/*
File to control dynamic addition/removal of image fields, to allow an arbitrary number of images to be added to a form.

Will add image fields to #images-fieldset when #add-image-field-button is clicked, and remove them when the remove button in a field is clicked.

On submit, images will be under the image[] variable and associated captions under the caption[] variable.
*/



$(document).ready(function(){

	$("#add-image-field-button").click(addImageField);

});

var addImageField = function(event){
	event.preventDefault();
	$("#images-fieldset").append("<div class='image-input'><p><span>Image</span><input name='image[]' type='file' /></p><p><span>Caption (optional)</span><input name='caption[]' type='text' /></p><a href='#images-fieldset' class='remove-image'>Remove image</a></div>");
	$('.remove-image').click(removeImageField);
}

var removeImageField = function(event){
	event.preventDefault();
	$(this).parent().remove();
}

