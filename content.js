// Set the background color of the page to red
document.body.style['background-color'] = 'red';

// Listen for messages from the popup and set the background color appropriately.
forge.message.listen("*", function (color) {
	document.body.style['background-color'] = color;
});