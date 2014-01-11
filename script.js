$(document).ready(function() {
//    $('p').css('color', 'red').hide().fadeIn(5000);
//	  $('li:odd').css('background-color', '#c0c0c0');
	  var zitate = ['Er sagt', 'Sie sagen', 'Wir sagen'];
	  $('[data-role="footer"]:first').html(zitate[Math.floor(Math.random()*zitate.length)]);
});