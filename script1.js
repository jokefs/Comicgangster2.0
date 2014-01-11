$(document).ready(function() {
//    $('p').css('color', 'red').hide().fadeIn(5000);
//	  $('li:odd').css('background-color', '#c0c0c0');
	  var zitate = ['Eine unbekannte Person sagte:"Diese Website wurde mit viel Aufwand programmiert und ich sch&auml;tze die Arbeit!"', 'Lukas Spindler meinte:"Wow, ich bin beindrucktdavon."', 'Stefan Toman sagte:"Sehr gut gemacht!"', 'Computergigant sagt: "Alter Schwede ist das geil!"'];
	  $('[data-role="footer"]:first').html(zitate[Math.floor(Math.random()*zitate.length)]);
});